// Variables

// Navigation links
const navLinks = document.querySelectorAll(".link");

// New Post types
const postList = document.querySelectorAll(".post-link");


// Remove active class
const removeActiveClass = () => {
  navLinks.forEach(item => {
    item.classList.remove("active");
  })
}


// Add active class to clicked nav items
navLinks.forEach(item => {
  item.addEventListener("click", () => {
    removeActiveClass();
    item.classList.add("active");

    // Remove notification counts
    if (item.id == "myNet") {
      document.querySelector(".mynet-count").
      style.display = "none";
    }
    if (item.id == "notif") {
      document.querySelector(".notification-count").
      style.display = "none";
    }
  })
})


// Give different colors to each post type icons
var count = 0;

for (var i = 0; i < postList.length; i++) {
  var colorList = ["blue", "green", "gold", "orange"];
  postList[i].classList.add(colorList[count]);
  count++;
}