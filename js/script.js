/* ============ DATA ============ */
const products = [
  // RAM
  { id: "p1", name: "Kingston Fury Beast DDR5 32GB", category: "RAM", brand: "Kingston", specs: "32GB (2x16GB) 6000MT/s CL40", price: 18500, image: "images/product-ram-kingston.png",
    description: "Kingston Fury Beast DDR5 delivers serious performance for next-gen gaming rigs and high-end workstations. Plug-and-play overclocked speeds with on-die ECC for rock-solid stability.",
    features: ["Speed: 6000MT/s", "Capacity: 2x16GB Dual-Channel", "Latency: CL40", "On-die ECC", "Intel XMP 3.0 & AMD EXPO ready", "Lifetime warranty"] },
  { id: "p8", name: "Corsair Vengeance DDR5 32GB", category: "RAM", brand: "Corsair", specs: "32GB (2x16GB) 5600MHz", price: 22000, image: "images/product-ram-corsair.png",
    description: "Corsair Vengeance DDR5 offers high-frequency memory tuned for the latest Intel and AMD platforms with a sleek low-profile heat spreader.",
    features: ["Speed: 5600MHz", "Capacity: 32GB Kit", "Onboard voltage regulation", "Custom PMIC", "XMP 3.0 ready", "Lifetime warranty"] },
  { id: "p20", name: "G.SKILL Trident Z5 RGB DDR5 64GB", category: "RAM", brand: "G.SKILL", specs: "64GB (2x32GB) 6400MT/s CL32", price: 42000, image: "images/product-ram-gskill.jpg",
    description: "Premium G.SKILL Trident Z5 RGB DDR5 with iconic dual-tone heatspreader and customizable lighting. Built for enthusiasts who demand both performance and aesthetics.",
    features: ["Speed: 6400MT/s", "Capacity: 64GB Kit", "Latency: CL32", "Aluminum heatspreader", "Per-DIMM RGB lighting", "Lifetime warranty"] },
  { id: "p21", name: "Crucial DDR4 16GB", category: "RAM", brand: "Crucial", specs: "16GB (2x8GB) 3200MHz CL22", price: 7800, image: "images/product-ram-crucial.jpg",
    description: "Reliable, affordable DDR4 memory from Crucial — perfect for everyday computing, office work, and budget gaming builds.",
    features: ["Speed: 3200MHz", "Capacity: 2x8GB", "Latency: CL22", "Low power 1.2V", "Plug-and-play", "Limited lifetime warranty"] },

  // Motherboard
  { id: "p2", name: "ASUS ROG Maximus Z790 Hero", category: "Motherboard", brand: "ASUS", specs: "LGA 1700, DDR5, PCIe 5.0", price: 95000, image: "images/product-motherboard-asus.png",
    description: "Flagship ROG Maximus Z790 with extensive power delivery, PCIe 5.0, Wi-Fi 7 and premium audio. Built for top-tier 13th/14th Gen Intel Core processors.",
    features: ["Socket: LGA 1700", "Chipset: Intel Z790", "DDR5 up to 7800MHz OC", "PCIe 5.0 x16", "Wi-Fi 7 + 2.5G LAN", "ROG SupremeFX audio"] },
  { id: "p22", name: "MSI MAG B650 Tomahawk", category: "Motherboard", brand: "MSI", specs: "AM5, DDR5, PCIe 4.0", price: 32000, image: "images/product-motherboard-msi.jpg",
    description: "Tough, reliable AM5 board for Ryzen 7000 series builds. Excellent VRM cooling and a balanced feature set for gamers and creators.",
    features: ["Socket: AM5", "Chipset: AMD B650", "DDR5 up to 6400MHz OC", "PCIe 4.0 x16", "2.5G LAN", "Extended heatsinks"] },
  { id: "p23", name: "Gigabyte Z790 AORUS Elite AX", category: "Motherboard", brand: "Gigabyte", specs: "LGA 1700, DDR5, Wi-Fi 6E", price: 48000, image: "images/product-motherboard-gigabyte.jpg",
    description: "AORUS Elite AX combines premium 16+1+2 phase power design with Wi-Fi 6E and high-speed M.2 storage for high-end Intel builds.",
    features: ["Socket: LGA 1700", "Chipset: Intel Z790", "DDR5 up to 7600MHz", "PCIe 5.0 x16", "Wi-Fi 6E + 2.5G LAN", "4x M.2 slots"] },

  // PC Builds
  { id: "p3", name: "Custom Gaming PC Build", category: "PC Builds", brand: "A Cube", specs: "Ryzen 9 7950X, RTX 4080, 64GB RAM", price: 385000, image: "images/product-gaming-pc.png",
    description: "Hand-built ultimate gaming rig with top-tier Ryzen 9 + RTX 4080 combo, 64GB DDR5, 2TB NVMe and premium AIO cooling. Plug in and dominate.",
    features: ["CPU: AMD Ryzen 9 7950X", "GPU: NVIDIA RTX 4080 16GB", "RAM: 64GB DDR5 6000MHz", "Storage: 2TB NVMe Gen4", "PSU: 850W Gold", "Liquid cooling AIO 360mm"] },
  { id: "p24", name: "Creator Workstation Pro", category: "PC Builds", brand: "A Cube", specs: "Intel i9-14900K, RTX 4070 Ti, 32GB", price: 285000, image: "images/product-pc-workstation.jpg",
    description: "Optimized for video editing, 3D rendering and content creation. Fast cores, fast GPU, and fast storage in a quiet, professional chassis.",
    features: ["CPU: Intel Core i9-14900K", "GPU: NVIDIA RTX 4070 Ti 12GB", "RAM: 32GB DDR5 6000MHz", "Storage: 1TB NVMe + 2TB HDD", "PSU: 750W Gold", "Quiet tower cooler"] },
  { id: "p25", name: "Budget Office PC", category: "PC Builds", brand: "A Cube", specs: "Intel i5-13400, 16GB DDR4, 512GB", price: 78000, image: "images/product-pc-budget.jpg",
    description: "Reliable everyday PC for office work, study and light creative tasks. Snappy and energy efficient with room to upgrade later.",
    features: ["CPU: Intel Core i5-13400", "GPU: Intel UHD Graphics 730", "RAM: 16GB DDR4 3200MHz", "Storage: 512GB NVMe SSD", "PSU: 500W Bronze", "1-year onsite warranty"] },

  // Cameras
  { id: "p4", name: "Sony ZV-E10 Mirrorless Camera", category: "Cameras", brand: "Sony", specs: "24.2MP APS-C Exmor CMOS Sensor", price: 85000, image: "images/product-camera-sony.png",
    description: "Compact APS-C mirrorless designed for vloggers and content creators. Side-flip touchscreen, directional 3-capsule mic and clean 4K video.",
    features: ["24.2MP APS-C Exmor CMOS", "4K UHD video recording", "Real-time Eye AF", "Vari-angle touchscreen", "Built-in directional mic", "Mic input + USB-C streaming"] },
  { id: "p6", name: "Canon EOS R50 Mirrorless", category: "Cameras", brand: "Canon", specs: "24.2MP APS-C, 4K Video, Dual Pixel CMOS AF II", price: 110000, image: "images/product-camera-canon.png",
    description: "Lightweight Canon EOS R50 with the latest Dual Pixel CMOS AF II, perfect for travel, family and content creation.",
    features: ["24.2MP APS-C CMOS", "4K UHD oversampled from 6K", "Dual Pixel AF II with subject tracking", "12 fps mechanical shutter", "Vari-angle touchscreen", "Wi-Fi & Bluetooth"] },
  { id: "p26", name: "Nikon Z6 II Full-Frame", category: "Cameras", brand: "Nikon", specs: "24.5MP Full-Frame, Dual EXPEED 6", price: 195000, image: "images/product-camera-nikon.jpg",
    description: "Professional full-frame mirrorless with dual EXPEED 6 processors, blazing autofocus and superb low-light performance for stills and video.",
    features: ["24.5MP BSI Full-Frame", "4K UHD 60p video", "Dual EXPEED 6 processors", "5-axis IBIS", "Dual card slots (CFexpress + SD)", "Robust weather-sealed body"] },

  // Drones
  { id: "p5", name: "DJI Mini 4 Pro", category: "Drones", brand: "DJI", specs: "Under 249g, 4K/60fps HDR True Vertical", price: 120000, image: "images/product-drone-dji.png",
    description: "Ultralight, foldable DJI Mini 4 Pro with omnidirectional obstacle sensing, 4K/60fps HDR video and True Vertical shooting for social-ready clips.",
    features: ["Weight: <249g (no registration in many regions)", "4K/60fps HDR Video", "Omnidirectional obstacle sensing", "OcuSync O4 transmission ~20km", "True Vertical Shooting", "Up to 34 min flight time"] },
  { id: "p27", name: "Autel EVO Lite+ Premium", category: "Drones", brand: "Autel", specs: "1-inch CMOS, 6K Video, 40 min flight", price: 165000, image: "images/product-drone-autel.jpg",
    description: "Premium Autel EVO Lite+ with a 1-inch CMOS sensor and adjustable aperture. Stunning 6K cinematic video and 40 minutes of flight time.",
    features: ["1-inch CMOS sensor", "6K video recording", "Adjustable f/2.8-f/11 aperture", "40 min max flight time", "12km HD transmission", "3-axis gimbal stabilization"] },

  // Smartwatch (NEW)
  { id: "p30", name: "Apple Watch Series 9", category: "Smartwatch", brand: "Apple", specs: "45mm GPS, S9 SiP, Always-On Retina", price: 65000, image: "images/product-watch-apple.jpg",
    description: "Apple Watch Series 9 with the powerful S9 chip, Double Tap gesture, brighter 2000-nit display and advanced health & fitness tracking.",
    features: ["45mm Always-On Retina display", "S9 SiP chip", "Double Tap gesture", "Blood oxygen & ECG", "Crash & fall detection", "Up to 18 hours battery"] },
  { id: "p31", name: "Samsung Galaxy Watch 6 Classic", category: "Smartwatch", brand: "Samsung", specs: "47mm, Rotating Bezel, Wear OS", price: 48000, image: "images/product-watch-samsung.jpg",
    description: "Galaxy Watch 6 Classic brings back the iconic rotating bezel with the latest Wear OS, advanced sleep coaching and complete wellness tracking.",
    features: ["47mm Super AMOLED", "Rotating physical bezel", "BioActive sensor", "Sleep coaching & body composition", "5ATM water resistance", "Wear OS powered by Samsung"] },
  { id: "p32", name: "Xiaomi Watch S3", category: "Smartwatch", brand: "Xiaomi", specs: "1.43-inch AMOLED, 15-day battery", price: 18500, image: "images/product-watch-xiaomi.jpg",
    description: "Stylish Xiaomi Watch S3 with interchangeable bezels, 1.43-inch AMOLED display and impressive 15-day battery life. Over 150 sport modes.",
    features: ["1.43-inch AMOLED 466x466", "Interchangeable bezels", "Up to 15-day battery life", "150+ sport modes", "5ATM water resistance", "Heart rate, SpO2, sleep"] },
  { id: "p33", name: "Huawei Watch GT 4", category: "Smartwatch", brand: "Huawei", specs: "46mm AMOLED, 14-day battery", price: 32000, image: "images/product-watch-huawei.jpg",
    description: "Elegant Huawei Watch GT 4 with refined design, 14-day battery life and accurate dual-band GPS for runners and outdoor enthusiasts.",
    features: ["46mm AMOLED display", "Up to 14-day battery", "Dual-band 5-system GPS", "TruSeen 5.5+ heart rate", "100+ workout modes", "Stainless steel case"] },

  // Storage
  { id: "p7", name: "Kingston KC3000 1TB NVMe SSD", category: "Storage", brand: "Kingston", specs: "PCIe 4.0 NVMe M.2 2280", price: 12500, image: "images/product-ssd-kingston.png",
    description: "Blazing-fast PCIe 4.0 NVMe SSD with up to 7000MB/s read for ultra-quick boots, transfers and game loads.",
    features: ["Capacity: 1TB", "PCIe Gen 4.0 x4 NVMe", "Read up to 7000MB/s", "Write up to 6000MB/s", "M.2 2280 form factor", "5-year warranty"] },
  { id: "p28", name: "Samsung 990 PRO 2TB NVMe", category: "Storage", brand: "Samsung", specs: "PCIe 4.0 NVMe, 7450MB/s Read", price: 28500, image: "images/product-storage-samsung.jpg",
    description: "Top-tier Samsung 990 PRO with industry-leading sustained performance, ideal for PS5, gaming, and professional workloads.",
    features: ["Capacity: 2TB", "PCIe Gen 4.0 x4 NVMe", "Read up to 7450MB/s", "Write up to 6900MB/s", "Samsung V-NAND TLC", "5-year limited warranty"] }
];

