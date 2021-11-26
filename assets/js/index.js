AOS.init();

var burgersample = document.getElementById("burger-sample")
var toastssample = document.getElementById("toasts-sample");
toastssample.remove();
var pizzassample=document.getElementById("pizzas-sample");
pizzassample.remove();
var saladssample= document.getElementById("salads-sample");
saladssample.remove();
var drinkssample = document.getElementById("drinks-sample");
drinkssample.remove();
var dessertsample= document.getElementById("dessert-sample");
dessertsample.remove();

var allthings=document.getElementById("all-things");

var pizzas=document.getElementById("pizzas");
pizzas.addEventListener("click", pizzabtn)
var toasts = document.getElementById("toasts");
toasts.addEventListener('click', toastsbtn)
var salads=document.getElementById("salads");
salads.addEventListener("click", saladsbtn)
var drinks = document.getElementById("drinks");
drinks.addEventListener("click", drinksbtn)
var desserts=document.getElementById("desserts")
desserts.addEventListener("click", dessertsbtn)
var burger = document.getElementById("burger");
burger.addEventListener("click", burgerbtn)


// var btn=document.querySelector(".btn-menu");
// btn.forEach(button => {
//     button.addEventListener("click", function (){
//         btn.forEach( btn => btn.classList.remove('active'));
//         this.classList.add('active');
//     })
// });


function burgerbtn(e){
    e.preventDefault();
    
   // console.log("king is here");
   pizzassample.remove();
   toastssample.remove();
   saladssample.remove();
   drinkssample.remove();
   dessertsample.remove();
   allthings.appendChild(burgersample)
}

function pizzabtn(e){
    e.preventDefault();
    
   // console.log("king is here");
   burgersample.remove();
   toastssample.remove();
   saladssample.remove();
   drinkssample.remove();
   dessertsample.remove();
   allthings.appendChild(pizzassample)
}

function toastsbtn(e){
    e.preventDefault();
   // console.log("king is here");
   burgersample.remove();
   pizzassample.remove();
   saladssample.remove();
   drinkssample.remove();
   dessertsample.remove();
   allthings.appendChild(toastssample)
}

function saladsbtn(e){
    e.preventDefault();
   // console.log("king is here");
   burgersample.remove();
   toastssample.remove();
   pizzassample.remove();
  
   drinkssample.remove();
   dessertsample.remove();
   allthings.appendChild(saladssample)
}

function drinksbtn(e){
    e.preventDefault();
   // console.log("king is here");
   burgersample.remove();
  toastssample.remove();
   pizzassample.remove();
   saladssample.remove();
   dessertsample.remove();
   allthings.appendChild(drinkssample)
}

function dessertsbtn(e){
    e.preventDefault();
   // console.log("king is here");
   burgersample.remove();
   toastssample.remove();
   pizzassample.remove();
   saladssample.remove();
   drinkssample.remove();
  
   allthings.appendChild(dessertsample)
}

