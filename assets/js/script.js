const brands = [
  { name: "Chevrolet", img: "chevrolet.jpg" },
  { name: "Dadi", img: "dadi_.jpg" },
  { name: "Daihatsu", img: "daihatsu.jpg" },
  { name: "Dodge", img: "dodge.jpg" },
  { name: "Ford", img: "ford.jpg" },
  { name: "Great Wall", img: "greatwall.jpg" },
  { name: "Honda", img: "honda.jpg" },
  { name: "Hyundai", img: "hyundai.jpg" },
  { name: "Isuzu", img: "isuzu.jpg" },
  { name: "Izh", img: "izh.jpg" },
  { name: "Jeep", img: "jeep.jpg" },
  { name: "Kamaz", img: "kamaz.jpg" },
  { name: "Kia", img: "kia.jpg" },
  { name: "Lada", img: "lada2.jpg" },
  { name: "Land Rover", img: "land_rover.jpg" },
  { name: "Mazda", img: "mazda.jpg" },
  { name: "Mitsubishi", img: "mitsubishi.jpg" },
  { name: "Nissan", img: "nissan.jpg" },
  { name: "Opel", img: "opel.jpg" },
  { name: "Ssang Yong", img: "ssang_yong.jpg" },
  { name: "Subaru", img: "subaru.jpg" },
  { name: "Suzuki", img: "suzuki.jpg" },
  { name: "Tagaz", img: "tagaz.jpg" },
  { name: "Toyota", img: "toyota.jpg" },
  { name: "Trekol", img: "trekol.jpg" },
  { name: "UAZ", img: "uaz.jpg" },
  { name: "Ural", img: "ural.jpg" },
];

const basePath =
  "Блокировка дифференциала. Дифференциалы Автоматические Красикова_files/";
const grid = document.getElementById("brands-grid");

if (grid) {
  brands.forEach((brand) => {
    // Генерация карточек для центральной сетки
    const card = document.createElement("div");
    card.className = "brand-card";

    // Используем encodeURIComponent для безопасного внедрения SVG
    const rawSvg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="#f0f4f8"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#999">Нет фото</text></svg>';
    const fallbackSvg = "data:image/svg+xml," + encodeURIComponent(rawSvg);

    // Добавляем переход в каталог с параметром марки
    card.onclick = () => {
      window.location.href = `catalog.html?brand=${encodeURIComponent(brand.name)}`;
    };

    card.innerHTML = `<img src="${basePath}${brand.img}" alt="${brand.name}" class="brand-logo" onerror="this.onerror=null; this.src='${fallbackSvg}';">
                          <div class="brand-name">${brand.name}</div>`;
    grid.appendChild(card);
  });
}

// Показывать виджет мессенджера на мобильных устройствах
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
) {
  const messengerContainer = document.getElementById("messenger-container");
  if (messengerContainer) {
    messengerContainer.classList.remove("hidden");
  }
}

/* =======================================
   ЛOГИКА КОРЗИНЫ (Local Storage)
======================================= */

function getCart() {
  return JSON.parse(localStorage.getItem("dak_cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("dak_cart", JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(product) {
  const cart = getCart();
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  alert(`Товар "${product.name}" добавлен в корзину!`);
}

function updateCartBadge() {
  const badges = document.querySelectorAll(".cart-badge");
  if (!badges.length) return;

  const cart = getCart();
  const count = cart.reduce((total, item) => total + item.quantity, 0);

  badges.forEach((badge) => {
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
  });
}

// Запускаем обновление при загрузке страницы
document.addEventListener("DOMContentLoaded", updateCartBadge);

/* =======================================
   СТРАНИЦА КОРЗИНЫ (cart.html)
======================================= */
function renderCartPage() {
  const container = document.getElementById("cart-items-container");
  const totalPriceEl = document.getElementById("cart-total-price");
  if (!container || !totalPriceEl) return;

  const cart = getCart();
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML =
      '<div class="cart-empty-message">Ваша корзина пуста. Не пора ли подобрать надежную блокировку?</div>';
    totalPriceEl.textContent = "0 руб.";
    return;
  }

  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";

    // Fallback изображение, если путь битый
    const fallbackSvg =
      "data:image/svg+xml," +
      encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="#f0f4f8"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#999">Фото</text></svg>',
      );
    const imgSrc = item.img || fallbackSvg;

    itemEl.innerHTML = `
      <img src="${imgSrc}" class="cart-item-img" alt="${item.name}" onerror="this.onerror=null; this.src='${fallbackSvg}';">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-code">Артикул: ${item.code || "-"}</div>
      </div>
      <div class="cart-item-quantity">
        <button class="qty-btn minus" onclick="updateQuantity('${item.id}', -1)">-</button>
        <input type="text" class="qty-input" value="${item.quantity}" readonly>
        <button class="qty-btn plus" onclick="updateQuantity('${item.id}', 1)">+</button>
      </div>
      <div class="cart-item-price">${(item.price * item.quantity).toLocaleString("ru-RU")} руб.</div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Удалить">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
      </button>
    `;
    container.appendChild(itemEl);
  });

  totalPriceEl.textContent = `${total.toLocaleString("ru-RU")} руб.`;
}

