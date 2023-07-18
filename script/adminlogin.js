const baseurl="https://babybloom.onrender.com/"

const form = document.querySelector("form");
eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault();

    let obj={
        email:eInput.value,
        password:pInput.value
    }
    console.log(obj)

    fetch(`${baseurl}product/adminlogin`,{
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
        console.log(data)
        alert(data.msg)
        if(data.token){
            localStorage.setItem("userdetails",JSON.stringify(data))
            window.location.href="admin.html"
        }
        console.log(data)
        
    })
    .catch((error)=>{
        console.log(error)
    })


}