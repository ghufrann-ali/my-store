const img=document.querySelectorAll("img")
const hom1=document.querySelector("#home");
const navv=document.querySelector("#lis");
const header=document.querySelector("header");

const clothes=document.querySelector("#clothes");

const card=document.querySelectorAll("article");

const container=document.getElementById("container");
const btnbagg=document.querySelectorAll(".btnbag");
container.addEventListener("click",(eo) => {
    if(eo.target.className=="fa-solid fa-house"){
        navv.style.display="block"
       
    }
    
})   
 
 
 
 container.addEventListener("click",(eo) => {
        card.forEach(item => {
            if(eo.target.className=="btnbag"){
                item.style.border="2px solid black "
                
        }
        
     })
     
     adding()       
         
 })   
 
 
 
 function adding(){
    const newlis=document.createElement("article")
    let textContent=` <img id="2" src="t4.jpg" alt="" srcset="">
    <p>shirt 1 new</p>
    
    <div class="btn">
        <p>25$</p>
        <button class="btnbag">list</button>
    </div>`
    newlis.appendChild(textContent)
    clothes.appendChild(newlis)


 }