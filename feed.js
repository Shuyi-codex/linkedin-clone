// Variables

// Navigation links
const navLinks = document.querySelectorAll(".link");

// New Post types
const postList = document.querySelectorAll(".post-link");

// New Post Button
const newPost = document.querySelector("#newPost");

// Modal New Post
const postBox = document.querySelector(".post-box");

const postArea = document.querySelector("#postArea");

// Close Icon
const closeIcon = document.querySelector(".close-btn");

// xxxxxxxxx Variables End xxxxxxxxxx


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

// OPEN NEW POST MODAL
newPost.addEventListener("click", () => {
  postBox.style.display = "grid";
  if (postBox.style.display == "grid") {
    // disable background scroll on modal open
    document.body.style.overflowY = "hidden";
  }
})

// CLOSE MODAL
closeIcon.addEventListener("click", () => {
  postBox.style.display = "none";
  // Activate the scroll button on modal close
  document.body.style.overflowY = "scroll";
})

// Increase Text area size dynamically
postArea.addEventListener("input", () => {
  postArea.style.height = "auto";
  postArea.style.height = (postArea.scrollHeight) + "px";
  postArea.style.maxHeight = "256px";
})