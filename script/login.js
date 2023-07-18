const baseurl="https://babybloom.onrender.com/"

function checkcredentials() {
    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let obj={
        email,
        password
    }

    console.log(obj)

    fetch(`${baseurl}user/login`,{
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
        if(data.token){
            localStorage.setItem("userdetails",JSON.stringify(data))
            window.location.href="product.html"
        }
        console.log(data)
        
    })
    .catch((error)=>{
        console.log(error)
    })

    

}