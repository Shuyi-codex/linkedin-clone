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

// Hidden items
const hiddenItems = document.querySelectorAll(".hiddendown");

// Button controls for hidden items
const showMoreBtn = document.querySelector(".show-more");
const showLessBtn = document.querySelector(".show-less");

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
  postArea.focus();
  if (postBox.style.display == "grid") {
    // disable background scroll on modal open
    document.body.style.overflowY = "hidden";
  }
})

// CLOSE MODAL
const closePostModal = (e) => {
  if (e.target.classList.contains("post-box") || e.target.classList.contains("close-btn")) {
    postBox.style.display = "none";

    // Activate the scroll button on modal close
    document.body.style.overflowY = "scroll";
  }

}

closeIcon.addEventListener("click", closePostModal);
postBox.addEventListener("click", closePostModal);

// closeIcon.addEventListener("click", () => {
//   postBox.style.display = "none";
//   // Activate the scroll button on modal close
//   document.body.style.overflowY = "scroll";
// })

// Increase Text area size dynamically
postArea.addEventListener("input", () => {
  postArea.style.height = "auto";
  postArea.style.height = (postArea.scrollHeight) + "px";
  postArea.style.maxHeight = "256px";
})

// Show hidden items

if (showMoreBtn.style.display !== "none") {
  showMoreBtn.addEventListener("click", () => {
    hiddenItems.forEach(item => {
      item.style.display = "grid";
      showMoreBtn.classList.add("hide-now");
      showLessBtn.classList.remove("hide-now");
    });
})
}

// Hide shown hidden items
showLessBtn.addEventListener("click", () => {
  hiddenItems.forEach(item => {
    item.style.display = "none";
    showMoreBtn.classList.remove("hide-now");
    showLessBtn.classList.add("hide-now");
    window.scrollTo(0, 0);
  });
})