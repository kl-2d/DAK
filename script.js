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

    // Добавляем переход в каталог при клике на плитку марки
    card.onclick = () => {
      window.location.href = "catalog.html";
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
