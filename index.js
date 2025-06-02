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

const tabss = document.querySelector('.tab');
const btns = document.querySelectorAll('.btn-operation');
const contents = document.querySelectorAll('.operation_content');

tabss.addEventListener('click', function (e) {
  const clicked = e.target.closest('.btn-operation');
  console.log(clicked);
  if (!clicked) return;

  const id = clicked.dataset.id;
  if (!id) return;

  // Remove 'active' from all buttons
  btns.forEach((btn) => btn.classList.remove('active'));

  // Add 'active' to clicked button
  clicked.classList.add('active');

  // Hide all tab contents
  contents.forEach((content) => content.classList.add('hidden'));

  // Show the content with corresponding ID
  const targetContent = document.querySelector(`.operation_content-${id}`);
 
    targetContent.classList.remove('hidden');
  
});

//hover effect

const navs=document.querySelector('.nav');


const mouseHover = function(e, opacity){
 
  if(e.target.classList.contains('nav-link')){
    const link = e.target;
    const slibling =link.closest('.nav').querySelectorAll('.nav-link');
    const logo =link.closest('.nav').querySelector('.logo');


    slibling.forEach((slib)=>{
     
     if(slib !==link){ slib.style.opacity=opacity;
     }
    });
  logo.style.opacity=opacity;
  }

}
navs.addEventListener('mouseover',(e)=>{
  mouseHover(e,0.5);
})
navs.addEventListener('mouseout',(e)=>{
 mouseHover(e,1);
})




 // Or any top section

const navHeight = navs.getBoundingClientRect().height;

const observer = new IntersectionObserver(
  entries => {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      nav.classList.add('sticky', 'top-0', 'w-full', 'z-50', 'shadow-md', 'bg-white','py-3');
    } else {
      nav.classList.remove('sticky', 'top-0', 'w-full', 'z-50', 'shadow-md', 'bg-white','py-3');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  }
);

observer.observe(section1);


const sections = document.querySelectorAll('.section');

// Define observer options
const options = {
  root: null, // relative to viewport
  threshold: 0.15, // trigger when 10% visible
     rootMargin: `-${navHeight}px`,
};

// Callback function
const revealSection = function(entries, observer) {
  const [entry] = entries;
  
  // Skip if not intersecting
  if (!entry.isIntersecting) return;
  
  // Remove hidden class when section appears
  entry.target.classList.remove('section-hidden');
  
  // Stop observing after revealing
  observer.unobserve(entry.target);
};

// Create observer
const sectionObserver = new IntersectionObserver(revealSection, options);

// Initialize all sections as hidden and start observing
sections.forEach((section) => {
  section.classList.add('section-hidden');
  sectionObserver.observe(section);
});



document.addEventListener("DOMContentLoaded", function() {
  // Select all lazy-loaded images
  const lazyImages = document.querySelectorAll('.lazy-img');

  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // Remove the blur-sm class when image is in view
        img.classList.remove('blur-sm');
        // Optionally stop observing this image now
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '0px',
    threshold: 0.1
  });

  // Observe each lazy image
  lazyImages.forEach(img => {
    observer.observe(img);
  });
});

//pop up button
const openPop= document.querySelectorAll('.btn-open');
const allPop = document.querySelector('.modal');
const closePop = document.querySelector('.btn-close');
const overPop = document.querySelector('.overlay');
let i;

for(let i=0; i<openPop.length; i++){
    openPop[i].addEventListener('click', function(){
         allPop.classList.remove('hidden');
        overPop.classList.remove('hidden');
    });
}


const closeOver = function(){
  allPop.classList.add('hidden');
  overPop.classList.add('hidden');
}
closePop.addEventListener('click',closeOver)
overPop.addEventListener('click',closeOver);

document.addEventListener('keydown', function(e){
  console.log(e.key)
  if(e.key==='Escape'){
    closeOver();

  }
})

//handle navigation
function show(){
    const show=document.querySelector('.sidebar');
    show.style.display='flex';
  }
   function hide(){
    const hide= document.querySelector('.sidebar');
    hide.style.display='none'
   }