let show=document.getElementById("popupp");
let btn = document.getElementById("btun");
let close =document.getElementById("close-btn");
let appendaddress = document.getElementById("append-address");




btn.addEventListener(("click"), ()=>{
    show.style.display = "flex";


    let inputbtns=document.querySelectorAll("#saveus>input");
    let selectAddoption =''

    // console.log(inputbtns);

    inputbtns.forEach((item, ind) =>{
 
        item.addEventListener("click", ()=>{
            selectAddoption=item.value
        })
   

    })

    let savebtn = document.getElementById("savebtn");
    savebtn.addEventListener("click", ()=>{
        let pincpdepop=document.getElementById("code");
        let fnamepop=document.getElementById("F_name");
        let lnamepop = document.getElementById("l_Name");
        let mobnumpop = document.getElementById("mobile");
        let addln1pop = document.getElementById("add_1");
        let landMpop = document.getElementById("land_mark");
        let citypop= document.getElementById("city");
        let statepop = document.getElementById("state");
    
        if( selectAddoption==="" || pincpdepop==="" || fnamepop==="" || lnamepop==="" || mobnumpop==="" || addln1pop==="" || landMpop==="" ||  citypop==="" || statepop==="" ){
            // alert("Please Fill all the Input Fields");
            Swal.fire({
                title: 'Please Fill all the Input Fields',
                showClass: {
                popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
                }
                })
                show.style.display = "flex";
        }
        else if(mobnumpop.value.length != 10){
            // console.log(mobnumpop.value.length);
            Swal.fire({
                title: 'Incorrect Mobile Number...',
                showClass: {
                popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
                }
                })
        }
        else{
            // show.style.display="none";
            Swal.fire({
                title: 'Address Successfully Saved...',
                showClass: {
                popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                popup: 'animate__animated animate__fadeOutUp',
                }
            })
            show.style.display="none";
            let obj = {
                pincpdepop:pincpdepop.value,
                fnamepop:fnamepop.value,
                lnamepop:lnamepop.value,
                mobnumpop:mobnumpop.value,
                addln1pop:addln1pop.value,
                landMpop:landMpop.value,
                citypop:citypop.value,
                statepop:statepop.value
            }
            localStorage.setItem("shippingAddress",JSON.stringify(obj));
            let Addressofshipping = JSON.parse(localStorage.getItem("shippingAddress"))||[];
            // console.log(Addressofshipping);
            let timetohideshippingbtn = document.getElementById("btun");
            appendaddress.style.display="block"
            timetohideshippingbtn.style.display="none";
            let addName = document.getElementById("addName");
            let addline1 = document.getElementById("addline1");
            let addlandmark = document.getElementById("addlandmark");
            let addstate = document.getElementById("addstate");
            let mobCity = document.getElementById("mobCity");
            let mopPincode = document.getElementById("mopPincode");
            let addMob = document.getElementById("addMob");
            let buttonaddress = document.getElementById("button-address");
            addName.innerText = "Full Name :- "+Addressofshipping.fnamepop+" "+Addressofshipping.lnamepop;
            addline1.innerText = "Add-line 1 :- "+Addressofshipping.addln1pop;
            addlandmark.innerText= "Land-Mark :- "+Addressofshipping.landMpop;
            addstate.innerText="State :- "+Addressofshipping.statepop;
            mobCity.innerText="City :- "+Addressofshipping.citypop;
            mopPincode.innerText="Pincode :- "+Addressofshipping.pincpdepop
            addMob.innerText=Addressofshipping.mobnumpop;
            buttonaddress.addEventListener("click",()=>{
                let Selectpayment = document.querySelector(".Select-payment");
                Selectpayment.style.display="block";
            })
            let cod = document.getElementById("cod");
let cdc = document.getElementById("cdc");
cod.addEventListener("click",()=>{
    let Selectpayment = document.querySelector(".Select-payment");
    let appendaddress = document.getElementById("append-address");
    let btun = document.getElementById("btun");
    let totalAmt = document.getElementById("totalAmt").innerText;
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Your order of ${totalAmt} has successfully placed...`,
        showConfirmButton: false,
        timer: 3000
      })
      setTimeout(() => {
        appendaddress.style.display="none";
        Selectpayment.style.display="none";
        btun.style.display="flex";  
        
        
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 20000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Your Product will be delivered by monday'
          })
          window.scrollTo(0, 0);
      }, 2500);
})
cdc.addEventListener("click",()=>{
  let something = document.getElementById("credit-debit-payment");
  something.style.display="grid";
  let paybutton = document.getElementById("paybutton");
  paybutton.addEventListener("click",()=>{
    let numbercard = document.getElementById("number-card");
    let datepayment = document.getElementById("date-payment");
    let CVVpayment = document.getElementById("CVV-payment");
    if(numbercard.value == ""|| datepayment.value == "" ||CVVpayment.value==""){
        Swal.fire({
            title: 'Incomplete information...',
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
            }
        })
    }
    else if(CVVpayment.value.length !=3){
        Swal.fire({
            title: 'Incorrect CVV ...',
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
            }
        })
    }
    else{
        let Selectpayment = document.querySelector(".Select-payment");
        let appendaddress = document.getElementById("append-address");
        let btun = document.getElementById("btun");
        let totalAmt = document.getElementById("totalAmt").innerText;
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Your order of ${totalAmt} has successfully placed...`,
            showConfirmButton: false,
            timer: 3000
          })
          setTimeout(() => {
            appendaddress.style.display="none";
            Selectpayment.style.display="none";
            btun.style.display="flex";  
            
            
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 20000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Your Product will be delivered by monday'
              })
              window.scrollTo(0, 0);
          }, 2500);
    }  
  })
})
        }

    })
})
close.addEventListener("click", ()=>{
    show.style.display="none";
})


