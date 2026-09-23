import './style.css'
  let next = document.querySelector('#next');
  let back = document.querySelector('#back');

  let open = document.querySelector('.open');
  let close = document.querySelector('.close');
  let bar = document.querySelector('.bar');
 let logo = document.querySelector('.logo');
  let nav = document.querySelector('.nav');

  let slides = document.querySelectorAll('.slide')
  
let index = 0;
  
function nextbtn(){
    slides[index].classList.add("hidden") 
    index++;
    if(index >= slides.length){
      index = 0;
    }
    slides[index].classList.remove('hidden')
  }
function backbtn(){
    slides[index].classList.add("hidden") 
    index--;
    if(index<0){
      index = slides.length - 1;
    }
    slides[index].classList.remove('hidden');
}
  next.addEventListener("click",()=>{nextbtn()})
  back.addEventListener("click",()=>{backbtn()})
    

open.addEventListener("click",()=>{
   open.classList.add('hidden');
   bar.classList.remove('hidden');
   bar.classList.add('flex');
   logo.classList.add('hidden');
   close.classList.remove('hidden');
   nav.style.backgroundColor="white";
})
close.addEventListener("click",()=>{
   open.classList.remove('hidden');
   bar.classList.add('hidden');
   bar.classList.remove('flex');
   logo.classList.remove('hidden');
   close.classList.add('hidden');
   nav.style.backgroundColor="transparent";
})