const softwarePlans = [
  { name: "HR & Payroll Suite", description: "Complete employee management.",
    plans: [
      { name: "Basic", price: 2999, features: ["Up to 10 employees", "Basic Payroll", "Leave Management"] },
      { name: "Professional", price: 7999, features: ["Up to 50 employees", "Advanced Payroll", "Performance Tracking"], recommended: true },
      { name: "Enterprise", price: 15999, features: ["Unlimited employees", "Custom workflows", "Dedicated Support"] }
    ]},
  { name: "ERP System", description: "Manage your entire business.",
    plans: [
      { name: "Starter", price: 9999, features: ["Inventory Management", "Basic CRM", "Standard Reporting"] },
      { name: "Business", price: 24999, features: ["Advanced Inventory", "Full CRM Suite", "Custom Analytics"], recommended: true },
      { name: "Enterprise", price: "Custom", features: ["Multi-branch Support", "API Access", "White-labeling"] }
    ]},
  { name: "Billing Software", description: "Streamline invoicing and payments.",
    plans: [
      { name: "Lite", price: 1499, features: ["100 Invoices/mo", "Basic Templates", "Email Support"] },
      { name: "Standard", price: 3999, features: ["Unlimited Invoices", "Custom Templates", "Priority Support"], recommended: true },
      { name: "Pro", price: 8999, features: ["Multi-currency", "API Integration", "Account Manager"] }
    ]}
];

