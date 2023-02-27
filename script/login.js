function checkcredentials() {
    console.log("Shashwat")

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    console.log(email, password);

    let arr = JSON.parse(localStorage.getItem("login-details"));

    for (var i = 0; i < arr.length; i++) {

        if (arr[i].email === email && arr[i].password === password || arr[i].mobile == email && arr[i].password == password) {
            window.location.href = "../index.html"
            return

        }
    }
    alert("invalid credentials");

}