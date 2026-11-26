const config = {
  cafeName: 'Fenjan Café',
  currency: 'EGP',
  deliveryFee: 25,
  instagramUrl: 'https://ig.me/m/auto.mation888',
  instagramFallback: 'https://www.instagram.com/auto.mation888/',
  messengerUrl: 'https://m.me/1457412357449697',
};

const menuData = [
  { id: 'D01', category: 'hot', price: 45, name: { en: 'Turkish Coffee', ar: 'قهوة تركي' }, desc: { en: 'Classic rich coffee with a café aroma.', ar: 'قهوة كلاسيكية بطعم غني ولمسة كافيه.' } },
  { id: 'D02', category: 'hot', price: 55, name: { en: 'Espresso', ar: 'اسبريسو' }, desc: { en: 'Strong espresso shot for coffee lovers.', ar: 'شوت إسبريسو قوي لعشاق القهوة.' } },
  { id: 'D03', category: 'hot', price: 75, name: { en: 'Cappuccino', ar: 'كابتشينو' }, desc: { en: 'Creamy milk foam with balanced espresso.', ar: 'رغوة كريمية مع قهوة متوازنة.' } },
  { id: 'D04', category: 'hot', price: 95, name: { en: 'Spanish Latte', ar: 'سبانش لاتيه' }, desc: { en: 'Sweet signature latte with smooth texture.', ar: 'لاتيه حلو ومميز بقوام ناعم.' } },
  { id: 'D05', category: 'hot', price: 35, name: { en: 'Mint Tea', ar: 'شاي بالنعناع' }, desc: { en: 'Refreshing mint tea for a light break.', ar: 'شاي منعش بالنعناع لفاصل خفيف.' } },

  { id: 'C01', category: 'cold', price: 105, name: { en: 'Iced Caramel Latte', ar: 'آيس كراميل لاتيه' }, desc: { en: 'Cold caramel latte with a sweet finish.', ar: 'لاتيه بارد بالكراميل ونهاية حلوة.' } },
  { id: 'C02', category: 'cold', price: 40, name: { en: 'Karkadeh', ar: 'كركديه' }, desc: { en: 'Chilled hibiscus drink.', ar: 'مشروب كركديه بارد ومنعش.' } },
  { id: 'C03', category: 'cold', price: 80, name: { en: 'Mango Juice', ar: 'عصير مانجو' }, desc: { en: 'Fresh mango juice with vibrant flavor.', ar: 'عصير مانجو بطعم منعش وغني.' } },

  { id: 'B01', category: 'bakery', price: 65, name: { en: 'Cheese Croissant', ar: 'كرواسون جبنة' }, desc: { en: 'Flaky croissant filled with cheese.', ar: 'كرواسون مورق بحشوة جبنة.' } },
  { id: 'B02', category: 'bakery', price: 55, name: { en: 'Zaatar Manaqeesh', ar: 'مناقيش زعتر' }, desc: { en: 'Warm baked zaatar flatbread.', ar: 'مناقيش زعتر طازجة ودافئة.' } },
  { id: 'B03', category: 'bakery', price: 90, name: { en: 'Feteer Meshaltet', ar: 'فطير مشلتت' }, desc: { en: 'Traditional layered pastry.', ar: 'فطير مشلتت شرقي بطبقات لذيذة.' } },

  { id: 'S01', category: 'sweets', price: 85, name: { en: 'Kunafa Cup', ar: 'كنافة كب' }, desc: { en: 'Crunchy kunafa served in a cup.', ar: 'كنافة مقرمشة مقدمة في كب.' } },
  { id: 'S02', category: 'sweets', price: 50, name: { en: 'Basbousa', ar: 'بسبوسة' }, desc: { en: 'Soft semolina dessert.', ar: 'بسبوسة ناعمة بطعم شرقي.' } },
  { id: 'S03', category: 'sweets', price: 40, name: { en: 'Chocolate Cookie', ar: 'كوكي شوكولاتة' }, desc: { en: 'Soft cookie with chocolate pieces.', ar: 'كوكي ناعم بقطع شوكولاتة.' } },
];

