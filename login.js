function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "user" && password == "123456"){
        document.location.href = "/access.html";

        }
      else{
        alert("Неправильный логин или пароль");
        }
      return false;
      }