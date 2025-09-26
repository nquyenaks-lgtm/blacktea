// =======================
// BlackTea POS - app.js
// =======================

// --- Utils ---
function formatPrice(value) {
  return Number(value).toLocaleString("vi-VN") + " VND";
}

// --- Data ---
let categories = JSON.parse(localStorage.getItem("categories")) || [];
let menuItems = JSON.parse(localStorage.getItem("menuItems")) || [];
let tables = JSON.parse(localStorage.getItem("tables")) || [];
let history = JSON.parse(localStorage.getItem("history")) || [];

if (categories.length === 0 || menuItems.length === 0) {
  // ✅ Menu mặc định
  categories = ["Cà phê", "Trà sữa", "Sinh tố", "Sữa chua", "Giải khát", "Topping"];

  menuItems = [
    // --- Cà phê ---
    { cat: "Cà phê", name: "Cà phê máy (nguyên chất)", price: 15000 },
    { cat: "Cà phê", name: "Cà phê phin (đen/sữa)", price: 15000 },
    { cat: "Cà phê", name: "Cà phê sữa gòn", price: 20000 },
    { cat: "Cà phê", name: "Bạc xỉu", price: 20000 },
    { cat: "Cà phê", name: "Cà phê kem trứng", price: 20000 },
    { cat: "Cà phê", name: "Cà phê cốt dừa", price: 20000 },
    { cat: "Cà phê", name: "Cacao nóng", price: 20000 },
    { cat: "Cà phê", name: "Cacao đá", price: 20000 },

    // --- Trà sữa (M/L) ---
    { cat: "Trà sữa", name: "Trà sữa truyền thống (Size M)", price: 20000 },
    { cat: "Trà sữa", name: "Trà sữa truyền thống (Size L)", price: 25000 },
    { cat: "Trà sữa", name: "Trà sữa khoai môn (Size M)", price: 20000 },
    { cat: "Trà sữa", name: "Trà sữa khoai môn (Size L)", price: 25000 },
    { cat: "Trà sữa", name: "Trà sữa socola (Size M)", price: 20000 },
    { cat: "Trà sữa", name: "Trà sữa socola (Size L)", price: 25000 },
    { cat: "Trà sữa", name: "Chân châu đường đen (Size M)", price: 20000 },
    { cat: "Trà sữa", name: "Chân châu đường đen (Size L)", price: 25000 },
    { cat: "Trà sữa", name: "Trà đào (Size M)", price: 20000 },
    { cat: "Trà sữa", name: "Trà đào (Size L)", price: 25000 },
    { cat: "Trà sữa", name: "Trà đào cam sả (Size M)", price: 20000 },
    { cat: "Trà sữa", name: "Trà đào cam sả (Size L)", price: 25000 },
    { cat: "Trà sữa", name: "Trà vải (Size M)", price: 15000 },
    { cat: "Trà sữa", name: "Trà vải (Size L)", price: 20000 },
    { cat: "Trà sữa", name: "Trà gừng (Size M)", price: 15000 },
    { cat: "Trà sữa", name: "Trà gừng (Size L)", price: 20000 },
    { cat: "Trà sữa", name: "Trà lipton ngũ sắc (Size M)", price: 20000 },
    { cat: "Trà sữa", name: "Trà lipton ngũ sắc (Size L)", price: 25000 },
    { cat: "Trà sữa", name: "Trà thảo mộc (Size M)", price: 20000 },
    { cat: "Trà sữa", name: "Trà thảo mộc (Size L)", price: 25000 },
    { cat: "Trà sữa", name: "Trà tắc sỉ muối", price: 15000 },

    // --- Sinh tố ---
    { cat: "Sinh tố", name: "Sinh tố Dứa", price: 25000 },
    { cat: "Sinh tố", name: "Sinh tố Dâu", price: 25000 },
    { cat: "Sinh tố", name: "Sinh tố Nho", price: 25000 },
    { cat: "Sinh tố", name: "Sinh tố Kiwi", price: 25000 },
    { cat: "Sinh tố", name: "Sinh tố Việt quất", price: 25000 },
    { cat: "Sinh tố", name: "Sinh tố Xoài", price: 25000 },

    // --- Sữa chua ---
    { cat: "Sữa chua", name: "Sữa chua thuần khiết", price: 20000 },
    { cat: "Sữa chua", name: "Sữa chua Việt quất", price: 25000 },
    { cat: "Sữa chua", name: "Sữa chua Nho", price: 25000 },
    { cat: "Sữa chua", name: "Sữa chua Dâu", price: 25000 },
    { cat: "Sữa chua", name: "Sữa chua Kiwi", price: 25000 },
    { cat: "Sữa chua", name: "Sữa chua Xoài", price: 25000 },

    // --- Giải khát ---
    { cat: "Giải khát", name: "Bò húc", price: 18000 },
    { cat: "Giải khát", name: "Nước các loại", price: 15000 },
    { cat: "Giải khát", name: "Soda gum", price: 25000 },
    { cat: "Giải khát", name: "Cocktail", price: 15000 },

    // --- Topping ---
    { cat: "Topping", name: "Thêm topping", price: 5000 },
    { cat: "Topping", name: "Kem cheese", price: 5000 },
    { cat: "Topping", name: "Trứng nướng", price: 5000 },
    { cat: "Topping", name: "Kem lăng", price: 5000 },
    { cat: "Topping", name: "Kem lăng dừa", price: 15000 },
  ];

  localStorage.setItem("categories", JSON.stringify(categories));
  localStorage.setItem("menuItems", JSON.stringify(menuItems));
}

// =======================
// Phần code hiển thị menu, thêm bàn, giỏ hàng...
// =======================
// (Do file app.js của bạn rất dài, mình giữ nguyên toàn bộ logic cũ,
// chỉ thay đổi phần menu mặc định + format giá)

// Ví dụ hiển thị giá trong render:
function renderMenu(cat) {
  const list = document.getElementById("menu-list");
  list.innerHTML = "";
  menuItems.filter(i => i.cat === cat).forEach(item => {
    const row = document.createElement("div");
    row.className = "menu-row";
    row.innerHTML = `
      <div class="menu-left">
        <div class="menu-name">${item.name}</div>
        <div class="menu-price">${formatPrice(item.price)}</div>
      </div>
      <div class="qty-controls">
        <button onclick="addToCart('${item.name}')">+</button>
      </div>
    `;
    list.appendChild(row);
  });
}

// (các hàm khác: addToCart, renderCart, saveTable, openSettings... giữ nguyên)