const translations = {
  en: {
    brandTag: 'Smart café ordering experience', navMenu: 'Menu', navOrder: 'Order', navWorkflow: 'Workflows', navContact: 'Contact',
    eyebrow: 'Live Café Automation Portfolio',
    heroTitle: 'A modern café experience powered by <span>n8n</span>, AI, and elegant design.',
    heroText: 'Browse the menu, build your order, choose delivery or pickup, then continue in Instagram or Messenger chat with a smooth café-style interface.',
    heroPrimary: 'Start Your Order', heroSecondary: 'See the Workflows', heroCardTitle: 'Fenjan Ordering Flow', heroCardNote: 'Built from the actual Fenjan workflows: DM Orders, Kitchen & Daily Special, and Error Handling.',
    stat1: 'Main workflows', stat2: 'Menu items in demo', stat3: 'Customer chat channels', stat4: 'Unified café experience',
    menuEyebrow: 'Curated Demo Menu', menuTitle: 'Pick your favorite drink or snack', menuText: 'This menu is built for the live portfolio demo and matches the Fenjan ordering workflow experience.',
    builderEyebrow: 'Interactive Order Builder', builderTitle: 'Build your order like a real customer', builderText: 'Choose items, set quantities, select pickup or delivery, then copy or send the final order to chat.',
    fulfillmentLabel: 'Choose service', pickup: 'Pickup from café', delivery: 'Delivery', customerNameLabel: 'Customer name', customerNamePlaceholder: 'Your name',
    phoneLabel: 'Phone / contact', phonePlaceholder: 'Optional', addressLabel: 'Delivery address', addressPlaceholder: 'Enter your address',
    notesLabel: 'Notes', notesPlaceholder: 'No sugar, extra ice, etc.', copyOrder: 'Copy order text', openMessenger: 'Open Messenger', openInstagram: 'Open Instagram',
    helperNote: 'Tip: The website copies your order text first, then you can paste it into Messenger or Instagram chat.',
    cartTitle: 'Your order summary', clearCart: 'Clear', subtotal: 'Subtotal', deliveryFee: 'Delivery fee', total: 'Total', generatedMessage: 'Generated message',
    workflowEyebrow: 'Workflow Architecture', workflowTitle: 'The exact automation idea behind Fenjan Café', workflowText: 'This portfolio is based on the uploaded n8n workflow files and presents the customer journey, kitchen operations, and monitoring logic.',
    wf1Text: 'Handles inbound messages, reads the menu, detects the order using AI, manages carts, saves orders, and replies to the customer.',
    wf2Text: 'Lets the kitchen update order status, message the customer, and publish a daily special automatically on schedule.',
    wf3Text: 'Monitors workflow failures, logs them into Google Sheets, and alerts the team through Telegram.',
    downloadsTitle: 'Workflow files included',
    contactEyebrow: 'Customer access', contactTitle: 'Continue the order in your preferred channel', contactText: 'Use the order builder, copy the generated message, then continue with Messenger or Instagram. This gives the portfolio a real customer-facing flow.',
    contactMessenger: 'Chat on Messenger', contactInstagram: 'Chat on Instagram',
    portfolioEyebrow: 'Portfolio highlights', feature1: 'Elegant café-themed UI with dark mode', feature2: 'Arabic / English language toggle', feature3: 'Interactive order builder and cart', feature4: 'Delivery or pickup selection', feature5: 'Workflow showcase with downloadable JSON files', feature6: 'Ready to publish on GitHub Pages',
    footerNote: 'Designed as a café automation showcase for a university project using n8n workflows.',
    allTab: 'All', hotTab: 'Hot drinks', coldTab: 'Cold drinks', bakeryTab: 'Bakery', sweetsTab: 'Sweets', addItem: 'Add to order', emptyCart: 'No items yet. Add something from the menu to start building your order.',
    copied: 'Order text copied. Open your chat and paste it there.',
    copyFailed: 'Copy failed. You can still copy the generated message manually.',
    orderGreeting: 'Hello Fenjan Café, I would like to place this order:', orderName: 'Name', orderPhone: 'Phone', orderService: 'Service', orderAddress: 'Address', orderItems: 'Items', orderNotes: 'Notes', orderSubtotal: 'Subtotal', orderDeliveryFee: 'Delivery fee', orderTotal: 'Total', servicePickup: 'Pickup from café', serviceDelivery: 'Delivery',
  },
  ar: {
    brandTag: 'تجربة طلب ذكية لكافيه عصري', navMenu: 'المنيو', navOrder: 'الطلب', navWorkflow: 'الورك فلو', navContact: 'التواصل',
    eyebrow: 'بورتفوليو لايف لأتمتة الكافيه',
    heroTitle: 'تجربة كافيه عصرية مدعومة بـ <span>n8n</span> والذكاء الاصطناعي وتصميم أنيق.',
    heroText: 'تصفّح المنيو، كوّن طلبك، اختر توصيل أو استلام، ثم كمل عبر إنستجرام أو ماسنجر من خلال واجهة تناسب كافيه حقيقي.',
    heroPrimary: 'ابدأ طلبك', heroSecondary: 'شوف الورك فلو', heroCardTitle: 'مسار طلبات فنجان', heroCardNote: 'الموقع مبني على الورك فلو الحقيقية: DM Orders و Kitchen & Daily Special و Error Handling.',
    stat1: 'ورك فلو رئيسية', stat2: 'عنصر في المنيو', stat3: 'قنوات تواصل للعملاء', stat4: 'تجربة كافيه متكاملة',
    menuEyebrow: 'منيو تجريبية', menuTitle: 'اختار مشروبك أو سناكك المفضل', menuText: 'المنيو دي معمولة لعرض البورتفوليو ومطابقة لفكرة Workflow الطلبات في Fenjan.',
    builderEyebrow: 'باني الطلبات التفاعلي', builderTitle: 'كوّن طلبك كأنك عميل حقيقي', builderText: 'اختار الأصناف والكمية وحدد توصيل أو استلام، وبعدها انسخ الرسالة أو كمل في الشات.',
    fulfillmentLabel: 'اختر الخدمة', pickup: 'استلام من المحل', delivery: 'توصيل', customerNameLabel: 'اسم العميل', customerNamePlaceholder: 'اكتب اسمك',
    phoneLabel: 'الموبايل / وسيلة تواصل', phonePlaceholder: 'اختياري', addressLabel: 'عنوان التوصيل', addressPlaceholder: 'اكتب عنوانك',
    notesLabel: 'ملاحظات', notesPlaceholder: 'من غير سكر، تلج زيادة، إلخ', copyOrder: 'انسخ نص الطلب', openMessenger: 'افتح ماسنجر', openInstagram: 'افتح إنستجرام',
    helperNote: 'نصيحة: الموقع بينسخ نص الطلب أولًا، وبعدها تقدر تلزقه في شات إنستجرام أو ماسنجر.',
    cartTitle: 'ملخص طلبك', clearCart: 'مسح', subtotal: 'الإجمالي الفرعي', deliveryFee: 'رسوم التوصيل', total: 'الإجمالي', generatedMessage: 'الرسالة الجاهزة',
    workflowEyebrow: 'هيكل الورك فلو', workflowTitle: 'فكرة الأتمتة الكاملة وراء Fenjan Café', workflowText: 'هذا البورتفوليو مبني على ملفات n8n المرفوعة، ويعرض رحلة العميل وتشغيل المطبخ ومراقبة الأخطاء.',
    wf1Text: 'يستقبل رسائل العملاء، يقرأ المنيو، يفهم الطلب بالذكاء الاصطناعي، يدير السلة، يحفظ الأوردر، ويرد على العميل.',
    wf2Text: 'يتيح للمطبخ تحديث حالة الأوردر، إرسال رسالة للعميل، ونشر عرض اليوم بشكل تلقائي.',
    wf3Text: 'يراقب الأخطاء، يسجلها في Google Sheets، ويرسل تنبيهات للفريق عبر Telegram.',
    downloadsTitle: 'ملفات الورك فلو المرفقة',
    contactEyebrow: 'وصول العملاء', contactTitle: 'كمل طلبك من خلال القناة اللي تفضلها', contactText: 'استخدم باني الطلبات، انسخ الرسالة الجاهزة، ثم كمل على Messenger أو Instagram لتجربة عميل كاملة.',
    contactMessenger: 'تحدث على ماسنجر', contactInstagram: 'تحدث على إنستجرام',
    portfolioEyebrow: 'مميزات البورتفوليو', feature1: 'تصميم بطابع كافيه مع دارك مود', feature2: 'تبديل عربي / إنجليزي', feature3: 'سلة وطلب تفاعلي', feature4: 'اختيار التوصيل أو الاستلام', feature5: 'عرض الورك فلو مع ملفات JSON للتحميل', feature6: 'جاهز للنشر على GitHub Pages',
    footerNote: 'تم تصميمه كبورتفوليو لأتمتة كافيه لمشروع جامعي باستخدام n8n.',
    allTab: 'الكل', hotTab: 'مشروبات ساخنة', coldTab: 'مشروبات باردة', bakeryTab: 'مخبوزات', sweetsTab: 'حلويات', addItem: 'أضف للطلب', emptyCart: 'لا توجد أصناف بعد. أضف شيئًا من المنيو لتبدأ تكوين طلبك.',
    copied: 'تم نسخ نص الطلب. افتح الشات والصقه هناك.',
    copyFailed: 'فشل النسخ. تقدر تنسخ الرسالة يدويًا من الصندوق.',
    orderGreeting: 'أهلاً Fenjan Café، أنا أحب أطلب الأوردر التالي:', orderName: 'الاسم', orderPhone: 'الموبايل', orderService: 'الخدمة', orderAddress: 'العنوان', orderItems: 'الأصناف', orderNotes: 'الملاحظات', orderSubtotal: 'الإجمالي الفرعي', orderDeliveryFee: 'رسوم التوصيل', orderTotal: 'الإجمالي', servicePickup: 'استلام من المحل', serviceDelivery: 'توصيل',
  }
};