function updateQuantity(id, change) {
  let cart = getCart();
  const itemIndex = cart.findIndex((item) => item.id === id);
  if (itemIndex > -1) {
    cart[itemIndex].quantity += change;
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
  }
  saveCart(cart);
  renderCartPage();
}

function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== id);
  saveCart(cart);
  renderCartPage();
}

// Рендерим содержимое корзины, если мы на странице корзины
document.addEventListener("DOMContentLoaded", renderCartPage);

// Обработчик отправки формы заказа
const checkoutForm = document.getElementById("checkout-form");
if (checkoutForm) {
  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const cart = getCart();

    if (cart.length === 0) {
      alert("Корзина пуста. Добавьте товары перед оформлением.");
      return;
    }

    // Собираем текст заказа для отправки в WhatsApp
    const fio = document.getElementById("fio").value;
    const phone = document.getElementById("phone").value;
    const delivery = document.getElementById("delivery").value;
    const address = document.getElementById("address").value;
    const comment = document.getElementById("comment").value;

    let orderText = `*НОВЫЙ ЗАКАЗ С САЙТА ДАК*\n\n`;
    orderText += `*Товары:*\n`;

    let totalSum = 0;
    cart.forEach((item, index) => {
      orderText +=
        `${index + 1}. ${item.name} (${item.code})\n` +
        `   Количество: ${item.quantity} шт.\n` +
        `   Цена: ${item.price * item.quantity} руб.\n\n`;
      totalSum += item.price * item.quantity;
    });

    orderText += `*ИТОГО: ${totalSum} руб.*\n\n`;
    orderText += `*Данные покупателя:*\n`;
    orderText += `ФИО: ${fio}\n`;
    orderText += `Телефон: ${phone}\n`;
    orderText += `Способ доставки: ${delivery}\n`;
    if (address) orderText += `Адрес: ${address}\n`;
    if (comment) orderText += `Комментарий: ${comment}\n`;

    // Кодируем текст для URL WhatsApp
    const encodedText = encodeURIComponent(orderText);

    // Очищаем корзину
    saveCart([]);
    renderCartPage();

    // Открываем WhatsApp с готовым сообщением
    window.open(`https://wa.me/79123239659?text=${encodedText}`, "_blank");
  });
}

