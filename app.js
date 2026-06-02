/* -------------------------------------------------------------
 * arlloy Premium Folding Pouch - Interactive Logic
 * ------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    
    /* ---------------------------------------------------------
     * 1. Header Scroll & Mobile Drawer Navigation
     * --------------------------------------------------------- */
    const header = document.getElementById('main-header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    // Add scrolled class to header on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Toggle Mobile Drawer
    if (mobileMenuBtn && mobileDrawer) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mobileDrawer.classList.toggle('active');
        });
    }
    
    // Close Drawer when clicking mobile nav links
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileDrawer.classList.remove('active');
        });
    });

    /* ---------------------------------------------------------
     * 2. Interactive Accordion Folding Simulator
     * --------------------------------------------------------- */
    const slider = document.getElementById('folding-slider');
    const sliderFill = document.getElementById('slider-fill-track');
    const pouchClosedView = document.getElementById('pouch-closed-view');
    const pouchOpenedView = document.getElementById('pouch-opened-view');
    const statusLeft = document.getElementById('status-left');
    const statusRight = document.getElementById('status-right');
    const btnFoldClose = document.getElementById('btn-fold-close');
    const btnFoldOpen = document.getElementById('btn-fold-open');
    const foldingPouch = document.getElementById('folding-pouch');
    const accordionBars = document.querySelectorAll('.accordion-bar');
    
    function updateFoldingState(value) {
        // Update slider track fill
        if (sliderFill) {
            sliderFill.style.width = `${value}%`;
        }
        if (slider) {
            slider.value = value;
        }
        
        // Show/Hide views based on folding threshold (50%)
        if (value < 50) {
            pouchClosedView.classList.add('active');
            pouchOpenedView.classList.remove('active');
            statusLeft.classList.add('active');
            statusRight.classList.remove('active');
        } else {
            pouchClosedView.classList.remove('active');
            pouchOpenedView.classList.add('active');
            statusLeft.classList.remove('active');
            statusRight.classList.add('active');
        }
        
        // Dynamic scaling to simulate folding accordion
        if (foldingPouch) {
            if (value > 0 && value < 100) {
                foldingPouch.classList.add('folding');
            } else {
                foldingPouch.classList.remove('folding');
            }
        }
        
        // Animate accordion lines overlay based on value (0 to 100)
        accordionBars.forEach((bar, index) => {
            const scale = Math.max(0, 1 - (value / 100));
            bar.style.transform = `scaleX(${scale})`;
        });
    }
    
    if (slider) {
        slider.addEventListener('input', (e) => {
            updateFoldingState(e.target.value);
        });
    }
    
    if (btnFoldClose) {
        btnFoldClose.addEventListener('click', () => {
            // Animate close from current to 0
            let val = parseInt(slider.value);
            const interval = setInterval(() => {
                if (val <= 0) {
                    clearInterval(interval);
                } else {
                    val -= 5;
                    updateFoldingState(Math.max(0, val));
                }
            }, 15);
        });
    }
    
    if (btnFoldOpen) {
        btnFoldOpen.addEventListener('click', () => {
            // Animate open from current to 100
            let val = parseInt(slider.value);
            const interval = setInterval(() => {
                if (val >= 100) {
                    clearInterval(interval);
                } else {
                    val += 5;
                    updateFoldingState(Math.min(100, val));
                }
            }, 15);
        });
    }
    
    // Initialize simulator
    if (slider) {
        updateFoldingState(0);
    }

    /* ---------------------------------------------------------
     * 3. Dynamic Color Showcase Section (5 colors)
     * --------------------------------------------------------- */
    const colorData = {
        ivory: {
            engName: "Warm Ivory",
            korName: "웜 아이보리",
            desc: "깨끗하고 부드러운 일상의 순수함을 닮은 웜 아이보리. 어떤 소품이나 가방과도 완벽하게 조화를 이루며 세련된 감성 라이프를 완성합니다.",
            originalPrice: "₩45,000",
            salePrice: "₩38,250",
            discount: "15% OFF",
            glowColor: "#f7f4ef"
        },
        black: {
            engName: "Charcoal Black",
            korName: "차콜 블랙",
            desc: "시크하고 깊이 있는 도시의 밤을 연상시키는 차콜 블랙. 유행을 타지 않고 먼지나 오염에 가장 강해 매일 부담 없이 쓸 수 있습니다.",
            originalPrice: "₩45,000",
            salePrice: "₩38,250",
            discount: "15% OFF",
            glowColor: "#1e1d1a"
        },
        brown: {
            engName: "Classic Brown",
            korName: "클래식 브라운",
            desc: "시간이 흘러도 변치 않는 깊이감을 담은 클래식 브라운. 프리미엄 나일론의 광택과 어우러져 한층 묵직하고 따스한 감성을 줍니다.",
            originalPrice: "₩45,000",
            salePrice: "₩38,250",
            discount: "15% OFF",
            glowColor: "#6e473b"
        }
    };

    const colorDots = document.querySelectorAll('.color-dot');
    const colorNameDisplay = document.getElementById('color-name-display');
    const colorTitleDisplay = document.getElementById('color-title-display');
    const colorDescDisplay = document.getElementById('color-desc-display');
    const originalPriceDisplay = document.querySelector('.original-price');
    const discountRateDisplay = document.querySelector('.discount-rate');
    const salePriceDisplay = document.querySelector('.sale-price');
    const colorSlides = document.querySelectorAll('.color-slide');
    const bgGlow = document.getElementById('dynamic-bg-glow');
    
    colorDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const selectedColor = dot.getAttribute('data-color');
            const data = colorData[selectedColor];
            
            if (!data) return;
            
            // 1. Update dot active states
            colorDots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            
            // 2. Update Text content with subtle fade animation
            [colorNameDisplay, colorTitleDisplay, colorDescDisplay].forEach(el => {
                el.style.opacity = 0;
                el.style.transform = 'translateY(5px)';
            });
            
            setTimeout(() => {
                colorNameDisplay.textContent = data.engName;
                colorTitleDisplay.textContent = data.korName;
                colorDescDisplay.textContent = data.desc;
                originalPriceDisplay.textContent = data.originalPrice;
                discountRateDisplay.textContent = data.discount;
                salePriceDisplay.textContent = data.salePrice;
                
                [colorNameDisplay, colorTitleDisplay, colorDescDisplay].forEach(el => {
                    el.style.opacity = 1;
                    el.style.transform = 'translateY(0)';
                    el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                });
            }, 200);
            
            // 3. Switch active gallery image
            colorSlides.forEach(slide => {
                if (slide.getAttribute('data-color') === selectedColor) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
            
            // 4. Update dynamic ambient glow background
            if (bgGlow) {
                bgGlow.style.backgroundColor = data.glowColor;
            }
        });
    });

    /* ---------------------------------------------------------
     * 4. Detailed Structure Gallery Tabs
     * --------------------------------------------------------- */
    const galleryTabBtns = document.querySelectorAll('.gallery-tab-btn');
    const galleryViewContainers = document.querySelectorAll('.gallery-view-container');
    const galleryInfoContents = document.querySelectorAll('.gallery-info-content');
    const viewSelectBtns = document.querySelectorAll('.view-select-btn');
    
    let activeGalleryColor = 'brown'; // default 'brown', 'ivory', or 'black'
    
    galleryTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedColor = btn.getAttribute('data-gallery-color');
            activeGalleryColor = selectedColor;
            
            // Update tabs active state
            galleryTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Switch images view containers
            galleryViewContainers.forEach(container => {
                if (container.getAttribute('data-gallery-color') === selectedColor) {
                    container.classList.add('active');
                } else {
                    container.classList.remove('active');
                }
            });
            
            // Switch details explanation content
            galleryInfoContents.forEach(content => {
                if (content.getAttribute('data-gallery-color') === selectedColor) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
            
            // Reset to empty-top view when switching tabs
            resetGalleryViews();
        });
    });
    
    viewSelectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetView = btn.getAttribute('data-view-target');
            
            // Update view button active state
            viewSelectBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Inside active color view container, change image visibility
            const activeContainer = document.querySelector(`.gallery-view-container[data-gallery-color="${activeGalleryColor}"]`);
            if (activeContainer) {
                const images = activeContainer.querySelectorAll('.gallery-img');
                images.forEach(img => {
                    if (img.getAttribute('data-view') === targetView) {
                        img.classList.add('active');
                    } else {
                        img.classList.remove('active');
                    }
                });
            }
        });
    });
    
    function resetGalleryViews() {
        // Reset buttons
        viewSelectBtns.forEach((btn, index) => {
            if (index === 0) btn.classList.add('active');
            else btn.classList.remove('active');
        });
        
        // Reset images
        galleryViewContainers.forEach(container => {
            const images = container.querySelectorAll('.gallery-img');
            images.forEach((img, index) => {
                if (index === 0) img.classList.add('active');
                else img.classList.remove('active');
            });
        });
    }

    /* ---------------------------------------------------------
     * 5. Cosmetic Packing Game Logic
     * --------------------------------------------------------- */
    const cosmeticItemBtns = document.querySelectorAll('.cosmetic-item-btn');
    const schematicSlots = document.querySelectorAll('.schematic-slot');
    const packedCountDisplay = document.getElementById('packed-count');
    const btnResetPacking = document.getElementById('btn-reset-packing');
    const packingStatusBanner = document.getElementById('packing-status-banner');
    
    let packedItemsCount = 0;
    
    cosmeticItemBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetItem = btn.getAttribute('data-item');
            
            // Find slot matching item
            const matchingSlot = Array.from(schematicSlots).find(slot => slot.getAttribute('data-slot') === targetItem);
            
            if (matchingSlot && !matchingSlot.classList.contains('filled')) {
                // Animate packing item
                matchingSlot.classList.add('filled');
                btn.classList.add('packed');
                
                packedItemsCount++;
                packedCountDisplay.textContent = packedItemsCount;
                
                // Show completion banner if all items packed (6 items total)
                if (packedItemsCount === 6) {
                    if (packingStatusBanner) {
                        packingStatusBanner.classList.add('visible');
                    }
                }
            }
        });
    });
    
    if (btnResetPacking) {
        btnResetPacking.addEventListener('click', () => {
            // Reset slots and buttons
            schematicSlots.forEach(slot => slot.classList.remove('filled'));
            cosmeticItemBtns.forEach(btn => btn.classList.remove('packed'));
            
            packedItemsCount = 0;
            if (packedCountDisplay) {
                packedCountDisplay.textContent = packedItemsCount;
            }
            if (packingStatusBanner) {
                packingStatusBanner.classList.remove('visible');
            }
        });
    }

    /* ---------------------------------------------------------
     * 6. Scroll Reveal Animations (Intersection Observer)
     * --------------------------------------------------------- */
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Animates only once
            }
        });
    };
    
    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null, // viewport
        threshold: 0.15, // trigger when 15% element is visible
        rootMargin: '0px 0px -50px 0px' // offset bottom trigger slightly
    });
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});
