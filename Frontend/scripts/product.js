
/* ProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProduct  */
const jwttoken = localStorage.getItem("token")
{
    //filter content
    // let sBrandName = ["sdc","we","asxs","asd","asx","req"];
    // let sBrandNumberOfItems = [12,5,4,5,8,5];

    let sBrandAndQuantity = [
        {
            sBrand: "Bjain",
            sQuantity: 13,
        },

        {
            sBrand: "HealthVit",
            sQuantity: 10,
        },

        {
            sBrand: "SBL",
            sQuantity: 8,
        },

        {
            sBrand: "JJW",
            sQuantity: 7,
        },

        {
            sBrand: "Urban",
            sQuantity: 6,
        },

        {
            sBrand: "Tata",
            sQuantity: 6,
        },

        {
            sBrand: "Yuvika",
            sQuantity: 5,
        },

        {
            sBrand: "Mederma",
            sQuantity: 5,
        },

        {
            sBrand: "WellsPro",
            sQuantity: 5,
        },

        {
            sBrand: "Dabur",
            sQuantity: 5,
        },

        {
            sBrand: "Tynor",
            sQuantity: 4,
        },

        {
            sBrand: "Baidyanath",
            sQuantity: 4,
        },

        {
            sBrand: "Bakson's",
            sQuantity: 4,
        },

        {
            sBrand: "Vitaminnica",
            sQuantity: 4,
        },

        {
            sBrand: "Vissco",
            sQuantity: 3,
        },

        {
            sBrand: "Klar",
            sQuantity: 3,
        },

        {
            sBrand: "Moiz",
            sQuantity: 3,
        },

        {
            sBrand: "ADEL",
            sQuantity: 3,
        },

        {
            sBrand: "Dehlvi",
            sQuantity: 3,
        },

        {
            sBrand: "Cipladine",
            sQuantity: 3,
        },

        {
            sBrand: "Pharmtech",
            sQuantity: 3,
        }

    ];

    let sdiscount = [
        {
            percent: "Less than 10%",
            squantity2: 55
        },

        {
            percent: "10% and above",
            squantity2: 35
        },

        {
            percent: "20% and above",
            squantity2: 15
        },

        {
            percent: "30% and above",
            squantity2: 24
        },

    ];


    // change the icon from - to plus and vice-versa
    // change caret on click
    document.getElementById("siconmin").addEventListener("click", minplus1);

    function minplus1() {
        let sclassname = document.getElementById("siconmin").className;
        if (sclassname == "fa-solid fa-minus") {
            document.getElementById("siconmin").className = "fa-light fa-plus";
            document.getElementById("mincontent1").style.display = "none";
        }
        else {
            document.getElementById("siconmin").className = "fa-solid fa-minus";
            document.getElementById("mincontent1").style.display = "block";
        }

    };



    sdisplay1(sBrandAndQuantity);
    sdisplay2(sBrandAndQuantity);
    sNameNumberDiscount(sdiscount);
    sdisplay3(sBrandAndQuantity);

    function sdisplay1(array) {
        array.map(function (obj, index, array) {
            let div1 = document.createElement("div");

            let div2 = document.createElement("div");
            let input1 = document.createElement("input");
            input1.setAttribute("type", "checkbox");
            input1.setAttribute("id", obj.sBrand);
            input1.setAttribute("class", "sInput1Forcss");
            input1.setAttribute("name", obj.sBrand);
            input1.setAttribute("value", obj.sBrand);
            let label1 = document.createElement("label");
            label1.innerText = obj.sBrand;
            label1.setAttribute("for", obj.sBrand);
            label1.setAttribute("class", "sLabel1Forcss");
            label1.setAttribute("id", obj.sBrand);

            let div3 = document.createElement("div");
            let span1 = document.createElement("span");
            span1.innerText = obj.sQuantity;

            //appending
            div2.append(input1, label1);
            div3.append(span1);

            div1.append(div2, div3);

            document.getElementById("sNameNumber1").append(div1);
        });
    };

    function sdisplay2(array) {
        array.map(function (obj, index, array) {
            let div1 = document.createElement("div");

            let div2 = document.createElement("div");
            let input1 = document.createElement("input");
            input1.setAttribute("type", "checkbox");
            input1.setAttribute("id", obj.sBrand);
            input1.setAttribute("class", "sInput1Forcss");
            input1.setAttribute("name", obj.sBrand);
            input1.setAttribute("value", obj.sBrand);
            let label1 = document.createElement("label");
            label1.innerText = obj.sBrand;
            label1.setAttribute("for", obj.sBrand);
            label1.setAttribute("class", "sLabel1Forcss");
            label1.setAttribute("id", obj.sBrand);

            let div3 = document.createElement("div");
            let span1 = document.createElement("span");
            span1.innerText = obj.sQuantity;

            //appending
            div2.append(input1, label1);
            div3.append(span1);

            div1.append(div2, div3);

            document.getElementById("sNameNumber2").append(div1);

        });
    };


    function sNameNumberDiscount(array) {
        array.map(function (obj, index, array) {
            let div1 = document.createElement("div");
            div1.setAttribute("id", "indiose1");

            let div2 = document.createElement("div");
            let input1 = document.createElement("input");
            input1.setAttribute("type", "checkbox");
            input1.setAttribute("id", obj.percent);
            input1.setAttribute("class", "sInput1Forcss");
            input1.setAttribute("name", obj.percent);
            input1.setAttribute("value", obj.percent);
            let label1 = document.createElement("label");
            label1.innerText = obj.percent;
            label1.setAttribute("for", obj.percent);
            label1.setAttribute("class", "sLabel1Forcss");
            label1.setAttribute("id", obj.sBrand);

            let div3 = document.createElement("div");
            let span1 = document.createElement("span");
            span1.innerText = obj.squantity2;

            //appending
            div2.append(input1, label1);
            div3.append(span1);

            div1.append(div2, div3);

            document.getElementById("sNameNumberDiscount").append(div1);

        });
    };


    function sdisplay3(array) {
        array.map(function (obj, index, array) {
            let div1 = document.createElement("div");

            let div2 = document.createElement("div");
            let input1 = document.createElement("input");
            input1.setAttribute("type", "checkbox");
            input1.setAttribute("id", obj.sBrand);
            input1.setAttribute("class", "sInput1Forcss");
            input1.setAttribute("name", obj.sBrand);
            input1.setAttribute("value", obj.sBrand);
            let label1 = document.createElement("label");
            label1.innerText = obj.sBrand;
            label1.setAttribute("for", obj.sBrand);
            label1.setAttribute("class", "sLabel1Forcss");
            label1.setAttribute("id", obj.sBrand);

            let div3 = document.createElement("div");
            let span1 = document.createElement("span");
            span1.innerText = obj.sQuantity;

            //appending
            div2.append(input1, label1);
            div3.append(span1);

            div1.append(div2, div3);

            document.getElementById("sNameNumber3").append(div1);

        });
    };




    // change caret on click
    document.getElementById("srevelence").addEventListener("click", caretchange);
    document.getElementById("scaretdown").addEventListener("click", caretchange);

    function caretchange() {
        let sclassname = document.getElementById("scaretdown").className;
        if (sclassname == "fa-solid fa-caret-down") {
            document.getElementById("scaretdown").className = "fa-solid fa-caret-up";
            document.getElementById("sLater1").style.display = "block";
        }
        else {
            document.getElementById("scaretdown").className = "fa-solid fa-caret-down";
            document.getElementById("sLater1").style.display = "none";
        }

    };








    // array by me





   

    fetchandrenderdata();




    function scardDisplay1(array) {
        document.getElementById("sfinalcard1id").innerHTML = ""
        array.map(function (obj, index, array) {

            let div1 = document.createElement("div");///
            div1.setAttribute("id", "sky1");

            // let divlink = document.createElement("div");///
            // divlink.style.backgroundColor = "green"

            let a1 = document.createElement("a");
            a1.setAttribute("href", "#");
            a1.style.textDecoration = "none";


            let div2 = document.createElement("div");//
            div2.setAttribute("id", "sky2");
            let img1 = document.createElement("img");
            img1.setAttribute("id", "sky2i");
            img1.setAttribute("src", obj.image);
            img1.setAttribute("alt", "product image");
            div2.append(img1);


            let div3 = document.createElement("div");//
            let p1 = document.createElement("p");
            p1.setAttribute("id", "sky3");
            p1.innerText = obj.name;
            div3.append(p1);


            let div3i = document.createElement("div");//
            let p2 = document.createElement("p");
            p2.setAttribute("id", "sky4");
            p2.innerText = "bottle of 10 tablets";
            div3i.append(p2);


            let div4 = document.createElement("div");//
            div4.setAttribute("id", "skym5iii");

            let span1 = document.createElement("span");
            span1.setAttribute("id", "skym5");
            let span2 = document.createElement("span");
            span2.setAttribute("id", "sky5");
            span2.innerText = obj.rating;
            let i1 = document.createElement("i");
            i1.setAttribute("class", "fa-solid fa-star")
            span1.append(span2, i1);

            let span3 = document.createElement("span");
            span3.setAttribute("id", "skym6");
            span3.innerText = "25 ratings";

            div4.append(span1, span3);


            let div5 = document.createElement("div");//

            let span5 = document.createElement("span");
            span5.setAttribute("id", "sky7");
            span5.innerText = "MRP";
            let i2 = document.createElement("i");
            i2.setAttribute("id", "sky7i");
            i2.setAttribute("class", "fa-solid fa-indian-rupee-sign")
            let span6 = document.createElement("span");
            span6.setAttribute("id", "skym7");
            span6.innerText = obj.price;
            span5.append(i2, span6);

            let span7 = document.createElement("span");
            span7.setAttribute("id", "sky8i");
            span7.innerText = "15% OFF";

            div5.append(span5, span7);


            let div6 = document.createElement("div");//
            div6.setAttribute("class", "sky9m");

            let p3 = document.createElement("p");
            let i3 = document.createElement("i");
            i3.setAttribute("class", "fa-solid fa-indian-rupee-sign");
            let span9 = document.createElement("span");
            span9.setAttribute("id", "sky9")
            span9.innerText = obj.price;
            p3.append(i3, span9);

            let p4 = document.createElement("p");
            p4.setAttribute("id", "sky10");
            p4.innerText = "ADD";
            div6.append(p3, p4);

            //----------- for add to cart
            p4.addEventListener("click", function () { saddtocart1(obj, index, array) });
            //----------- for add to cart

            let div7 = document.createElement("div");
            div7.innerText = "See More detalis..."
            div7.style.textDecoration = "underline"
            div7.addEventListener("click", () => {
                localStorage.setItem('mg_base', JSON.stringify(obj));
                setTimeout(() => {
                    window.location.href = "productPage.html"
                }, 500)

            })


            a1.append(div2, div3, div3i, div4, div5);
            // divlink.append(div2, div3, div4, div5, div6 );
            // a1.append(divlink);
            // div1.append(a1);

            div1.append(a1, div6, div7);
            // div1.append(div2, div3, div3i, div4, div5, div6);

            document.getElementById("sfinalcard1id").append(div1);



        });
    }




    let cartArrayS1 = JSON.parse(localStorage.getItem("cartArrayS1")) || [];

    //-------------------add to cart function
    function saddtocart1(obj, index, array) {
        let addedItemDetails = {
            name: obj.name,
            quantity: 1,
            quantity_of_single: obj.quantity,
            rating: obj.rating,
            price: obj.strikedoffprice,
            mrp: obj.price,
        };

        cartArrayS1.push(addedItemDetails);
        localStorage.setItem("cartArrayS1", JSON.stringify(cartArrayS1));
        alert("Product Added to cart")
        location.reload();
    }



    // function to pop the nubmer of items into the cart
    //# id = "cartItembox"  line 88
    // if (cartArrayS1.length == 0) {
    //     (document.querySelector("#cartItembox")).style.display = "none";
    // }
    // else {
    //     (document.querySelector("#cartItembox")).style.display = "block";
    //     (document.querySelector("#cartItembox")).innerText = cartArrayS1.length;
    // }


    //-------XXXXXXXXX------add to cart function





    // close the box as we click
    document.getElementById("sLater1").addEventListener("click", caretchange);


    // SORT By rating

    function sortByRating(arr) {
        arr.sort((a, b) => a.rating - b.rating)
        scardDisplay1(arr)
        console.log("hiii")
    };



    // SORT By LTH

    function priceSortlth(arr) {
        arr.sort((a, b) => a.price - b.price)
        scardDisplay1(arr)
    };



    // SORT By HTL

    function priceSorthtl(arr) {
        arr.sort((a, b) => b.price - a.price)
        scardDisplay1(arr)
    };






    // sort by brand CHECKBOX

    //   // document.getElementById("Tata 1mg").addEventListener("click", soBybrant1);
    //   const checkbox1 = document.getElementById("Tata 1mg");
    //   checkbox1.addEventListener('change', (event) => {
    //       document.querySelector("#sfinalcard1id").innerText = "";
    //       if(event.currentTarget.checked) {

    //           scardDisplay1(tata1mg);
    //       }
    //       else {
    //           scardDisplay1(sallpdt1);
    //       }
    //   });


    //   const checkbox2 = document.getElementById("Carbamide Forte");
    //   checkbox2.addEventListener('change', (event) => {
    //       document.querySelector("#sfinalcard1id").innerText = "";
    //       if(event.currentTarget.checked) {

    //           scardDisplay1(carbamide);
    //       }
    //       else {
    //           scardDisplay1(sallpdt1);
    //       }
    //   });

    //   const checkbox3 = document.getElementById("Zingavita");
    //   checkbox3.addEventListener('change', (event) => {
    //       document.querySelector("#sfinalcard1id").innerText = "";
    //       if(event.currentTarget.checked) {

    //           scardDisplay1(zingavita);
    //       }
    //       else {
    //           scardDisplay1(sallpdt1);
    //       }
    //   });

    //   const checkbox4 = document.getElementById("HealthVit");
    //   checkbox4.addEventListener('change', (event) => {
    //       document.querySelector("#sfinalcard1id").innerText = "";
    //       if(event.currentTarget.checked) {

    //           scardDisplay1(healthvit);
    //       }
    //       else {
    //           scardDisplay1(sallpdt1);
    //       }
    //   });

    //   const checkbox5 = document.getElementById("GNC");
    //   checkbox5.addEventListener('change', (event) => {
    //       document.querySelector("#sfinalcard1id").innerText = "";
    //       if(event.currentTarget.checked) {

    //           scardDisplay1(gnc);
    //       }
    //       else {
    //           scardDisplay1(sallpdt1);
    //       }
    //   });

    //   const checkbox6 = document.getElementById("HealthKart");
    //   checkbox6.addEventListener('change', (event) => {
    //       document.querySelector("#sfinalcard1id").innerText = "";
    //       if(event.currentTarget.checked) {

    //           scardDisplay1(healthKart);
    //       }
    //       else {
    //           scardDisplay1(sallpdt1);
    //       }
    //   });

    //   const checkbox7 = document.getElementById("Adorreal");
    //   checkbox7.addEventListener('change', (event) => {
    //       document.querySelector("#sfinalcard1id").innerText = "";
    //       if(event.currentTarget.checked) {

    //           scardDisplay1(adorreal);
    //       }
    //       else {
    //           scardDisplay1(sallpdt1);
    //       }
    //   });

    //   const checkbox8 = document.getElementById("Redivit");
    //   checkbox8.addEventListener('change', (event) => {
    //       document.querySelector("#sfinalcard1id").innerText = "";
    //       if(event.currentTarget.checked) {

    //           scardDisplay1(redivit);
    //       }
    //       else{
    //           scardDisplay1(sallpdt1);
    //       }
    //   });



    // Sort by discount percent like greater then 10% or 20%...
    //   let whatdiscount = 0;

    //   let checkboxdis1  = document.getElementById("Less than 10%");
    //   checkboxdis1.addEventListener('change', (event) => {
    //     document.querySelector("#sfinalcard1id").innerText = "";
    //     if(event.currentTarget.checked) {

    //       sideFilterDiscount(9);
    //     }
    //     else{
    //         scardDisplay1(sallpdt1);
    //     }
    //   });


    //   let checkboxdis2  = document.getElementById("10% and above");
    //   checkboxdis2.addEventListener('change', (event) => {
    //     document.querySelector("#sfinalcard1id").innerText = "";
    //     if(event.currentTarget.checked) {

    //       sideFilterDiscount(10);
    //     }
    //     else{
    //         scardDisplay1(sallpdt1);
    //     }
    //   });


    //   let checkboxdis3  = document.getElementById("20% and above");
    //   checkboxdis3.addEventListener('change', (event) => {
    //     document.querySelector("#sfinalcard1id").innerText = "";
    //     if(event.currentTarget.checked) {

    //       sideFilterDiscount(20);
    //     }
    //     else{
    //         scardDisplay1(sallpdt1);
    //     }
    //   });


    //   let checkboxdis4  = document.getElementById("30% and above");
    //   checkboxdis4.addEventListener('change', (event) => {
    //     document.querySelector("#sfinalcard1id").innerText = "";
    //     if(event.currentTarget.checked) {

    //       sideFilterDiscount(30);
    //     }
    //     else{
    //         scardDisplay1(sallpdt1);
    //     }
    //   });



    //   function sideFilterDiscount(whatdiscount){
    //     document.querySelector("#sfinalcard1id").innerText = "";
    //     let sallpdt2 = sallpdt1.filter(function(obj){
    //       if(whatdiscount <= 9){
    //         if(Number(obj.disscount_percent) < whatdiscount){
    //           return 1;
    //         }
    //         else {
    //           return 0;
    //         }
    //         return 0;

    //       }
    //       else{
    //         if(Number(obj.disscount_percent) > whatdiscount){
    //           return 1;
    //         }
    //         else {
    //           return 0;
    //         }
    //         return 0;

    //       }

    //     });
    //     scardDisplay1(sallpdt2);
    //   };

    //------------------------------------------------------------------



}
let buttonSection = document.getElementById("spgtionid");
//Pagination
function paginationBtn(page) {
    let btn_arr = [];
    for (let i = 1; i <= page; i++) {
        btn_arr.push(`
          <button class="pagination-button" data-page-number=${i}>${i}</button>
          `)
    }
    buttonSection.innerHTML = btn_arr.join("");

    const all_btn = document.querySelectorAll("#spgtionid button");
    console.log(all_btn);


    for (let btn of all_btn) {
        btn.addEventListener("click", (e) => {
            console.log(e.target.dataset.pageNumber);
            fetchandrenderdata(e.target.dataset.pageNumber);
        })
    }
}



async function fetchandrenderdata(page = 1) {
    
        const count = await fetch(`https://nice-cyan-pike-vest.cyclic.app/products/`)
        const procount = await count.json();
        const res = await fetch(`https://nice-cyan-pike-vest.cyclic.app/products/${page}`)
        // console.log(res.headers.get("x-Total-Count"))
        const totalItem = procount.length;
        console.log(totalItem)
        const totalPages = Math.ceil(totalItem/16);
    
    
        const data = await res.json();
    
    
        scardDisplay1(data)
        paginationBtn(totalPages);
        document.getElementById("srating").addEventListener("click", () => {
            console.log("hii")
            sortByRating(data);
        });
        document.getElementById("slth").addEventListener("click", () => {
            console.log("kya hai be!")
            priceSortlth(data);
        });
        document.getElementById("shtl").addEventListener("click", () => {
            console.log("isko bhi dikkat h!")
            priceSorthtl(data);
        });
   

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
 

}
/* ProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProduct  */
