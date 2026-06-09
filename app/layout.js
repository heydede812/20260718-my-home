import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata = {
  title: '아를로이 | 여행의 준비를 더 우아하게',
  description: '여행을 위한 프리미엄 화장품 파우치 아를로이 트래블 오거나이저 파우치. 대용량 수납, 세워서 보관, 생활방수 원단으로 여행의 준비를 더욱 우아하고 스마트하게 정리하세요.',
  keywords: '화장품파우치, 여행용파우치, 프리미엄파우치, 메이크업파우치, 수납파우치, 아를로이, 아를로이파우치',
  openGraph: {
    title: 'arlloy',
    description: '아를로이 여행용 파우치 | 당신의 여행을 더 아름답고 이롭게\n여행과 일상을 더욱 깔끔하게 정리하는 아를로이 여행용 파우치. 감각적인 디자인과 실용적인 수납으로 어디서나 편리하게 사용할 수 있습니다.',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.arlloy.co.kr',
    siteName: '아를로이',
    images: [
      {
        url: 'https://www.arlloy.co.kr/images/브라운파우치내부.jpg',
        width: 800,
        height: 600,
        alt: '아를로이 브라운 파우치 내부',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  // Google & Naver Search Engine Verification (Fill in your own codes)
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
  other: {
    'naver-site-verification': 'YOUR_NAVER_VERIFICATION_CODE',
  }
}

export default function RootLayout({ children }) {
  // Naver Shopping Product Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "아를로이 트래블 오거나이저 파우치",
    "image": "https://arlloy.com/images/pouch_black_open.png",
    "description": "여행의 준비를 더 우아하게. 대용량 수납, 세워서 보관하는 생활방수 프리미엄 트래블 오거나이저 파우치.",
    "brand": {
      "@type": "Brand",
      "name": "아를로이"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "KRW",
      "price": "38250",
      "availability": "https://schema.org/InStock",
      "url": "https://arlloy.com"
    }
  }

  return (
    <html lang="ko" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-brand-black min-h-screen">
        {children}
      </body>
    </html>
  )
}
