


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
function changeImage() {

  if (i < img.length) {
    document.slide.src = img[i];
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImage()", time);
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
  breakpoints: {
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
  breakpoints: {
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
  breakpoints: {
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



async function display() {
  try {

    let res = await fetch("https://nice-cyan-pike-vest.cyclic.app/products/?page=1&limit=7")

    let data = await res.json();
    console.log(data)

    displaymg(data);
  }
  catch (e) {
    console.log("err:", e);
  }
}
display();

function displaymg(mg_data) {

  mg_data.map(function (ele) {
    let div1 = document.createElement("div");
    let img = document.createElement("img")
    img.setAttribute("src", ele.image);
    img.setAttribute("class", "proClass")
    let name_div = document.createElement("div")
    name_div.setAttribute("class", "name_div");
    let name = document.createElement("h3");
    name.textContent = ele.name;
    name_div.append(name)
    name.setAttribute("class", "proname");
    let dis = document.createElement("p");
    dis.textContent = ele.Description;
    dis.setAttribute("class", "quantity");
    let rating_div = document.createElement("div");
    rating_div.setAttribute("class", "div5")
    let rating = document.createElement("p");
    rating.textContent = `${ele.rating}⭐`;
    rating.setAttribute("class", "rating");
    rating_div.append(rating);
    let mrp = document.createElement("p");
    let span2 = document.createElement("span");
    span2.textContent = `MRP :- ₹${ele.price}`;
    span2.setAttribute("class", "mrp");

    mrp.append(span2);


    div1.append(img, name_div, dis, rating_div, mrp);

    document.querySelector("#fetch").append(div1);

    let data_send = {
      image: ele.image,
      name: ele.name,
      Description: ele.Description,
      rating: ele.rating,
      mrp: ele.price,
      discount:15,
      quantity:1
    }
    div1.onclick = () => {
      showproduct(data_send)
    }
  });
}
function showproduct(data) {
  localStorage.setItem('mg_base', JSON.stringify(data));
  window.location.href = "productPage.html"
}
const cartbtn = document.getElementById("red-cart")

  cartbtn.addEventListener("click",()=>{
  if(token){
    window.location.href="cart.html"
  }else{
    alert("Please Login fisrt!")
  }
  })

cartCount = document.getElementById("cartItembox");
let cartarr =  JSON.parse(localStorage.getItem("cartArrayS1")) || null;

if(cartarr){
  cartCount.style.display="block"
  cartCount.innerText=cartarr.length;
}else{
  cartCount.style.display="none"
}