let loginStatus = JSON.parse(localStorage.getItem("catrdata"))  || null ;

let bodydiv =  document.querySelector(".eagle");
let noprod = document.querySelector("#noProds>h2")
let appendCart = document.getElementById("appendCart");

window.addEventListener("load",()=>{
    if( loginStatus===null || loginStatus.status===false){
        
        // console.log(loginStatus.status)
        //bodydiv.style.display = "none"
        
        // console.log( typeof noprod)
       // noprod.innerText = "Please Login First" ; 
        // console.log(bodydiv)
    }else{
        // console.log("HEEH")
        let userId = loginStatus.id ;
    
        fetch(`${userDataURL}${userId}`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            let ourCart = data.cart ; 
            // console.log(ourCart)
            if(ourCart.length === 0){

                bodydiv.style.display = "none"
                noprod.innerText = "No Products in cart" ;
            }else{
                bodydiv.style.display = "flex"
                    
                renderDOMcart(ourCart,data)


            }
        })
    }
    
})



function renderDOMcart (data,wholedata){
    let numitems = document.getElementById("numOfitems");
    numitems.innerText = data.length ; 


    
    let arr = data.map((ele,ind)=>{
        return renderCartCards(ele,ind);
    })

    let orderVal = document.getElementById("orderVal") ; 
    let prodDiscount = document.getElementById("prodDiscount") ;
    let totalAmt = document.getElementById("totalAmt") ;
    let prodDis = document.getElementById("prodDis");

    appendCart.innerHTML = `
        ${arr.join("")}
    `
    let sizeSelect = document.querySelectorAll(".quantity");

    let closebtn = document.querySelectorAll(".close-button>button");

    closebtn.forEach((elem,inde)=>{
        
       

        elem.addEventListener("click",(e)=>{
            // alert(JSON.stringify(wholedata));
            wholedata.cart.splice(inde,1);
            // data.splice(inde,1);
            fetch(`${userDataURL}${loginStatus.id}`,{
                method: "PUT",
                headers: {'Content-Type':'application/JSON'},
                body:JSON.stringify(wholedata)
            })
            .then((res)=>{
                return res.json();
            })
            .then((UserData)=>{
                location.reload();
            })
           
        })
    })
    

    sizeSelect.forEach((ele,ind)=>{
        ele.addEventListener("change",(e)=>{
            // alert(ele.value)
            let sum = [];
            for(item of sizeSelect){
                sum.push(Number(item.value)) ; 
            }
            
            let prod = 0; 
            data.forEach((el,inde)=>{
                prod += el.price * sum[inde];
            })

            // alert(prod)
            orderVal.innerText = prod  ;
            totalAmt.innerText = prod - Number(prodDiscount.innerText); 
            prodDis.innerText = Number(prodDiscount.innerText); 
        })
    })
    
    let prod = 0

    data.forEach((el,inde)=>{
        prod += el.price * sizeSelect[inde].value ;
    })
    orderVal.innerText = prod  ;
    totalAmt.innerText = prod - Number(prodDiscount.innerText); 
    prodDis.innerText = Number(prodDiscount.innerText); 

}

// function(data,)

function renderCartCards (item,index){
    
    // item 

    let id = item.id;
    let title  = item.title;
    let img = item.image;
    let price = item.price;
    let size = item.size;
    let col = item.color;
   
    return `<div class="render-cart"> 
                <div id="img">
                    <img  class="cart-img" src="${img}" alt="aeimg">
                </div>
                <div class="userProds">
                    <h5>${title}</h5>
                    <p>₹ ${price}</p>
                    <p>Color: ${col}</p>
                    <select name="size" class="size-select" id="size${id} data-size="${size}">
                        <option value="${size}">${size}</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                    <select name="qunty" class="quantity"  id="quant${id}">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div class="close-button" data-id = "${id} data-size="${size}"><button data-int="${index}" class="times-close">&times;</button></div>
            </div>
`
}