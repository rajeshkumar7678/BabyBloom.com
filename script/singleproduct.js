let usersURL = `https://63c69db7dcdc478e15c55914.mockapi.io/UsersAPI/`
// {loginstaus : true , UserID : 2}

// let loggedINuserId = 2 || null;

let singleprodData = JSON.parse(localStorage.getItem("singleProduct"));

let logStatus = JSON.parse(localStorage.getItem("loginstatus")) || null;

let recentVisited = JSON.parse(localStorage.getItem("recentStack")) || [];

console.log(recentVisited);
let titlt = document.getElementById("titled");



var userCart = null;


// swal("")

// circleColor append color here

let upperMainC = document.getElementById("upperMainC") // Append MainCategory
let upperSubC = document.getElementById("upperSubC") // Append SubCategory 
let upperTitle = document.getElementById("upperTitle") // Append Title 
let image1 = document.getElementById("image1") // Append image1 
let image2 = document.getElementById("image2") // Append image2 
let image3 = document.getElementById("image3") // Append image3 
let image4 = document.getElementById("image4") // Append image4 
let currimage = document.getElementById("currimage") // Append currimage
let description = document.getElementById("description") // Append description 
let color = document.getElementById("color") // Append color 
let title = document.getElementById("title") // Append title 
let price = document.getElementById("price") // Append price
let circleColor = document.getElementById("circleColor") // Append color
let colorincircle = document.getElementById("colorincircle");

let sizeValue = document.getElementById("sizeValue") // Checking if value is not empty
let AddtoBag = document.getElementById("AddtoBag") // Add event listner to post in user chart and checl data in cart


window.addEventListener("load",()=>{
    // console.log(singleprodData)
    upperMainC.innerText = singleprodData.MainCategory ;
    upperSubC.innerText = singleprodData.SubCategory;
    upperTitle.innerText = singleprodData.Title;
    image1.setAttribute("src",`${singleprodData.Image1}`);
    image1.setAttribute("data-img",`${singleprodData.Image1}`);
    image2.setAttribute("src",`${singleprodData.Image2}`);
    image2.setAttribute("data-img",`${singleprodData.Image2}`);
    image3.setAttribute("src",`${singleprodData.Image3}`);
    image3.setAttribute("data-img",`${singleprodData.Image3}`);
    image4.setAttribute("src",`${singleprodData.Image4}`);
    image4.setAttribute("data-img",`${singleprodData.Image4}`);
    currimage.setAttribute("src",`${singleprodData.Image1}`);
    description.innerText = singleprodData.Description;
    color.innerText = singleprodData.color;
    let col = (singleprodData.color).toLowerCase();
    colorincircle.style.backgroundColor = `${col}`;
    
    title.innerText = singleprodData.Title;
    titlt.innerText = `Buy ${singleprodData.Title}`
    price.innerText = singleprodData.Price;
    circleColor.innerText = singleprodData.color;
    
})



let imageSelect = document.querySelectorAll(".div1Images");
imageSelect.forEach((ele,ind)=>{
    ele.addEventListener("click",(e)=>{
        let attr = e.target.dataset.img;
        currimage.setAttribute("src",`${attr}}`);
    })
})


AddtoBag.addEventListener("click",()=>{

    let sizeV = sizeValue.value;
    if( !logStatus ||   logStatus.status === false ){
        // alert("Kindly Sign In first to add In the Cart");
        Swal.fire({
            title: 'Kindly Sign In first to add In the Cart',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        // window.location.href = "/signin.html"
    }else if(sizeV===""){
        Swal.fire({
            title: 'Plese Select the Size',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        // alert("Plese Select the Size")
    }else{
        // alert(sizeV)
        let obj = {};
        obj.id = singleprodData.__id;
        obj.title = singleprodData.Title;
        obj.image = singleprodData.Image1;
        obj.price = singleprodData.Price;
        obj.size = sizeV;
        obj.color = singleprodData.color;

        // alert(JSON.stringify(obj))

        fetch(`${usersURL}${logStatus.id}`)
        .then((res)=>{
            return res.json();
        })
        .then((UserData)=>{
            // console.log(UserData);
            let reqData = UserData;
            let c = 0 ;
            for(ele of reqData.cart){
                // console.log(ele)
                if(ele.id === obj.id && ele.size === obj.size){
                    c++;
                    break;
                }
            }
            
            if(c===0){
                // alert("Workable")
                reqData.cart.push(obj);
                
                fetch(`${usersURL}${logStatus.id}`,{
                    method: "PUT",
                    headers: {'Content-Type':'application/JSON'},
                    body:JSON.stringify(reqData)
                })
                .then((res)=>{
                    return res.json();
                })
                .then((UserData)=>{
                    // console.log(UserData);
                })
                
                // alert("Product Added in the Bag");
                Swal.fire({
                    title: 'Product Added in the Bag',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })

            }else{
                // alert("Product Already In the Bag")
                Swal.fire({
                    title: 'Product Already In the Bag',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
            }

            // reqData.push(1)
            // console.log(reqData)
        })

    }
})
