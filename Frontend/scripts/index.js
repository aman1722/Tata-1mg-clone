// Slider Section starts from here

var i = 0;
var img = [];
var time = 10000;
img[0] = "https://onemg.gumlet.io/3d78d09f-014e-4d93-bf4b-5fa628593e73_1660114080.jpg?w=1053&h=250&format=auto";
img[1] = "https://onemg.gumlet.io/12fcc1ec-2c03-4df8-ad7d-70e8ffa205b7_1660813772.jpg?w=1053&h=250&format=auto";
img[2] = "https://onemg.gumlet.io/a_ignore,w_1053,h_250,c_fit,q_auto,f_auto/wf8dttdlqq5ui4fbcjba.png";
img[3] = "https://onemg.gumlet.io/fc95bc88-baac-42d6-be89-4e00e95107db_1660816262.jpg?w=853&h=200&format=auto"
img[4] = "https://cdn0.desidime.com/topics/photos/1337128/original/znor02xj8j1abqeikksv.png?1629223821";
img[5] = "https://onemg.gumlet.io/40f9685f-0900-415b-8396-6776ee575041_1660824542.jpg?w=853&h=200&format=auto";
function changeImage(){

  if(i < img.length){
    document.slide.src = img[i];
    i++;
  } else {
    i=0;
  }

  setTimeout("changeImage()" , time);
}

window.onload = changeImage;
// Slider section ends here
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 7,
  spaceBetween: 0,
 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
  0: {
      slidesPerView: 1,
  },
  520: {
      slidesPerView: 4,
  },
  950: {
      slidesPerView: 7,
  },
},
});
var swiper = new Swiper(".A-Swiper", {
  slidesPerView: 7,
  spaceBetween: 0,
 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
  0: {
      slidesPerView: 1,
  },
  520: {
      slidesPerView: 3,
  },
  950: {
      slidesPerView: 4,
  },
},
});





var swiper = new Swiper(".pop-Swiper", {
  slidesPerView: 6,
  spaceBetween: 0,
 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
  0: {
      slidesPerView: 1,
  },
  520: {
      slidesPerView: 3,
  },
  950: {
      slidesPerView: 6,
  },
},
});

// Name Section.....

let val = localStorage.getItem("mobile_number") || 2;

if(val.length >= 5){
  document.getElementById("login_text_js").innerHTML = `<i class="fa-solid fa-user"></i>`;
  document.getElementById("login_text_js1").innerText = "My Profile";
  document.getElementById("login_text_js2").innerText = " ";
  document.getElementById("signup").innerHTML = `<b>PROFILE</b>`;

  document.getElementById("signup").addEventListener("click" , function(){
    window.location.href = "index.html";
  });

  
}


let cartArrayS1 = JSON.parse(localStorage.getItem("cartArrayS1")) || [];

console.log(cartArrayS1.length);

  if(cartArrayS1.length == 0){
    (document.querySelector("#cartItembox")).style.display = "none";
  }
  else{
  (document.querySelector("#cartItembox")).style.display = "block";
  (document.querySelector("#cartItembox")).innerText = cartArrayS1.length;
  }

  document.getElementById("red-cart").addEventListener("click" , di);

  function di(){
    window.location.href = "cart.html";
  }

// let val = document.getElementById("login_text_js")