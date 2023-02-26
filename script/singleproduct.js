let data=JSON.parse(localStorage.getItem("singleitem"))
console.log(data)
var img1=document.getElementById("image1")
img1.setAttribute("src",data[0].image1)

var img2=document.getElementById("image2")
img2.setAttribute("src",data[0].image2)

var img3=document.getElementById("image3")
img3.setAttribute("src",data[0].image3)

var img4=document.getElementById("image4")
img4.setAttribute("src",data[0].image4)

var img5=document.getElementById("currimage")
img5.setAttribute("src",data[0].image1)

var des=document.getElementById("description")
des.innerText=data[0].description

var color=document.getElementById("color")
color.innerText=data[0].color

var name1=document.getElementById("title")
name1.innerText=data[0].name
var pri=document.getElementById("price")
pri.innerText=data[0].price

var btn1=document.getElementById("AddtoBag")
btn1.addEventListener("click",()=>{
  localStorage.setItem("catrdata",JSON.stringify(data))
  alert("product added to bag")
  
})

var btn2=document.getElementById("gotoBag")
btn2.addEventListener("click",()=>{
  window.location.href="cart.html"
  
})
