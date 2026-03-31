const menuItems = [
  { name: "Start Page", url: "index.html" },
  { name: "Order", url: "HTML/order-form.html" },
  { name: "About Us", url: "HTML/about-us.html" },
];

const div = document.createElement("div");
div.className = "menu-bar-bottom";

let html = '<div class="menu-bar-bottom-sub-box">';

menuItems.forEach((item) => {
  html += `<a class="bottom-links" href="${item.url}">${item.name}</a>`;
});

html += "</div>";

div.innerHTML = html;
document.body.appendChild(div);