const categoryLabels = {
  all: { en: 'All', ar: 'الكل' },
  hot: { en: 'Hot drinks', ar: 'مشروبات ساخنة' },
  cold: { en: 'Cold drinks', ar: 'مشروبات باردة' },
  bakery: { en: 'Bakery', ar: 'مخبوزات' },
  sweets: { en: 'Sweets', ar: 'حلويات' },
};

const state = {
  lang: localStorage.getItem('fenjan-lang') || 'en',
  theme: localStorage.getItem('fenjan-theme') || 'light',
  category: 'all',
  cart: JSON.parse(localStorage.getItem('fenjan-cart') || '{}'),
};

const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const $ = (sel, root = document) => root.querySelector(sel);

function t(key) { return translations[state.lang][key] ?? key; }
function formatMoney(n) { return `${n} ${config.currency}`; }

function setTheme() {
  document.body.classList.toggle('dark', state.theme === 'dark');
  $('#themeToggle').textContent = state.theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('fenjan-theme', state.theme);
}

function setLanguage() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  $('#langToggle').textContent = state.lang === 'ar' ? 'EN' : 'AR';
  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.innerHTML.includes('<span>') || ['heroTitle'].includes(key)) {
      el.innerHTML = t(key);
    } else {
      el.textContent = t(key);
    }
  });
  $$('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  localStorage.setItem('fenjan-lang', state.lang);
  renderTabs();
  renderMenu();
  renderCart();
}

