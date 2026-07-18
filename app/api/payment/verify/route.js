import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { paymentId, totalAmount } = await request.json();

    if (!paymentId || totalAmount === undefined) {
      return NextResponse.json(
        { success: false, message: 'paymentId와 totalAmount는 필수 항목입니다.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.PORTONE_API_KEY;

    // 만약 Portone API Key가 환경변수에 설정되어 있지 않다면,
    // 데모/테스트 환경에서의 편의를 위해 모의 검증을 통과 시킵니다.
    if (!apiKey) {
      console.warn(
        'PORTONE_API_KEY가 설정되어 있지 않습니다. 데모 모드로 전환하여 무조건 검증 성공 처리합니다.'
      );
      return NextResponse.json({
        success: true,
        message: '데모 모드: 검증 성공 처리 완료 (실제 연동을 위해 PORTONE_API_KEY를 설정해주세요)',
        mocked: true,
      });
    }

    // 1. 포트원 API 액세스 토큰 발급
    const loginResponse = await fetch('https://api.portone.io/login/api-key', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ apiKey }),
    });

    if (!loginResponse.ok) {
      const errorText = await loginResponse.text();
      console.error('포트원 토큰 발급 실패:', errorText);
      return NextResponse.json(
        { success: false, message: '포트원 API 인증에 실패했습니다.' },
        { status: 500 }
      );
    }

    const { accessToken } = await loginResponse.json();

    // 2. 포트원 결제 내역 단건 조회
    const paymentResponse = await fetch(`https://api.portone.io/payments/${paymentId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!paymentResponse.ok) {
      const errorText = await paymentResponse.text();
      console.error('포트원 결제 조회 실패:', errorText);
      return NextResponse.json(
        { success: false, message: '결제 내역 조회에 실패했습니다.' },
        { status: 404 }
      );
    }

    const paymentData = await paymentResponse.json();

    // 3. 결제 금액 검증
    // 포트원 V2 응답의 총액은 paymentData.amount.total에 있습니다.
    const actualPaidAmount = paymentData.amount.total;

    if (actualPaidAmount === totalAmount) {
      console.log(`결제 검증 성공! paymentId: ${paymentId}, 금액: ${actualPaidAmount}`);
      // TODO: 데이터베이스에 주문 정보를 저장하는 비즈니스 로직을 추가하십시오.
      return NextResponse.json({
        success: true,
        message: '결제가 성공적으로 검증되었습니다.',
      });
    } else {
      console.error(
        `결제 위변조 의심: 요청 금액(${totalAmount}) !== 실제 결제 금액(${actualPaidAmount})`
      );
      return NextResponse.json(
        {
          success: false,
          message: '결제 요청 금액과 실제 승인 금액이 일치하지 않습니다.',
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('결제 검증 내부 오류:', error);
    return NextResponse.json(
      { success: false, message: '서버 내부 오류로 결제 검증에 실패했습니다.', error: error.message },
      { status: 500 }
    );
  }
}
