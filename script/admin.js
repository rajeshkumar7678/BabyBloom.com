
var main=document.getElementById("main1")
var sortbyprice=document.getElementById("sortbyprice")
var sortbycategory=document.getElementById("sortbycategory")
var data1;

function fetchdata(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: "get",
        headers: myHeaders,
        redirect: "follow",
    
    };

    fetch("https://v1.nocodeapi.com/rajeshkumar7678/google_sheets/yUJreEUVCwZpGtpW?tabId=Sheet1", requestOptions)
        .then(response => response.json())
        .then((result) =>{
            console.log(result.data)
            display(result.data)
            data1=result.data
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

       var btn1=document.createElement("buttom");
       btn1.innerText="Update"
       btn1.addEventListener("click",()=>{
        updatedata(element)
       })

       var btn2=document.createElement("buttom");
       btn2.innerText="delete"
       btn2.addEventListener("click",()=>{
        deletedata(element.row_id)
        //console.log(element.row_id)
       })

       btn.append(btn1,btn2)
       card.append(image,title,price,btn)
       main.append(card)
    });

   
}

function updatedata(element){
    console.log(element)
}

function deletedata(id){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: "delete",
        headers: myHeaders,
        redirect: "follow",
    
    };
    
    fetch(`https://v1.nocodeapi.com/rajeshkumar7678/google_sheets/yUJreEUVCwZpGtpW?tabId=Sheet1&row_id=${id}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        fetchdata()
    
    
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





