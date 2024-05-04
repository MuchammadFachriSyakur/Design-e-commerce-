// Navbar

const nav_bar = document.querySelector(".nav-bar .grd-1 .toggle");

nav_bar.addEventListener("click", e =>{
  const nav_list = document.querySelector(".nav-bar .grd-2");
  nav_list.classList.toggle("hidden");
});

// Navbar End Code

// FAQs
const allbuttonfaqs = document.querySelectorAll(".cardQuestion .grid1 .btn");

allbuttonfaqs.forEach((e)=>{
  e.addEventListener("click", e =>{
    e.target.parentElement.parentElement.querySelector(".deskripsi").classList.toggle("hidden");
  });
});
// FAQs End Code