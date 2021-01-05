const linkPageElement = document.querySelector(
  ".title_area_wrapper .link_page_box"
);

const linkNav = document.querySelector(".link_box .link_nav");

linkNav.addEventListener("click", function (e) {
  e.preventDefault();
  linkPageElement.style.display = "flex";
});

console.log("linkPageElenment", linkPageElement);
console.log("linkNav", linkNav);
