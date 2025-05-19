'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


btnScrollTo.addEventListener('click',function(){
  section1.scrollIntoView({behavior:'smooth'});
});

const h1=document.querySelector('h1');

const add = function(){
   h1.innerHTML='hellow';
}

h1.addEventListener('mouseenter', add)


setTimeout(()=>{
  h1.removeEventListener('mouseenter',add);
},5000)



























function show(){
    const show=document.querySelector('.sidebar');
    show.style.display='flex';
  }
   function hide(){
    const hide= document.querySelector('.sidebar');
    hide.style.display='none'
   }