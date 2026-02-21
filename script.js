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
const sidebarList = document.getElementById("sidebar-list");
const grid = document.getElementById("brands-grid");

brands.forEach((brand) => {
  // Вывод каждого названия с новой строки в боковое меню
  const li = document.createElement("li");
  li.textContent = brand.name;
  sidebarList.appendChild(li);

  // Генерация карточек для центральной сетки
  const card = document.createElement("div");
  card.className = "brand-card";

  // Используем encodeURIComponent для безопасного внедрения SVG
  const rawSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="#f0f4f8"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#999">Нет фото</text></svg>';
  const fallbackSvg = "data:image/svg+xml," + encodeURIComponent(rawSvg);

  // Используем шаблонные строки и безопасный URL для fallback изображения
  card.innerHTML = `<img src="${basePath}${brand.img}" alt="${brand.name}" class="brand-logo" onerror="this.onerror=null; this.src='${fallbackSvg}';">
                        <div class="brand-name">${brand.name}</div>`;
  grid.appendChild(card);
});

// Показывать виджет мессенджера на мобильных устройствах
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  const messengerContainer = document.getElementById("messenger-container");
  if (messengerContainer) {
    messengerContainer.classList.remove("hidden");
  }
}
