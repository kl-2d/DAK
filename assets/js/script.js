const brands = [
  { name: "УАЗ", img: "https://dak4x4.com/files/catalog/cf8bb14525966ae121e3af36736938a1_s.jpg" },
  { name: "Вездеходы ТРЭКОЛ, Хищник", img: "https://dak4x4.com/files/catalog/ed94ac71761baa4f9271f9f0f2ef849a_s.jpg" },
  { name: "Вездеход BV 206", img: "https://dak4x4.com/files/catalog/14be8e727646f06f7386ca996fef62761_s.jpg" },
  { name: "ГАЗель, Соболь", img: "https://dak4x4.com/files/catalog/1ac32e7d2538411e23443d3926e4bd60_s.jpg" },
  { name: "ВОЛГА", img: "https://dak4x4.com/files/catalog/55803633440546eda896fe67cdc3e3e8_s.jpg" },
  { name: "ВАЗ передний привод", img: "https://dak4x4.com/files/catalog/5717741dccd216392ef870e47a4e0afc_s.jpg" },
  { name: "Нива, Шевроле Нива", img: "https://dak4x4.com/files/catalog/886e9ea098cab9572116333ff0330df2_s.jpg" },
  { name: "ВАЗ классика", img: "https://dak4x4.com/files/catalog/ed75c56629e3ef66b182f01ed7211a72_s.jpg" },
  { name: "ИЖ ОДА, Москвич", img: "https://dak4x4.com/files/catalog/537305f2dd2efc8b1dd88673e2cbc535_s.jpg" },
  { name: "Квадроциклы", img: "https://dak4x4.com/files/catalog/7172e059e935213839d87c65f1a4e11b_s.jpg" },
  { name: "Audi", img: "https://dak4x4.com/files/catalog/e267809f310f74bc31a2fc182995ba62_s.jpg" },
  { name: "Daihatsu", img: "https://dak4x4.com/files/catalog/23e6f4337d0c5b972c4f75f0bd51853e_s.jpg" },
  { name: "Dadi", img: "https://dak4x4.com/files/catalog/5e2de7b7ea5788ccefea819b9f970d7b_s.jpg" },
  { name: "Dodge", img: "https://dak4x4.com/files/catalog/8fc3d2846fba215ec464ace846906d96_s.jpg" },
  { name: "Ford", img: "https://dak4x4.com/files/catalog/89d74d2be9635f48586ce968ae145e30_s.jpg" },
  { name: "Great Wall", img: "https://dak4x4.com/files/catalog/7b26ddc8cfd605cf2be153beb0bc3d39_s.jpg" },
  { name: "Chevrolet (GM)", img: "https://dak4x4.com/files/catalog/8f6f649d9be87dc690b3499aaf9fb00c_s.jpg" },
  { name: "Honda", img: "https://dak4x4.com/files/catalog/b4b103de9fe5989799f41023bbcba95e_s.jpg" },
  { name: "Hyundai", img: "https://dak4x4.com/files/catalog/ff0addec0805e8236420409777824366_s.jpg" },
  { name: "Isuzu", img: "https://dak4x4.com/files/catalog/94d6bbd410a9ee135f8034ac8c4de5a2_s.jpg" },
  { name: "Jeep", img: "https://dak4x4.com/files/catalog/08c0ab651bca366a6e72a42329b356ee_s.jpg" },
  { name: "KIA", img: "https://dak4x4.com/files/catalog/0fbf6a17dfccf22a2fd1af92f8c15532_s.jpg" },
  { name: "Land Rover", img: "https://dak4x4.com/files/catalog/2f415ea700f3d4fbaa3849fd3fdec241_s.jpg" },
  { name: "Mitsubishi", img: "https://dak4x4.com/files/catalog/7439a9d019da835debfc0d8cf97a6ca4_s.jpg" },
  { name: "Mazda", img: "https://dak4x4.com/files/catalog/c43771477a6c35ec24574771c859dde2_s.jpg" },
  { name: "Nissan", img: "https://dak4x4.com/files/catalog/6cac7a8497ded527b1a6c733567ae1b0_s.jpg" },
  { name: "Opel", img: "https://dak4x4.com/files/catalog/b238273db553b88c69ec70d061b1d010_s.jpg" },
  { name: "Renault", img: "https://dak4x4.com/files/catalog/fa801fb40910e21d6a5a1a98ba4579da_s.jpg" },
  { name: "ТагАЗ", img: "https://dak4x4.com/files/catalog/b5ac3f1b6595e32fd5b2417505bead5a_s.jpg" },
  { name: "Ssang Yong", img: "https://dak4x4.com/files/catalog/d64329cf05df3022370e26864b6251c6_s.jpg" },
  { name: "Suzuki", img: "https://dak4x4.com/files/catalog/4b4d5c04a829bf3d9fce0a1b43db38c1_s.jpg" },
  { name: "Subaru", img: "https://dak4x4.com/files/catalog/4231b0b8264ccb752b03ed19720bae5c_s.jpg" },
  { name: "Toyota", img: "https://dak4x4.com/files/catalog/bced3d56fccff37b93cc7b738cf51a16_s.jpg" },
  { name: "КАМАЗ", img: "https://dak4x4.com/files/catalog/6c746a06fcdfc6a0cffd419c53f93f14_s.jpg" },
  { name: "Урал", img: "https://dak4x4.com/files/catalog/73943bf308d553a15045c3bd3075e1a6_s.jpg" }
];

const basePath =
  "Блокировка дифференциала. Дифференциалы Автоматические Красикова_files/";
const grid = document.getElementById("brands-grid");

