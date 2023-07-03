const bundle = document.querySelectorAll(".bundle");
const prev = document.querySelector(".scroll-left");
const next = document.querySelector(".scroll-right");


// Select Button
const modalButton = document.querySelector("#modalButton");

// Modal
const modal = document.querySelector("#selectModal");

var currentIndex = 1;
displaySlides(currentIndex);

function setSlides(num) {
  displaySlides(currentIndex += num);
}

function displaySlides(num) {
  var x;
  var slides = document.getElementsByClassName("bundle");


  if (num > slides.length) {
    currentIndex = 1
  }
  if (num < 1) {
    currentIndex = slides.length
  }
  for (x=0; x < slides.length; x++) {
    slides[x].style.display = "none";

  }
  slides[currentIndex - 1].style.display = "grid";
}


// OPEN SELECT OPTION MODAL when Button is clicked
const openModal = (e) => {
  // modal.style.display = "block";
  modal.classList.add("open");
  e.stopPropagation();
}

modalButton.addEventListener("click", openModal);

// CLOSE MODAL when you click anywhere else on the screen
const closeModal = (e) => {
  if (e.target.classList.contains("container")) {
    console.log(e);
    // modal.style.display = "none";
    modal.classList.remove("open");
  }
  if (e.target.matches("button")) {
    modal.classList.remove("open");
  }
}
// const sixthSec = document.querySelector("body");
// console.log(sixthSec);
document.addEventListener("click", closeModal);

// window.onclick = function(e) {
//   if (e.target == modal) {
//     modal.style.display = "none";
//   };
// }

// CLOSE MODAL when you click on the button
// const closeOnBtnClick = () => {
//   if (modalButton.classList.contains("open")) {
//     modal.style.display = "none";
//     modal.classList.remove("open");
//   }
// }




// console.log(modal)

// console.log(prev);


  // if (bundle[0]) {
  //     prev.style.display = "none";
  // }
  // if (bundle[2]) {
  //     next.style.display = "none";
  // }

  // console.log(bundle[0])

// SLIDER
// const fifthBundle = document.querySelectorAll(".bundle");
// const leftScroll = document.querySelector("scroll-left");
// const rightScroll = document.querySelector("scroll-right");

// // Active element
// const changeActiveItem = () => {
//   fifthBundle.forEach(item => {
//     item.classList.remove("active");
//   })
// }

// fifthBundle.forEach(item => {
//   item.addEventListener("click", () => {
//     changeActiveItem();
//     item
//   } )
//   if (fifthBundle[0].classList.includes("active")) {
//     leftScroll.style.display = "none";
//   } else if (fifthBundle[-1].includes("active")) {
//     rightScroll.style.display = "none";
//   }
// })

// Hide left scroll on first item
// if (fifthBundle[0].classList.includes("active")) {
//   leftScroll.style.display = "none";
// } else if (fifthBundle[-1].includes("active")) {
//   rightScroll.style.display = "none";
// }

// ************* FEED.html **************