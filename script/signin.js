const baseurl="https://babybloom.onrender.com/"


function storeDetails() {

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let obj={
        name,
        email,
        password,
        mobilenumber:mobile
    }
    //console.log(obj)
    fetch(`${baseurl}user/add`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(obj)
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        alert(data.msg)
        console.log(data)
        window.location.href = "login.html";
    })
    .catch((error)=>{
        console.log(error)
    })

}