/* =======================================
   ДИНАМИЧЕСКИЙ КАТАЛОГ ТОВАРОВ
======================================= */
const productsData = [
  {
    id: "dak-vaz-00-09",
    brand: ["Lada", "Chevrolet"], // Подходит для Нивы и Шнивы
    name: "Межосевой самоблокирующийся дифференциал ДАК",
    code: "ДАК.ВАЗ.МО.00.09",
    install: "Раздаточная коробка",
    blockRatio: "90/100 %",
    splines: "22",
    price: 22000,
    img: "https://dak4x4.com/files/catalog/6cdcc614d3154a050e9245d14fedc1e5_s.jpg",
  },
  {
    id: "dks-204",
    brand: ["Lada", "Chevrolet"],
    name: "Блокировка ДКС для Нивы Шевроле, Нивы 4x4 (ДКС.204)",
    code: "ДКС.204",
    install: "Передний мост",
    blockRatio: "100/100 %",
    splines: "24",
    price: 20000,
    img: "https://dak4x4.com/files/catalog/d394d38250146761c1c3c1285fc2c329_s.jpg",
  },
  {
    id: "dks-201-front",
    brand: ["Lada"],
    name: "Блокировка ДКС для Нивы в передний мост (до 2004 г.)",
    code: "ДКС.201",
    install: "Передний мост",
    blockRatio: "100/100 %",
    splines: "22",
    price: 20000,
    img: "https://dak4x4.com/files/catalog/17c8459ea082db6ae4ac934ae21b91a9_s.jpg",
  },
  {
    id: "dks-201-rear",
    brand: ["Lada", "Chevrolet"],
    name: "Блокировка ДКС для Нивы, Шевроле Нивы в задний мост",
    code: "ДКС.201",
    install: "Задний мост",
    blockRatio: "100/100 %",
    splines: "22",
    price: 20000,
    img: "https://dak4x4.com/files/catalog/6a9f2dfb96c480ef80998cfc9ce3dced_s.jpg",
  }
];

function renderDynamicCatalog() {
  const params = new URLSearchParams(window.location.search);
  const selectedBrand = params.get("brand");
  
  const titleEl = document.getElementById("catalog-title");
  const catalogGrid = document.getElementById("catalog-grid");
  
  // Если мы не на странице каталога, выходим
  if (!catalogGrid) return;
  
  let filteredProducts = productsData;
  
  if (selectedBrand) {
    if (titleEl) titleEl.textContent = `Блокировки дифференциала на ${selectedBrand}`;
    // Фильтруем товары по марке
    filteredProducts = productsData.filter(product => 
      product.brand.includes(selectedBrand)
    );
  } else {
    // В каталоге без марки можно показать всё или написать сообщение
    if (titleEl) titleEl.textContent = "Каталог всех блокировок";
  }

  catalogGrid.innerHTML = "";

  if (filteredProducts.length === 0) {
    catalogGrid.innerHTML = `<p style="grid-column: 1 / -1; font-size: 1.1rem;">К сожалению, товары для марки <b>${selectedBrand}</b> еще не добавлены в каталог.</p>`;
    return;
  }

  filteredProducts.forEach(product => {
    // Безопасная сериализация для передачи в onClick
    const safeProductObj = JSON.stringify({
      id: product.id,
      name: product.name,
      code: product.code,
      price: product.price,
      img: product.img
    }).replace(/"/g, '&quot;');

    const itemEl = document.createElement("div");
    itemEl.className = "product-item";
    itemEl.innerHTML = `
      <div class="product-image">
        <img
          src="${product.img}"
          alt="${product.name}"
          onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'><rect width=\\'100\\' height=\\'100\\' fill=\\'%23f0f4f8\\'/><text x=\\'50%\\' y=\\'50%\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\' font-size=\\'14\\' fill=\\'%23a0aec0\\'>Фото</text></svg>'"
        />
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <div class="product-specs-grid">
          <div class="spec-item"><span class="label">Код изделия</span><span class="value">${product.code}</span></div>
          <div class="spec-item"><span class="label">Место установки</span><span class="value">${product.install}</span></div>
          <div class="spec-item"><span class="label">Блокировка</span><span class="value">${product.blockRatio}</span></div>
          <div class="spec-item"><span class="label">Шлицы</span><span class="value">${product.splines}</span></div>
        </div>
        <div class="product-price">${product.price.toLocaleString("ru-RU")} руб.</div>
        <div class="product-actions">
          <button class="btn-primary" onclick="addToCart(${safeProductObj})">В корзину</button>
          <a href="product.html?id=${product.id}" class="btn-secondary" style="text-decoration: none; display: inline-flex; align-items: center;">Подробнее</a>
        </div>
      </div>
    `;
    catalogGrid.appendChild(itemEl);
  });
}

document.addEventListener("DOMContentLoaded", renderDynamicCatalog);
