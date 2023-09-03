const baseurl="https://babybloom.onrender.com/"


var main1=document.getElementById("product")
var data1;
function fetchdata(){
    fetch(`${baseurl}product/`)
        .then(response => response.json())
        .then(result =>{
            console.log(result.products)
            display(result.products)
            data1=result.products
        })
        .catch(error => console.log('error', error));
}




fetchdata()
function display(data){
    main1.innerHTML=""
    data.forEach((element) => {
       let card=document.createElement("div")
       card.setAttribute("class","card1")

       let image=document.createElement("img")
       image.setAttribute("src",element.image1)

       let title=document.createElement("p")
       title.innerText=element.name

       price=document.createElement("h3")
       price.innerText=` ₹ ${element.price}`
        
       let button=document.createElement("button")
        button.innerText="ADD to CART"
        button.setAttribute("class","btn")

        button.addEventListener("click",()=>{
            let arr=[]
            arr.push(element)
            localStorage.setItem("showcartproduct",JSON.stringify(arr))
            window.location.href="cart.html"

        })


       card.addEventListener("mouseover",()=>{
           card.append(button)
       })
       image.addEventListener("click",()=>{
        let arr=[]
        arr.push(element)
        localStorage.setItem("singleitem",JSON.stringify(arr))
        window.location.href="singleproduct.html"
       })
       
       card.append(image,title,price)
       main1.append(card)
    });

   
}

var sortbycat=document.getElementById("sortbycat")
var sortbyprice=document.getElementById("sortbyprice")
var sortbycategory=document.getElementById("sortbycategory")
sortbyprice.addEventListener("change",()=>{
    
    if(sortbyprice.value == "lowtohigh"){
        let arr = data1.sort((a,b)=>a.price-b.price);
        display(arr)
    }else if(sortbyprice.value == "hightolow"){
        let arr = data1.sort((a,b)=>b.price-a.price);
        display(arr)
    }
})


sortbycategory.addEventListener("change",()=>{
    if(sortbycategory.value==""){
        display(data1)
    }else{
    let filtered=data1.filter((ele)=>{
        if(sortbycategory.value==ele.subcat){
            return true
        }else{
            return false
        }
    })
    display(filtered)
    }
    
})

sortbycat.addEventListener("change",()=>{
    if(sortbycat.value==""){
        display(data1)
    }else{
    let filtered=data1.filter((ele)=>{
        if(sortbycat.value==ele.maincat ){
            return true
        }else{
            return false
        }
    })
    console.log(filtered)
    display(filtered)
    }
    
})
 var search=document.getElementById("search")

 
search.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
    
    
    const searchValue = search.value.toLowerCase(); 

      let search_filter = data1.filter((ele) => {
        const subcatLower = ele.subcat.toLowerCase(); 
        return subcatLower.includes(searchValue);
      });
    display(search_filter)
    }
    
  });