function persistCart() {
  localStorage.setItem('fenjan-cart', JSON.stringify(state.cart));
}

function getCartEntries() {
  return Object.entries(state.cart)
    .map(([id, qty]) => ({ item: menuData.find(x => x.id === id), qty }))
    .filter(x => x.item && x.qty > 0);
}

function renderTabs() {
  const tabs = [
    { key: 'all', label: t('allTab') },
    { key: 'hot', label: t('hotTab') },
    { key: 'cold', label: t('coldTab') },
    { key: 'bakery', label: t('bakeryTab') },
    { key: 'sweets', label: t('sweetsTab') },
  ];
  $('#menuTabs').innerHTML = tabs.map(tab => `
    <button class="tab-btn ${state.category === tab.key ? 'active' : ''}" data-category="${tab.key}">${tab.label}</button>
  `).join('');
  $$('#menuTabs .tab-btn').forEach(btn => btn.addEventListener('click', () => {
    state.category = btn.dataset.category;
    renderTabs();
    renderMenu();
  }));
}

function renderMenu() {
  const filtered = state.category === 'all' ? menuData : menuData.filter(item => item.category === state.category);
  $('#menuGrid').innerHTML = filtered.map(item => {
    const qty = state.cart[item.id] || 0;
    return `
      <article class="menu-card">
        <div class="cat">${categoryLabels[item.category][state.lang]}</div>
        <div>
          <h3>${item.name[state.lang]}</h3>
          <p>${item.desc[state.lang]}</p>
        </div>
        <div class="menu-meta">
          <span class="price">${formatMoney(item.price)}</span>
          <div class="qty-control" data-id="${item.id}">
            <button type="button" data-action="minus">−</button>
            <strong>${qty}</strong>
            <button type="button" data-action="plus">+</button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  $$('.qty-control').forEach(control => {
    control.addEventListener('click', e => {
      const btn = e.target.closest('button');
      if (!btn) return;
      const id = control.dataset.id;
      const action = btn.dataset.action;
      state.cart[id] = state.cart[id] || 0;
      if (action === 'plus') state.cart[id] += 1;
      if (action === 'minus') state.cart[id] = Math.max(0, state.cart[id] - 1);
      if (state.cart[id] === 0) delete state.cart[id];
      persistCart();
      renderMenu();
      renderCart();
    });
  });
}

function getFulfillment() {
  return $('input[name="fulfillment"]:checked')?.value || 'pickup';
}

function getTotals() {
  const subtotal = getCartEntries().reduce((sum, row) => sum + row.item.price * row.qty, 0);
  const delivery = getFulfillment() === 'delivery' ? config.deliveryFee : 0;
  return { subtotal, delivery, total: subtotal + delivery };
}

function buildOrderMessage() {
  const name = $('#customerName').value.trim();
  const phone = $('#customerPhone').value.trim();
  const address = $('#deliveryAddress').value.trim();
  const notes = $('#orderNotes').value.trim();
  const fulfillment = getFulfillment();
  const rows = getCartEntries();
  const { subtotal, delivery, total } = getTotals();
  const lines = [];
  lines.push(t('orderGreeting'));
  if (name) lines.push(`${t('orderName')}: ${name}`);
  if (phone) lines.push(`${t('orderPhone')}: ${phone}`);
  lines.push(`${t('orderService')}: ${fulfillment === 'delivery' ? t('serviceDelivery') : t('servicePickup')}`);
  if (fulfillment === 'delivery' && address) lines.push(`${t('orderAddress')}: ${address}`);
  lines.push('');
  lines.push(`${t('orderItems')}:`);
  if (!rows.length) lines.push(state.lang === 'ar' ? '- لا توجد أصناف بعد' : '- No items yet');
  rows.forEach(row => {
    lines.push(`- ${row.qty} × ${row.item.name[state.lang]} — ${formatMoney(row.item.price * row.qty)}`);
  });
  lines.push('');
  lines.push(`${t('orderSubtotal')}: ${formatMoney(subtotal)}`);
  lines.push(`${t('orderDeliveryFee')}: ${formatMoney(delivery)}`);
  lines.push(`${t('orderTotal')}: ${formatMoney(total)}`);
  if (notes) {
    lines.push('');
    lines.push(`${t('orderNotes')}: ${notes}`);
  }
  return lines.join('\n');
}

function renderCart() {
  const itemsBox = $('#cartItems');
  const rows = getCartEntries();
  if (!rows.length) {
    itemsBox.innerHTML = `<div class="empty-state">${t('emptyCart')}</div>`;
  } else {
    itemsBox.innerHTML = rows.map(row => `
      <div class="cart-row">
        <div>
          <strong>${row.item.name[state.lang]}</strong>
          <span>${row.qty} × ${formatMoney(row.item.price)}</span>
        </div>
        <div class="cart-actions">
          <strong>${formatMoney(row.item.price * row.qty)}</strong>
          <button class="remove-btn" type="button" data-id="${row.item.id}">✕</button>
        </div>
      </div>
    `).join('');
    $$('.remove-btn').forEach(btn => btn.addEventListener('click', () => {
      delete state.cart[btn.dataset.id];
      persistCart();
      renderMenu();
      renderCart();
    }));
  }
  const { subtotal, delivery, total } = getTotals();
  $('#subtotalValue').textContent = formatMoney(subtotal);
  $('#deliveryValue').textContent = formatMoney(delivery);
  $('#totalValue').textContent = formatMoney(total);
  $('#generatedMessage').value = buildOrderMessage();
}

async function copyGeneratedMessage() {
  const text = $('#generatedMessage').value;
  try {
    await navigator.clipboard.writeText(text);
    alert(t('copied'));
  } catch (e) {
    alert(t('copyFailed'));
  }
}

function openLinkWithCopy(url, fallback) {
  copyGeneratedMessage().finally?.(() => {
    const finalUrl = url || fallback;
    window.open(finalUrl, '_blank', 'noopener');
  });
}

function bindActions() {
  $('#langToggle').addEventListener('click', () => { state.lang = state.lang === 'ar' ? 'en' : 'ar'; setLanguage(); });
  $('#themeToggle').addEventListener('click', () => { state.theme = state.theme === 'dark' ? 'light' : 'dark'; setTheme(); });
  $$('input[name="fulfillment"]').forEach(radio => radio.addEventListener('change', () => {
    $('#addressWrap').classList.toggle('hidden', getFulfillment() !== 'delivery');
    renderCart();
  }));
  ['#customerName', '#customerPhone', '#deliveryAddress', '#orderNotes'].forEach(sel => {
    $(sel).addEventListener('input', renderCart);
  });
  $('#clearCartBtn').addEventListener('click', () => {
    state.cart = {}; persistCart(); renderMenu(); renderCart();
  });
  $('#copyOrderBtn').addEventListener('click', copyGeneratedMessage);
  $('#messengerBtn').addEventListener('click', () => openLinkWithCopy(config.messengerUrl));
  $('#instagramBtn').addEventListener('click', () => openLinkWithCopy(config.instagramUrl, config.instagramFallback));
  $('#messengerLink').href = config.messengerUrl;
  $('#instagramLink').href = config.instagramUrl;
  $('#year').textContent = new Date().getFullYear();
}

function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.15 });
  $$('.reveal').forEach(el => observer.observe(el));
}

bindActions();
setTheme();
setLanguage();
$('#addressWrap').classList.toggle('hidden', getFulfillment() !== 'delivery');
renderTabs();
renderMenu();
renderCart();
initReveal();