const jobs = [
  { id: "j1", title: "IT Team Lead", type: "Full-time", posted: "April 1, 2026" },
  { id: "j2", title: "Data Engineer", type: "Full-time", posted: "March 25, 2026" },
  { id: "j3", title: "Sales Support Staff", type: "Full-time", posted: "March 20, 2026" },
  { id: "j4", title: "Junior Data Engineer Internship", type: "Internship", posted: "April 5, 2026" },
  { id: "j5", title: "IT Development Team Member", type: "Full-time", posted: "April 10, 2026" }
];

const brandPartners = [
  { name: "DJI", logo: "images/brand-dji.svg" },
  { name: "Canon", logo: "images/brand-canon.svg" },
  { name: "NVIDIA", logo: "images/brand-nvidia.svg" },
  { name: "Daraz", logo: "images/brand-daraz.svg" },
  { name: "Oliz", logo: "images/brand-oliz.svg" }
];

/* ============ HELPERS ============ */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const fmtNPR = (n) => "NPR " + n.toLocaleString("en-IN");
const checkSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>';
const escapeHtml = (s) => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));

/* ============ STATE ============ */
let cart = JSON.parse(localStorage.getItem("acube_cart") || "[]");
let currentFilter = "All";
let currentSearch = "";

/* ============ RENDER PRODUCTS ============ */
function renderFilters() {
  const cats = ["All", ...new Set(products.map(p => p.category))];
  const wrap = $("#productFilters");
  wrap.innerHTML = cats.map(c =>
    `<button class="filter-btn ${c === currentFilter ? 'active' : ''}" data-cat="${c}">${c}</button>`
  ).join("");
}

