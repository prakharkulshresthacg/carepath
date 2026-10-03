/**
 * VEYRA — Working Prototype JavaScript Application
 * Independent Sustainable Shopping Intelligence
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    currentPin: '208001',
    currentCity: 'Kanpur',
    currentProduct: 'iPhone 15',
    activeFilter: 'best',
    activeModal: null
  };

  // Mock Database for Realistic Product Comparisons
  const productsDB = {
    'iPhone 15': {
      fullName: 'Apple iPhone 15 (128 GB - Black / Blue / Green)',
      category: 'Smartphones',
      baseMrp: 69900,
      baseEcoScore: 78,
      stores: [
        {
          id: 'croma',
          name: 'Croma',
          logoText: 'Croma',
          basePrice: 59990,
          deliveryFee: 99,
          packagingFee: 0,
          totalPrice: 60089,
          etaHours: 4,
          etaText: 'Today by 8:00 PM',
          ecoScore: 79,
          ecoLabel: 'Store pickup & low transit',
          badge: 'BEST FINAL PRICE',
          badgeClass: 'tag-best-price',
          isBestPrice: true
        },
        {
          id: 'flipkart',
          name: 'Flipkart',
          logoText: 'Flip',
          basePrice: 60999,
          deliveryFee: 49,
          packagingFee: 49,
          totalPrice: 61097,
          etaHours: 48,
          etaText: 'Delivery in 2 Days',
          ecoScore: 71,
          ecoLabel: 'Standard packaging',
          badge: 'Fast Dispatch',
          badgeClass: 'tag-official',
          isBestPrice: false
        },
        {
          id: 'amazon',
          name: 'Amazon India',
          logoText: 'amz',
          basePrice: 61499,
          deliveryFee: 0,
          packagingFee: 0,
          totalPrice: 61499,
          etaHours: 24,
          etaText: 'Tomorrow by 11 AM (Prime)',
          ecoScore: 74,
          ecoLabel: 'Consolidated dispatch',
          badge: 'Free Delivery',
          badgeClass: 'tag-official',
          isBestPrice: false
        },
        {
          id: 'cashify',
          name: 'Cashify (Refurbished Superb)',
          logoText: 'Cash',
          basePrice: 46999,
          deliveryFee: 0,
          packagingFee: 0,
          totalPrice: 46999,
          etaHours: 28,
          etaText: 'Tomorrow evening',
          ecoScore: 98,
          ecoLabel: '172g E-waste avoided · 1-yr Warranty',
          badge: 'HIGHEST ECO CHOICE',
          badgeClass: 'tag-eco-hero',
          isRefurb: true,
          isBestPrice: false
        },
        {
          id: 'reliance',
          name: 'Reliance Digital',
          logoText: 'Rel',
          basePrice: 60490,
          deliveryFee: 0,
          packagingFee: 0,
          totalPrice: 60490,
          etaHours: 36,
          etaText: 'Delivery in 2 Days',
          ecoScore: 76,
          ecoLabel: 'Direct warehouse dispatch',
          badge: 'Authorized Seller',
          badgeClass: 'tag-official',
          isBestPrice: false
        },
        {
          id: 'vijay',
          name: 'Vijay Sales',
          logoText: 'Vijay',
          basePrice: 60900,
          deliveryFee: 0,
          packagingFee: 0,
          totalPrice: 60900,
          etaHours: 30,
          etaText: 'Tomorrow afternoon',
          ecoScore: 75,
          ecoLabel: 'Hub consolidated',
          badge: 'Verified Dealer',
          badgeClass: 'tag-official',
          isBestPrice: false
        },
        {
          id: 'apple',
          name: 'Apple Store Online',
          logoText: 'Apple',
          basePrice: 69900,
          deliveryFee: 0,
          packagingFee: 0,
          totalPrice: 69900,
          etaHours: 72,
          etaText: '3-4 Business Days',
          ecoScore: 92,
          ecoLabel: '100% Recycled packaging · Carbon neutral shipping',
          badge: 'OFFICIAL STORE',
          badgeClass: 'tag-official',
          isBestPrice: false
        }
      ]
    },

    'MacBook Air M3': {
      fullName: 'Apple MacBook Air 13" M3 (8-core CPU / 8GB / 256GB SSD)',
      category: 'Laptops',
      baseMrp: 114900,
      baseEcoScore: 84,
      stores: [
        {
          id: 'croma',
          name: 'Croma',
          logoText: 'Croma',
          basePrice: 98990,
          deliveryFee: 0,
          packagingFee: 0,
          totalPrice: 98990,
          etaHours: 6,
          etaText: 'Today Evening by 7 PM',
          ecoScore: 83,
          ecoLabel: 'Local store fulfillment',
          badge: 'BEST FINAL PRICE',
          badgeClass: 'tag-best-price',
          isBestPrice: true
        },
        {
          id: 'amazon',
          name: 'Amazon India',
          logoText: 'amz',
          basePrice: 99990,
          deliveryFee: 0,
          packagingFee: 0,
          totalPrice: 99990,
          etaHours: 24,
          etaText: 'Tomorrow Morning',
          ecoScore: 78,
          ecoLabel: 'Prime delivery included',
          badge: 'Reliable Stock',
          badgeClass: 'tag-official',
          isBestPrice: false
        },
        {
          id: 'flipkart',
          name: 'Flipkart',
          logoText: 'Flip',
          basePrice: 99990,
          deliveryFee: 99,
          packagingFee: 49,
          totalPrice: 100138,
          etaHours: 48,
          etaText: 'Delivery in 2 Days',
          ecoScore: 75,
          ecoLabel: 'Standard packaging',
          badge: 'Special Bank Offer',
          badgeClass: 'tag-official',
          isBestPrice: false
        },
        {
          id: 'apple',
          name: 'Apple Store Online',
          logoText: 'Apple',
          basePrice: 114900,
          deliveryFee: 0,
          packagingFee: 0,
          totalPrice: 114900,
          etaHours: 72,
          etaText: '3-4 Business Days',
          ecoScore: 94,
          ecoLabel: '50% Recycled aluminum enclosure · Trade-in discount eligible',
          badge: 'HIGHEST ECO CHOICE',
          badgeClass: 'tag-eco-hero',
          isBestPrice: false
        }
      ]
    },

    'Bodum French Press': {
      fullName: 'Bodum Chambord 8-Cup French Press (1.0L, Shatterproof Borosilicate Glass)',
      category: 'Kitchenware',
      baseMrp: 3500,
      baseEcoScore: 92,
      stores: [
        {
          id: 'amazon',
          name: 'Amazon India',
          logoText: 'amz',
          basePrice: 2450,
          deliveryFee: 40,
          packagingFee: 0,
          totalPrice: 2490,
          etaHours: 24,
          etaText: 'Tomorrow by 2 PM',
          ecoScore: 89,
          ecoLabel: 'Plastic-free cardboard package',
          badge: 'BEST FINAL PRICE',
          badgeClass: 'tag-best-price',
          isBestPrice: true
        },
        {
          id: 'croma',
          name: 'Croma',
          logoText: 'Croma',
          basePrice: 2690,
          deliveryFee: 0,
          packagingFee: 0,
          totalPrice: 2690,
          etaHours: 48,
          etaText: '2 Days Delivery',
          ecoScore: 88,
          ecoLabel: 'Retail store pack',
          badge: 'Available',
          badgeClass: 'tag-official',
          isBestPrice: false
        },
        {
          id: 'blue-tokai',
          name: 'Blue Tokai Roasters',
          logoText: 'BT',
          basePrice: 2800,
          deliveryFee: 0,
          packagingFee: 0,
          totalPrice: 2800,
          etaHours: 36,
          etaText: 'Delivery in 2 Days',
          ecoScore: 96,
          ecoLabel: '100% Compostable packaging · Fair trade partner',
          badge: 'HIGHEST ECO CHOICE',
          badgeClass: 'tag-eco-hero',
          isBestPrice: false
        }
      ]
    }
  };

  // City PIN database for location updates
  const pinCities = {
    '208001': 'Kanpur, UP',
    '110001': 'New Delhi',
    '400001': 'Mumbai, MH',
    '560001': 'Bengaluru, KA',
    '700001': 'Kolkata, WB',
    '600001': 'Chennai, TN'
  };

  // DOM Elements
  const navbar = document.getElementById('top-navbar');
  const navPinBtn = document.getElementById('nav-pin-btn');
  const activePinDisplay = document.getElementById('active-pin-display');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobilePinBtn = document.getElementById('mobile-pin-btn');
  const mobilePinDisplay = document.getElementById('mobile-pin-display');

  // Search Box elements
  const searchForm = document.getElementById('comparison-search-form');
  const searchProductInput = document.getElementById('search-product-input');
  const searchPinInput = document.getElementById('search-pin-input');
  const searchSuggestions = document.getElementById('search-suggestions');
  const showcaseInteractive = document.getElementById('hero-card-interactive');
  const openDemoCompareBtn = document.getElementById('open-demo-compare-btn');
  const mobileCompareBtn = document.getElementById('mobile-compare-btn');

  // Comparison Modal elements
  const compareModal = document.getElementById('compare-modal');
  const compareModalBackdrop = document.getElementById('compare-modal-backdrop');
  const closeCompareModalBtn = document.getElementById('close-compare-modal-btn');
  const compareModalTitle = document.getElementById('compare-modal-title');
  const modalCurrentPin = document.getElementById('modal-current-pin');
  const modalChangePinBtn = document.getElementById('modal-change-pin-btn');
  const comparisonResultsContainer = document.getElementById('comparison-results-container');
  const filterChips = document.querySelectorAll('.filter-chip');

  // PIN Selector Modal elements
  const pinModal = document.getElementById('pin-modal');
  const pinModalBackdrop = document.getElementById('pin-modal-backdrop');
  const closePinModalBtn = document.getElementById('close-pin-modal-btn');
  const manualPinInput = document.getElementById('manual-pin-input');
  const savePinBtn = document.getElementById('save-pin-btn');
  const popularPinBtns = document.querySelectorAll('.pin-option-btn, .pin-chip-btn');

  // Score Modal elements
  const scoreModal = document.getElementById('score-modal');
  const scoreModalBackdrop = document.getElementById('score-modal-backdrop');
  const closeScoreModalBtn = document.getElementById('close-score-modal-btn');
  const openScoreModalBtn = document.getElementById('open-score-modal-btn');
  const repairSlider = document.getElementById('repair-slider');
  const repairVal = document.getElementById('repair-val');
  const packagingSlider = document.getElementById('packaging-slider');
  const packagingVal = document.getElementById('packaging-val');
  const simulatedScoreDisplay = document.getElementById('simulated-score-display');

  // Toast notification
  const toastNotice = document.getElementById('toast-notice');

  // Helper: Show temporary Toast message
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (container) {
      const toast = document.createElement('div');
      toast.className = 'toast-notice-bubble';
      toast.textContent = message;
      container.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
      }, 3200);
      return;
    }
    if (toastNotice) {
      toastNotice.textContent = message;
      toastNotice.style.display = 'block';
      setTimeout(() => {
        toastNotice.style.display = 'none';
      }, 3200);
    }
  }
  window.showToast = showToast;

  // 1. Navigation scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  if (mobileMenuToggle && mobileDrawer) {
    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileMenuToggle.classList.toggle('active', isOpen);
      mobileMenuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close drawer when clicking any link
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Autocomplete / Search input interactions
  if (searchProductInput && searchSuggestions) {
    searchProductInput.addEventListener('focus', () => {
      searchSuggestions.hidden = false;
    });

    searchProductInput.addEventListener('input', () => {
      searchSuggestions.hidden = false;
    });

    document.addEventListener('click', (e) => {
      if (!searchForm.contains(e.target)) {
        searchSuggestions.hidden = true;
      }
    });

    document.querySelectorAll('.suggestion-item').forEach(item => {
      item.addEventListener('click', () => {
        const val = item.getAttribute('data-value');
        if (searchProductInput) searchProductInput.value = val;
        state.currentProduct = val;
        searchSuggestions.hidden = true;
        triggerComparison(false);
      });
    });
  }

  // Synchronize PIN inputs
  if (searchPinInput) {
    searchPinInput.addEventListener('change', () => {
      const pin = searchPinInput.value.trim();
      if (pin.length === 6) {
        updateActivePin(pin);
      }
    });
  }

  // 4. Comparison Search Form Submit
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      triggerComparison(false);
    });
  }

  // Showcase click also triggers comparison
  if (showcaseInteractive) {
    showcaseInteractive.addEventListener('click', () => {
      triggerComparison(false);
    });
  }

  if (openDemoCompareBtn) {
    openDemoCompareBtn.addEventListener('click', () => {
      triggerComparison(true);
    });
  }

  if (mobileCompareBtn) {
    mobileCompareBtn.addEventListener('click', () => {
      triggerComparison(false);
    });
  }

  function triggerComparison(openModalInstead = false) {
    const rawQuery = searchProductInput ? searchProductInput.value.trim() : 'iPhone 15';
    const pin = searchPinInput ? searchPinInput.value.trim() : state.currentPin;

    if (pin.length === 6) {
      updateActivePin(pin);
    }

    if (!openModalInstead) {
      // Seamlessly navigate to dedicated Figma authentication page first
      window.location.href = `auth.html?q=${encodeURIComponent(rawQuery || 'iPhone 15')}&pin=${encodeURIComponent(pin || '208001')}`;
      return;
    }

    // Determine matching product dataset
    let matchedKey = 'iPhone 15';
    if (rawQuery.toLowerCase().includes('macbook')) {
      matchedKey = 'MacBook Air M3';
    } else if (rawQuery.toLowerCase().includes('press') || rawQuery.toLowerCase().includes('bodum') || rawQuery.toLowerCase().includes('coffee')) {
      matchedKey = 'Bodum French Press';
    }

    state.currentProduct = matchedKey;
    renderComparisonResults(matchedKey);
    openModal(compareModal);
    showToast(`Checked 7 live stores for ${matchedKey} in PIN ${state.currentPin}`);
  }

  // 5. Render Comparison Results
  function renderComparisonResults(productKey) {
    const data = productsDB[productKey] || productsDB['iPhone 15'];
    if (!comparisonResultsContainer) return;

    if (compareModalTitle) {
      compareModalTitle.textContent = data.fullName;
    }
    if (modalCurrentPin) {
      modalCurrentPin.textContent = `${state.currentPin} (${state.currentCity})`;
    }

    let stores = [...data.stores];

    // Filter/Sort logic
    if (state.activeFilter === 'price') {
      stores.sort((a, b) => a.totalPrice - b.totalPrice);
    } else if (state.activeFilter === 'speed') {
      stores.sort((a, b) => a.etaHours - b.etaHours);
    } else if (state.activeFilter === 'eco') {
      stores.sort((a, b) => b.ecoScore - a.ecoScore);
    } else if (state.activeFilter === 'refurb') {
      stores = stores.filter(s => s.isRefurb);
      if (stores.length === 0) {
        stores = data.stores; // fallback
      }
    } else {
      // 'best' - lowest price among authorized/reliable
      stores.sort((a, b) => {
        if (a.isBestPrice) return -1;
        if (b.isBestPrice) return 1;
        return a.totalPrice - b.totalPrice;
      });
    }

    comparisonResultsContainer.innerHTML = '';

    stores.forEach((store) => {
      const card = document.createElement('div');
      card.className = `store-row-card ${store.isBestPrice ? 'highlighted-best' : ''}`;
      
      const formattedTotal = '₹' + store.totalPrice.toLocaleString('en-IN');
      const formattedBase = '₹' + store.basePrice.toLocaleString('en-IN');
      const deliveryText = store.deliveryFee === 0 ? 'Free Delivery' : `+₹${store.deliveryFee} shipping`;

      card.innerHTML = `
        <div class="store-badge-col">
          <div class="store-logo-box">${store.logoText}</div>
          <div>
            <div class="store-name-title">${store.name}</div>
            <span class="store-tag-flag ${store.badgeClass}">${store.badge}</span>
          </div>
        </div>

        <div class="price-col">
          <span class="final-price-text">${formattedTotal}</span>
          <span class="price-breakdown-sub">${formattedBase} base ${deliveryText}</span>
        </div>

        <div class="delivery-col">
          <span class="delivery-eta">⚡ ${store.etaText}</span>
          <span class="delivery-cost-note">To PIN ${state.currentPin}</span>
        </div>

        <div class="eco-col">
          <div class="eco-score-pill">
            <span>🌿 ${store.ecoScore}/100</span>
            <div class="mini-meter" title="Sustainability: ${store.ecoScore}%">
              <div class="mini-fill" style="width: ${store.ecoScore}%;"></div>
            </div>
          </div>
          <span class="eco-note-sub">${store.ecoLabel}</span>
        </div>

        <div class="action-col">
          <button class="visit-store-btn" onclick="window.handleVisitStore('${store.name}', '${formattedTotal}')">
            <span>Go to Store</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M7 17 17 7"/>
              <path d="M7 7h10v10"/>
            </svg>
          </button>
        </div>
      `;

      comparisonResultsContainer.appendChild(card);
    });
  }

  // Global handler for store redirection simulation
  window.handleVisitStore = (storeName, price) => {
    showToast(`Redirecting to verified official partner (${storeName}) with price lock: ${price}`);
  };

  // 6. Filter Chips in Comparison Modal
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.activeFilter = chip.getAttribute('data-filter');
      renderComparisonResults(state.currentProduct);
    });
  });

  // 7. PIN Selector Modal Interactions
  function openPinModal() {
    if (manualPinInput) manualPinInput.value = state.currentPin;
    openModal(pinModal);
  }

  if (navPinBtn) navPinBtn.addEventListener('click', openPinModal);
  if (mobilePinBtn) mobilePinBtn.addEventListener('click', openPinModal);
  if (modalChangePinBtn) modalChangePinBtn.addEventListener('click', openPinModal);

  function updateActivePin(pin, cityName = '') {
    state.currentPin = pin;
    state.currentCity = cityName || pinCities[pin] || 'India';
    
    if (activePinDisplay) activePinDisplay.textContent = pin;
    if (mobilePinDisplay) mobilePinDisplay.textContent = `${pin} (${state.currentCity})`;
    if (searchPinInput) searchPinInput.value = pin;
    if (modalCurrentPin) modalCurrentPin.textContent = `${pin} (${state.currentCity})`;

    const resultsPinText = document.getElementById('results-pin-text');
    if (resultsPinText) resultsPinText.textContent = pin;

    // Highlight active popular pin button
    popularPinBtns.forEach(btn => {
      if (btn.getAttribute('data-pin') === pin) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Re-render comparison if open
    if (compareModal && compareModal.classList.contains('open')) {
      renderComparisonResults(state.currentProduct);
    }
  }

  if (savePinBtn) {
    savePinBtn.addEventListener('click', () => {
      const pin = manualPinInput.value.trim();
      if (/^\d{6}$/.test(pin)) {
        updateActivePin(pin);
        closeModal(pinModal);
        showToast(`Delivery PIN updated to ${pin}`);
      } else {
        alert('Please enter a valid 6-digit Indian PIN code (e.g. 208001)');
      }
    });
  }

  popularPinBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const pin = btn.getAttribute('data-pin');
      const city = btn.getAttribute('data-city');
      updateActivePin(pin, city);
      closeModal(pinModal);
      showToast(`Location set to ${city} (${pin})`);
    });
  });

  // 8. Sustainability Score Modal & Interactive Simulator
  if (openScoreModalBtn) {
    openScoreModalBtn.addEventListener('click', () => {
      openModal(scoreModal);
    });
  }

  function recalculateSimulatedScore() {
    if (!repairSlider || !packagingSlider || !simulatedScoreDisplay) return;
    const repair = parseInt(repairSlider.value, 10);
    const packaging = parseInt(packagingSlider.value, 10);

    if (repairVal) repairVal.textContent = `${repair}/10`;
    if (packagingVal) packagingVal.textContent = `${packaging}%`;

    // Formula simulation: Base 40 + (Repair * 3.5) + (Packaging * 0.25)
    let score = Math.round(40 + (repair * 3.5) + (packaging * 0.25));
    if (score > 100) score = 100;

    let rank = 'Fair Choice';
    if (score >= 80) rank = 'Better Choice (Verified High)';
    else if (score >= 65) rank = 'Good Standard';

    simulatedScoreDisplay.textContent = `${score} / 100 (${rank})`;
  }

  if (repairSlider) repairSlider.addEventListener('input', recalculateSimulatedScore);
  if (packagingSlider) packagingSlider.addEventListener('input', recalculateSimulatedScore);

  // 9. Modal Open / Close Utilities
  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('open');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    state.activeModal = modalEl;
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('open');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    state.activeModal = null;
  }

  // Close buttons
  if (closeCompareModalBtn) closeCompareModalBtn.addEventListener('click', () => closeModal(compareModal));
  if (compareModalBackdrop) compareModalBackdrop.addEventListener('click', () => closeModal(compareModal));

  if (closePinModalBtn) closePinModalBtn.addEventListener('click', () => closeModal(pinModal));
  if (pinModalBackdrop) pinModalBackdrop.addEventListener('click', () => closeModal(pinModal));

  if (closeScoreModalBtn) closeScoreModalBtn.addEventListener('click', () => closeModal(scoreModal));
  if (scoreModalBackdrop) scoreModalBackdrop.addEventListener('click', () => closeModal(scoreModal));

  // Escape key closes active modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.activeModal) {
      closeModal(state.activeModal);
    }
  });

  // Footer "About" link interaction
  const footerAboutLink = document.getElementById('footer-about-link');
  if (footerAboutLink) {
    footerAboutLink.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(scoreModal);
    });
  }

  // Smooth active link highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-links .nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    desktopNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

  // 10. URL Query Parameters Initialization (for Results Page)
  const urlParams = new URLSearchParams(window.location.search);
  const qParam = urlParams.get('q');
  const pParam = urlParams.get('pin');

  if (pParam && /^\d{6}$/.test(pParam)) {
    updateActivePin(pParam);
  }

  if (qParam) {
    state.currentProduct = qParam;
    const resultsQueryTitle = document.getElementById('results-query-title');
    const resultsSearchInput = document.getElementById('results-search-input');
    if (resultsQueryTitle) resultsQueryTitle.textContent = qParam;
    if (resultsSearchInput) resultsSearchInput.value = qParam;
    if (searchProductInput) searchProductInput.value = qParam;
    document.title = `Results for “${qParam}” — Veyra Shopping Intelligence`;
  }

  // 11. Results Page Interactive Features (Figma Node 510-9246)
  const resultsSortSelect = document.getElementById('results-sort-select');
  const comparisonCardsList = document.getElementById('comparison-cards-list');
  const filterTabPills = document.querySelectorAll('.filter-tab-pill');
  const changePinInlineBtn = document.getElementById('change-pin-inline-btn');
  const openScoreMethodologyBtn = document.getElementById('open-score-methodology-btn');
  const openMethodologyBtnBanner = document.getElementById('open-methodology-btn-banner');
  const mobileScoreBtn = document.getElementById('mobile-score-btn');
  const footerSustainabilityLink = document.getElementById('footer-sustainability-link');

  if (changePinInlineBtn) {
    changePinInlineBtn.addEventListener('click', openPinModal);
  }

  if (openScoreMethodologyBtn) {
    openScoreMethodologyBtn.addEventListener('click', () => openModal(scoreModal));
  }

  if (openMethodologyBtnBanner) {
    openMethodologyBtnBanner.addEventListener('click', () => openModal(scoreModal));
  }

  if (mobileScoreBtn) {
    mobileScoreBtn.addEventListener('click', () => openModal(scoreModal));
  }

  if (footerSustainabilityLink) {
    footerSustainabilityLink.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(scoreModal);
    });
  }

  // Results Page Sort Dropdown
  if (resultsSortSelect && comparisonCardsList) {
    resultsSortSelect.addEventListener('change', () => {
      const sortVal = resultsSortSelect.value;
      const cards = Array.from(comparisonCardsList.querySelectorAll('.comparison-card-row'));

      cards.sort((a, b) => {
        if (sortVal === 'price-asc') {
          const priceA = parseInt(a.querySelector('.final-amt').textContent.replace(/[^\d]/g, ''), 10) || 0;
          const priceB = parseInt(b.querySelector('.final-amt').textContent.replace(/[^\d]/g, ''), 10) || 0;
          return priceA - priceB;
        } else if (sortVal === 'eco-desc') {
          const ecoA = parseInt(a.querySelector('.impact-val').textContent.replace(/[^\d]/g, ''), 10) || 0;
          const ecoB = parseInt(b.querySelector('.impact-val').textContent.replace(/[^\d]/g, ''), 10) || 0;
          return ecoB - ecoA;
        } else if (sortVal === 'eta-asc') {
          const getEtaRank = (el) => {
            const txt = el.querySelector('.eta-bold').textContent.toLowerCase();
            if (txt.includes('today')) return 1;
            if (txt.includes('tomorrow')) return 2;
            if (txt.includes('2 days')) return 3;
            return 4;
          };
          return getEtaRank(a) - getEtaRank(b);
        } else {
          // Default best match order
          const idxA = parseInt(a.querySelector('.row-idx').textContent, 10) || 0;
          const idxB = parseInt(b.querySelector('.row-idx').textContent, 10) || 0;
          return idxA - idxB;
        }
      });

      cards.forEach(card => comparisonCardsList.appendChild(card));
      showToast(`Sorted by: ${resultsSortSelect.options[resultsSortSelect.selectedIndex].text}`);
    });
  }

  // Results Page Filter Tabs
  if (filterTabPills.length > 0 && comparisonCardsList) {
    filterTabPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterTabPills.forEach(p => {
          p.classList.remove('active');
          p.setAttribute('aria-selected', 'false');
        });
        pill.classList.add('active');
        pill.setAttribute('aria-selected', 'true');

        const filterKey = pill.getAttribute('data-filter');
        const cards = comparisonCardsList.querySelectorAll('.comparison-card-row');

        cards.forEach(card => {
          if (filterKey === 'all') {
            card.style.display = '';
          } else if (filterKey === 'free-delivery') {
            card.style.display = card.getAttribute('data-free-shipping') === 'true' ? '' : 'none';
          } else if (filterKey === 'tomorrow') {
            const del = card.getAttribute('data-delivery');
            card.style.display = (del === 'tomorrow' || del === 'today') ? '' : 'none';
          } else if (filterKey === 'circular') {
            card.style.display = card.getAttribute('data-circular') === 'true' ? '' : 'none';
          }
        });
      });
    });
  }
});