// Проверка параметра URL
const urlParamsForGrid = new URLSearchParams(window.location.search);
const isBrandSelected = urlParamsForGrid.get("brand");

if (grid) {
  if (!isBrandSelected) {
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

      card.innerHTML = `<img src="${brand.img}" alt="${brand.name}" class="brand-logo" onerror="this.onerror=null; this.src='${fallbackSvg}';">
                            <div class="brand-name">${brand.name}</div>`;
      grid.appendChild(card);
    });
  } else {
    // Если бренд выбран, можно просто скрыть сетку брендов (её секцию)
    const brandSection = document.getElementById('brands-section');
    if (brandSection) brandSection.style.display = 'none';
  }
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

    // --- МОК сохранение в "Базу данных" для личного кабинета ---
    const user = localStorage.getItem('dak_user');
    if (user) {
      const mockOrders = JSON.parse(localStorage.getItem('dak_orders')) || [];
      const newOrder = {
        id: Math.floor(Math.random() * 10000),
        date: new Date().toLocaleDateString('ru-RU'),
        status: 'В обработке',
        total: totalSum,
        items: cart.map(item => ({name: item.name, quantity: item.quantity}))
      };
      mockOrders.push(newOrder);
      localStorage.setItem('dak_orders', JSON.stringify(mockOrders));
    }
    // -------------------------------------------------------------

    // Очищаем корзину
    saveCart([]);
    renderCartPage();

    // Открываем WhatsApp с готовым сообщением
    window.open(`https://wa.me/79123239659?text=${encodedText}`, "_blank");
  });
}

/* =======================================
   ЛОГИКА АВТОРИЗАЦИИ (МОК)
======================================= */
const modalHTML = `
<div class="modal-overlay" id="login-modal">
  <div class="modal-content">
    <button class="modal-close" id="modal-close-btn">&times;</button>
    <div class="modal-title">Вход в личный кабинет</div>
    
    <button class="social-login-btn btn-yandex" onclick="mockLogin('Яндекс')">
      <b>Я</b> Войти через Яндекс
    </button>
    
    <button class="social-login-btn btn-google" onclick="mockLogin('Google')">
      <svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/><path fill="none" d="M1 1h22v22H1z"/></svg>
      Войти через Google
    </button>
  </div>
</div>
`;

// Добавляем модалку в конец body
document.body.insertAdjacentHTML('beforeend', modalHTML);

const loginBtn = document.querySelectorAll('.login-icon-link');
const modalOverlay = document.getElementById('login-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');

function updateLoginState() {
  const user = localStorage.getItem('dak_user');
  const userDisplays = document.querySelectorAll('.user-name-display');
  
  if (user) {
    userDisplays.forEach(el => {
      el.textContent = user;
      el.style.display = 'inline';
    });
    // Удаляем открытие модалки, если залогинены
    loginBtn.forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        const logout = confirm(`Вы вошли как ${user}. Выйти?`);
        if (logout) {
          localStorage.removeItem('dak_user');
          updateLoginState();
        }
      }
    });
  } else {
    userDisplays.forEach(el => {
      el.style.display = 'none';
      el.textContent = '';
    });
    // Привязываем открытие модалки
    loginBtn.forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        modalOverlay.classList.add('active');
      }
    });
  }
}

// Закрытие модалки
modalCloseBtn.onclick = () => modalOverlay.classList.remove('active');
modalOverlay.onclick = (e) => {
  if (e.target === modalOverlay) modalOverlay.classList.remove('active');
};

// Функция мок-логина
window.mockLogin = function(provider) {
  const mockNames = ['Иван Иванов', 'Пётр Петров', 'Сергей Сергеев', 'Александр Д.'];
  const randomName = mockNames[Math.floor(Math.random() * mockNames.length)];
  
  localStorage.setItem('dak_user', randomName);
  modalOverlay.classList.remove('active');
  updateLoginState();
  alert(`Вы успешно вошли через ${provider}! Добро пожаловать, ${randomName}.`);
};

// Запускаем при загрузке
document.addEventListener('DOMContentLoaded', updateLoginState);

/* =======================================
   ДИНАМИЧЕСКИЙ КАТАЛОГ ТОВАРОВ
======================================= */
const productsData = [
  {
    id: "dak-vaz-mo-00-09",
    brand: ["Нива, Шевроле Нива", "Lada"],
    name: "Межосевой самоблокирующийся дифференциал ДАК для Нивы, Нивы Шевроле, Лады 4x4",
    code: "ДАК.ВАЗ.МО.00.09",
    install: "Раздаточная коробка",
    blockRatio: "90/100 %",
    splines: "22",
    price: 22000,
    img: "https://dak4x4.com/files/catalog/6cdcc614d3154a050e9245d14fedc1e5_s.jpg",
  },
  {
    id: "dks-204-front",
    brand: ["Нива, Шевроле Нива", "Lada"],
    name: "Блокировка ДКС для Нивы Шевроле, Нивы 4x4 в передний мост",
    code: "ДКС.204",
    install: "Передний мост",
    blockRatio: "100/100 %",
    splines: "24",
    price: 20000,
    img: "https://dak4x4.com/files/catalog/d394d38250146761c1c3c1285fc2c329_s.jpg",
  },
  {
    id: "dks-201-front",
    brand: ["Нива, Шевроле Нива", "Lada"],
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
    brand: ["Нива, Шевроле Нива", "Lada", "Chevrolet (GM)"],
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
    // Скрываем каталог товаров, если нет марки, так как показываем сетку марок
    const catalogSection = document.getElementById('catalog-products-section');
    if (catalogSection) catalogSection.style.display = 'none';
    return;
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