function getFilteredProducts() {
  const q = currentSearch.trim().toLowerCase();
  return products.filter(p => {
    if (currentFilter !== "All" && p.category !== currentFilter) return false;
    if (!q) return true;
    return (p.name + " " + p.category + " " + (p.brand || "") + " " + p.specs).toLowerCase().includes(q);
  });
}

function renderProducts() {
  const list = getFilteredProducts();
  const grid = $("#productsGrid");
  if (list.length === 0) {
    grid.innerHTML = `<p class="empty-state" style="grid-column:1/-1">No products found${currentSearch ? ' for "' + escapeHtml(currentSearch) + '"' : ''}.</p>`;
    return;
  }
  grid.innerHTML = list.map(p => `
    <article class="product-card" data-view="${p.id}">
      <div class="product-img"><img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy" /></div>
      <div class="product-body">
        <span class="product-cat">${p.category}</span>
        <h3 class="product-name">${escapeHtml(p.name)}</h3>
        <p class="product-specs">${escapeHtml(p.specs)}</p>
        <div class="product-foot">
          <span class="product-price">${fmtNPR(p.price)}</span>
          <button class="btn btn-primary btn-sm" data-add="${p.id}">Add to Cart</button>
        </div>
      </div>
    </article>
  `).join("");
}

/* ============ PRODUCT DETAIL MODAL ============ */
function openProductDetail(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  $("#productDetailBody").innerHTML = `
    <div class="pd-grid">
      <div class="pd-img"><img src="${p.image}" alt="${escapeHtml(p.name)}" /></div>
      <div class="pd-info">
        <span class="product-cat">${p.category}${p.brand ? ' • ' + escapeHtml(p.brand) : ''}</span>
        <h3>${escapeHtml(p.name)}</h3>
        <p class="pd-desc">${escapeHtml(p.description || p.specs)}</p>
        <h4>Key Features</h4>
        <ul class="pd-features">
          ${(p.features || [p.specs]).map(f => `<li>${checkSvg}<span>${escapeHtml(f)}</span></li>`).join("")}
        </ul>
        <div class="pd-foot">
          <span class="pd-price">${fmtNPR(p.price)}</span>
          <button class="btn btn-primary" data-add="${p.id}" data-close-after>Add to Cart</button>
        </div>
      </div>
    </div>
  `;
  openModal("productDetailModal");
}

