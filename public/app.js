/**
 * ARLLOY Premium Lifestyle Store - Interactive Client Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. Header Scroll and Mobile Navigation
    // -------------------------------------------------------------
    const header = document.getElementById('main-header');
    const mobileMenuBtn = document.getElementById('btn-mobile-menu');
    const mobileDrawer = document.getElementById('mobile-drawer');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    if (mobileMenuBtn && mobileDrawer) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileDrawer.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileDrawer.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });
    }

    // Smooth scroll navigation close drawer
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileDrawer.classList.remove('active');
            if (mobileMenuBtn) {
                mobileMenuBtn.querySelector('i').className = 'fa-solid fa-bars';
            }
        });
    });

    // -------------------------------------------------------------
    // 2. Interactive Signature Product Panel
    // -------------------------------------------------------------
    const sigTabs = document.querySelectorAll('.sig-trigger-item');
    const sigThumbs = document.querySelectorAll('.sig-thumb');
    const sigImages = document.querySelectorAll('.sig-state-img');
    const sigTitle = document.getElementById('sig-active-title');

    const setSignatureActiveIndex = (index) => {
        // Update tabs
        sigTabs.forEach((tab, i) => {
            if (i === index) tab.classList.add('active');
            else tab.classList.remove('active');
        });
        // Update thumbnails
        sigThumbs.forEach((thumb, i) => {
            if (i === index) thumb.classList.add('active');
            else thumb.classList.remove('active');
        });
        // Update images
        sigImages.forEach((img, i) => {
            if (i === index) img.classList.add('active');
            else img.classList.remove('active');
        });
        // Update title label
        if (sigTitle && sigTabs[index]) {
            sigTitle.innerText = sigTabs[index].querySelector('h4').innerText;
        }
    };

    sigTabs.forEach((tab, idx) => {
        tab.addEventListener('click', () => setSignatureActiveIndex(idx));
    });

    sigThumbs.forEach((thumb, idx) => {
        thumb.addEventListener('click', () => setSignatureActiveIndex(idx));
    });

    // -------------------------------------------------------------
    // 3. Shopping Cart Drawer Manager (LocalStorage Sync)
    // -------------------------------------------------------------
    let cart = [];
    const cartDrawer = document.getElementById('cart-drawer');
    const cartBackdrop = document.getElementById('cart-backdrop');
    const btnOpenCart = document.getElementById('btn-open-cart');
    const btnCloseCart = document.getElementById('btn-close-cart');
    const btnFloatingCart = document.getElementById('btn-floating-cart');
    
    const headerCartCount = document.getElementById('header-cart-count');
    const floatingCartCount = document.getElementById('floating-cart-count');
    const cartDrawerCount = document.getElementById('cart-drawer-count');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartShippingBanner = document.getElementById('cart-shipping-banner');
    const cartShippingMessage = document.getElementById('cart-shipping-message');
    const cartShippingProgressBar = document.getElementById('cart-shipping-progress-bar');
    const cartDrawerSummary = document.getElementById('cart-drawer-summary');
    const cartSubtotalPrice = document.getElementById('cart-subtotal-price');

    // Load cart
    const loadCart = () => {
        const savedCart = localStorage.getItem('arlloy_static_cart');
        if (savedCart) {
            try {
                cart = JSON.parse(savedCart);
            } catch (e) {
                cart = [];
            }
        }
        renderCart();
    };

    // Save cart
    const saveCart = () => {
        localStorage.setItem('arlloy_static_cart', JSON.stringify(cart));
        renderCart();
    };

    // Render cart items
    const renderCart = () => {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        // Update counts
        if (headerCartCount) headerCartCount.innerText = totalItems;
        if (floatingCartCount) floatingCartCount.innerText = totalItems;
        if (cartDrawerCount) cartDrawerCount.innerText = `(${totalItems}개)`;

        // Show/hide floating bubble
        if (btnFloatingCart) {
            if (totalItems > 0) {
                btnFloatingCart.style.display = 'flex';
            } else {
                btnFloatingCart.style.display = 'none';
            }
        }

        // Render shipping banner
        const shippingThreshold = 75;
        if (cartShippingBanner && cartShippingMessage && cartShippingProgressBar) {
            if (subtotal >= shippingThreshold) {
                cartShippingMessage.innerHTML = '🎉 축하합니다! 무료 글로벌 배송 대상입니다.';
                cartShippingProgressBar.style.width = '100%';
            } else {
                const diff = shippingThreshold - subtotal;
                cartShippingMessage.innerHTML = `무료 배송까지 <strong style="color: var(--color-lavender); font-weight: 700;">$${diff.toFixed(2)}</strong> 남았습니다.`;
                cartShippingProgressBar.style.width = `${(subtotal / shippingThreshold) * 100}%`;
            }
        }

        // Render items list
        if (cartItemsList) {
            if (cart.length === 0) {
                cartItemsList.innerHTML = `
                    <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 16px; color: var(--color-gray); padding: 48px 0;">
                        <i class="fa-solid fa-shopping-bag" style="font-size: 48px; opacity: 0.3;"></i>
                        <p style="font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;">장바구니가 비어 있습니다</p>
                    </div>
                `;
                if (cartDrawerSummary) cartDrawerSummary.style.display = 'none';
            } else {
                cartItemsList.innerHTML = '';
                cart.forEach(item => {
                    const row = document.createElement('div');
                    row.className = 'cart-item-row';
                    row.innerHTML = `
                        <div class="cart-item-thumb">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="cart-item-info">
                            <span class="cart-item-category">${item.category}</span>
                            <h4 class="cart-item-name">${item.name}</h4>
                            <div class="cart-item-actions">
                                <div class="quantity-controller">
                                    <button class="btn-qty-minus" data-id="${item.id}"><i class="fa-solid fa-minus"></i></button>
                                    <span>${item.quantity}</span>
                                    <button class="btn-qty-plus" data-id="${item.id}"><i class="fa-solid fa-plus"></i></button>
                                </div>
                                <button class="btn-remove-item" data-id="${item.id}">삭제</button>
                            </div>
                        </div>
                        <div class="cart-item-price-side">
                            <span class="item-total-price">$${(item.price * item.quantity).toFixed(2)}</span>
                            <span class="item-single-price">개당 $${item.price}.00</span>
                        </div>
                    `;
                    cartItemsList.appendChild(row);
                });
                if (cartDrawerSummary) {
                    cartDrawerSummary.style.display = 'block';
                    if (cartSubtotalPrice) cartSubtotalPrice.innerText = `$${subtotal.toFixed(2)}`;
                }
            }
        }
    };

    // Cart Events listeners
    const openCartDrawer = () => {
        if (cartDrawer) cartDrawer.classList.add('active');
        if (cartBackdrop) cartBackdrop.classList.add('active');
    };

    const closeCartDrawer = () => {
        if (cartDrawer) cartDrawer.classList.remove('active');
        if (cartBackdrop) cartBackdrop.classList.remove('active');
    };

    if (btnOpenCart) btnOpenCart.addEventListener('click', openCartDrawer);
    if (btnCloseCart) btnCloseCart.addEventListener('click', closeCartDrawer);
    if (cartBackdrop) cartBackdrop.addEventListener('click', closeCartDrawer);
    if (btnFloatingCart) btnFloatingCart.addEventListener('click', openCartDrawer);

    // Add to cart action triggers
    const addProductToCart = (id, name, price, category, image) => {
        const existing = cart.find(item => item.id === id);
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({
                id,
                name,
                price: parseFloat(price),
                category,
                image,
                quantity: 1
            });
        }
        saveCart();
        openCartDrawer();
    };

    // Add click listeners on collection product cards
    document.querySelectorAll('.product-card').forEach(card => {
        const btn = card.querySelector('.btn-quick-add');
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = card.getAttribute('data-id');
                const name = card.getAttribute('data-name');
                const price = card.getAttribute('data-price');
                const category = card.getAttribute('data-category');
                const img = card.getAttribute('data-img');
                addProductToCart(id, name, price, category, img);
            });
        }
    });

    // Add click listener on signature product checkout button
    const btnBuySig = document.getElementById('btn-buy-signature');
    if (btnBuySig) {
        btnBuySig.addEventListener('click', () => {
            addProductToCart(
                'travel-org',
                '아를로이 트래블 오거나이저',
                59,
                '트래블 악세사리',
                'images/아이보리브랜드.png'
            );
        });
    });

    // Cart list quantity updates listener
    if (cartItemsList) {
        cartItemsList.addEventListener('click', (e) => {
            const target = e.target.closest('button');
            if (!target) return;

            const id = target.getAttribute('data-id');
            const item = cart.find(i => i.id === id);
            if (!item) return;

            if (target.classList.contains('btn-qty-plus')) {
                item.quantity += 1;
                saveCart();
            } else if (target.classList.contains('btn-qty-minus')) {
                item.quantity -= 1;
                if (item.quantity <= 0) {
                    cart = cart.filter(i => i.id !== id);
                }
                saveCart();
            } else if (target.classList.contains('btn-remove-item')) {
                cart = cart.filter(i => i.id !== id);
                saveCart();
            }
        });
    }

    // -------------------------------------------------------------
    // 4. Newsletter Form Validations
    // -------------------------------------------------------------
    const newsForm = document.getElementById('newsletter-form');
    const newsInput = document.getElementById('newsletter-email-input');
    const newsError = document.getElementById('newsletter-error-txt');
    const newsFormBox = document.getElementById('newsletter-form-box');
    const newsSuccessBox = document.getElementById('newsletter-success-block');

    if (newsForm) {
        newsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const val = newsInput.value;
            if (!val) {
                newsError.innerText = '이메일 주소를 입력해 주세요.';
                return;
            }
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(val)) {
                newsError.innerText = '올바른 이메일 주소를 입력해 주세요.';
                return;
            }

            newsError.innerText = '';
            if (newsFormBox) newsFormBox.style.display = 'none';
            if (newsSuccessBox) newsSuccessBox.style.display = 'flex';
        });
    }

    // -------------------------------------------------------------
    // 5. Exit-Intent capture Popup
    // -------------------------------------------------------------
    const exitPopup = document.getElementById('exit-intent-popup');
    const btnCloseExit = document.getElementById('btn-close-exit-popup');
    let shown = false;

    document.addEventListener('mouseleave', (e) => {
        if (e.clientY < 20 && !shown && exitPopup) {
            exitPopup.classList.add('active');
            shown = true;
        }
    });

    if (btnCloseExit && exitPopup) {
        btnCloseExit.addEventListener('click', () => {
            exitPopup.classList.remove('active');
        });
    }

    // Initial Load
    loadCart();
});
