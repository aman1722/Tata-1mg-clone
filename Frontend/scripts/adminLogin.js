// document.getElementById("login_span").addEventListener("click", function () {
//     window.location.href = "signup.html";
//   });

 
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    console.log(email,password)
    if(email=="admin@wecare.com" && password == "admin"){
        alert("Welcome Admin!")
        window.location.href="admin.html";
    }else{
        alert("Wrong admin details!")
    }
    // document.getElementById("error").textContent = "Invalid email address.";
  });
  