/* ============ RENDER SOFTWARE ============ */
function renderSoftware() {
  $("#softwareGrid").innerHTML = softwarePlans.map((s, sIdx) => {
    const defaultIdx = s.plans.findIndex(p => p.recommended);
    const activeIdx = defaultIdx >= 0 ? defaultIdx : 0;
    return `
    <div class="software-card" data-sw="${sIdx}">
      <h3 class="software-name">${s.name}</h3>
      <p class="software-desc">${s.description}</p>
      <div class="tier-tabs">
        ${s.plans.map((p, i) => `<button class="tier-tab ${i === activeIdx ? 'active' : ''} ${p.recommended ? 'recommended' : ''}" data-tier="${i}">${p.name}</button>`).join("")}
      </div>
      <div class="tier-content"></div>
    </div>`;
  }).join("");

  $$(".software-card").forEach(card => {
    const sIdx = +card.dataset.sw;
    const swData = softwarePlans[sIdx];
    const updateTier = (tIdx) => {
      $$(".tier-tab", card).forEach((t, i) => t.classList.toggle("active", i === tIdx));
      const plan = swData.plans[tIdx];
      const priceText = typeof plan.price === "number" ? `<strong>${fmtNPR(plan.price)}</strong><span>/ month</span>` : `<strong>${plan.price}</strong>`;
      $(".tier-content", card).innerHTML = `
        <div class="tier-price">${priceText}</div>
        <ul class="tier-features">
          ${plan.features.map(f => `<li>${checkSvg}<span>${f}</span></li>`).join("")}
        </ul>
        <button class="btn btn-primary btn-block" data-trial="${swData.name}|${plan.name}">Start Free Trial</button>
      `;
    };
    const defaultIdx = swData.plans.findIndex(p => p.recommended);
    updateTier(defaultIdx >= 0 ? defaultIdx : 0);
    $$(".tier-tab", card).forEach((tab, i) => tab.addEventListener("click", () => updateTier(i)));
  });
}

/* ============ RENDER JOBS ============ */
function renderJobs() {
  $("#jobsList").innerHTML = jobs.map(j => `
    <div class="job-card">
      <div class="job-info"><h4>${j.title}</h4><p>Posted: ${j.posted}</p></div>
      <div><span class="job-tag">${j.type}</span><a href="#contact" class="btn btn-outline btn-sm">Apply Now</a></div>
    </div>
  `).join("");
}

/* ============ RENDER BRAND PARTNERS ============ */
function renderBrands() {
  $("#brandsGrid").innerHTML = brandPartners.map(b => `
    <div class="brand-card" title="${b.name}">
      <img src="${b.logo}" alt="${b.name}" loading="lazy" />
      <span>${b.name}</span>
    </div>
  `).join("");
}

/* ============ CART ============ */
function saveCart() { localStorage.setItem("acube_cart", JSON.stringify(cart)); }

function addToCart(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const existing = cart.find(x => x.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ id, name: p.name, price: p.price, image: p.image, qty: 1 });
  saveCart();
  renderCart();
  openDrawer();
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(x => x.id !== id);
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart();
  renderCart();
}

function cartTotal() { return cart.reduce((s, x) => s + x.price * x.qty, 0); }

