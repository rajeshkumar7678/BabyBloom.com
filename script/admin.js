
const baseurl="https://babybloom.onrender.com/"

const userdetails=JSON.parse(localStorage.getItem("userdetails"))
var main=document.getElementById("main1")
var sortbyprice=document.getElementById("sortbyprice")
var sortbycategory=document.getElementById("sortbycategory")
var data1;

function fetchdata(){

    fetch(`${baseurl}product/`)
        .then(response => response.json())
        .then(result =>{
            //console.log(result.products)
            display(result.products)
            data1=result.products
        })
        .catch(error => console.log('error', error));

}


fetchdata()
function display(data){
    main.innerHTML=""
    data.forEach((element) => {
       let card=document.createElement("div")
       card.setAttribute("class","card")

       let image=document.createElement("img")
       image.setAttribute("src",element.image1)

       let title=document.createElement("p")
       title.innerText=element.name

       price=document.createElement("h3")
       price.innerText=` RS ${element.price}`


       let btn=document.createElement("div")
       btn.setAttribute("class","btn")

       var btn1=document.createElement("button");
       btn1.innerText="Update"
       btn1.addEventListener("click",()=>{
        updatedata(element)
       })

       var btn2=document.createElement("button");
       btn2.innerText="delete"
       btn2.addEventListener("click",()=>{
        deletedata(element._id)
        //console.log(element.row_id)
       })

       btn.append(btn1,btn2)
       card.append(image,title,price,btn)
       main.append(card)
    });

   
}

function updatedata(element){
    let arr=[]
    arr.push(element)
    localStorage.setItem("updatedata",JSON.stringify(arr))
    window.location.href="update.html"
}

function deletedata(id){
    fetch(`${baseurl}product/delete/${id}`,{
        method:"delete",
        headers:{
          "token":userdetails.token,
            "content-type":"application/json"
        }
        
        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            alert(data.msg)
            fetchdata()
        })
        .catch((error)=>{
            console.log(error)
        })
    
    
}



//filter-----------------------------------------------------------------------------------
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