function renderCart() {
  $("#cartCount").textContent = cart.reduce((s, x) => s + x.qty, 0);
  const body = $("#cartBody");
  if (cart.length === 0) {
    body.innerHTML = '<p class="empty-state">Your cart is empty.</p>';
    $("#cartFoot").hidden = true;
    return;
  }
  body.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${escapeHtml(item.name)}" />
      <div>
        <h5>${escapeHtml(item.name)}</h5>
        <span class="price">${fmtNPR(item.price)}</span>
        <div class="qty-controls">
          <button data-qty="${item.id}|-1">-</button>
          <span>${item.qty}</span>
          <button data-qty="${item.id}|1">+</button>
          <button class="remove-btn" data-remove="${item.id}">Remove</button>
        </div>
      </div>
      <strong>${fmtNPR(item.price * item.qty)}</strong>
    </div>
  `).join("");
  $("#cartTotal").textContent = fmtNPR(cartTotal());
  $("#cartFoot").hidden = false;
}

/* ============ DRAWER & MODAL ============ */
function openDrawer() { $("#cartDrawer").classList.add("open"); $("#drawerBackdrop").classList.add("open"); }
function closeDrawer() { $("#cartDrawer").classList.remove("open"); $("#drawerBackdrop").classList.remove("open"); }
function openModal(id) { $("#" + id).classList.add("open"); document.body.style.overflow = "hidden"; }
function closeModal(id) {
  $("#" + id).classList.remove("open");
  document.body.style.overflow = "";
  if (id === "checkoutModal") { $("#orderSuccess").hidden = true; $("#checkoutForm").hidden = false; $("#checkoutForm").reset(); }
  if (id === "trialModal") { $("#trialSuccess").hidden = true; $("#trialForm").hidden = false; $("#trialForm").reset(); }
}

/* ============ INIT ============ */
document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();

  renderFilters();
  renderProducts();
  renderSoftware();
  renderJobs();
  renderBrands();
  renderCart();

  // Filter clicks (delegated, persistent)
  $("#productFilters").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    currentFilter = btn.dataset.cat;
    renderFilters();
    renderProducts();
  });

  // Search input
  const searchInput = $("#productSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderProducts();
    });
  }
  const clearSearch = $("#searchClear");
  if (clearSearch) {
    clearSearch.addEventListener("click", () => {
      currentSearch = "";
      searchInput.value = "";
      renderProducts();
      searchInput.focus();
    });
  }

  // Delegated clicks
  document.addEventListener("click", (e) => {
    const addBtn = e.target.closest("[data-add]");
    if (addBtn) {
      addToCart(addBtn.dataset.add);
      if (addBtn.hasAttribute("data-close-after")) closeModal("productDetailModal");
      return;
    }

    const qty = e.target.closest("[data-qty]");
    if (qty) { const [id, d] = qty.dataset.qty.split("|"); changeQty(id, +d); return; }

    const rm = e.target.closest("[data-remove]");
    if (rm) { removeFromCart(rm.dataset.remove); return; }

    const trial = e.target.closest("[data-trial]");
    if (trial) {
      const [sw, plan] = trial.dataset.trial.split("|");
      $("#trialTitle").textContent = `${sw} — ${plan}`;
      $("#trialSub").textContent = "Get started with a 14-day free trial. No credit card required.";
      openModal("trialModal");
      return;
    }

    const closeMod = e.target.closest("[data-close-modal]");
    if (closeMod) { closeModal(closeMod.dataset.closeModal); return; }

    // Open product detail when clicking the card (but not its buttons)
    const card = e.target.closest("[data-view]");
    if (card && !e.target.closest("button")) {
      openProductDetail(card.dataset.view);
      return;
    }
  });

  $("#cartBtn").addEventListener("click", openDrawer);
  $("#cartClose").addEventListener("click", closeDrawer);
  $("#drawerBackdrop").addEventListener("click", closeDrawer);
  $("#menuToggle").addEventListener("click", () => $("#navLinks").classList.toggle("open"));
  $$("#navLinks a").forEach(a => a.addEventListener("click", () => $("#navLinks").classList.remove("open")));

  $("#checkoutBtn").addEventListener("click", () => {
    if (cart.length === 0) return;
    $("#checkoutTotal").textContent = fmtNPR(cartTotal());
    closeDrawer();
    openModal("checkoutModal");
  });

  $("#checkoutForm").addEventListener("submit", (e) => {
    e.preventDefault();
    $("#checkoutForm").hidden = true;
    $("#orderSuccess").hidden = false;
    cart = [];
    saveCart();
    renderCart();
  });

  $("#trialForm").addEventListener("submit", (e) => {
    e.preventDefault();
    $("#trialForm").hidden = true;
    $("#trialSuccess").hidden = false;
  });

  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    $("#contactSuccess").hidden = false;
    e.target.reset();
    setTimeout(() => { $("#contactSuccess").hidden = true; }, 5000);
  });

  $$(".modal").forEach(m => m.addEventListener("click", (e) => {
    if (e.target === m) closeModal(m.id);
  }));

  // ESC closes modals & drawer
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDrawer();
      $$(".modal.open").forEach(m => closeModal(m.id));
    }
  });
});
