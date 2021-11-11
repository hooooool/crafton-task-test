"use strict"


document.addEventListener('DOMContentLoaded', function (){
    const form = document.getElementById('form');
    form.addEventListener ('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
    }
});
const togglePopup = () => {
    let popup = document.getElementById("popup");
    popup.classList.toggle("active");
  };

const wrapper = document.querySelector(".navbar-wrapper");
const brandImg = document.querySelector(".brand img");

window.addEventListener("scroll", ()=>{
  if(window.pageYOffset >= 100){
    wrapper.classList.add("scrollMenu");
    wrapper.style.height = "10%";
    brandImg.style.width = "50%";
  }
  else if(window.pageYOffset < 100){
    wrapper.classList.remove("scrollMenu");
    wrapper.style.height = "13%";
    brandImg.style.width = "80%";
  }
});
const mobileMenu = document.querySelector(".mobileLinks");
let isActive = false;
let isAddedLinks = false;
const menu = document.createElement("div");
mobileMenu.addEventListener("click", ()=>{
  if(isActive == true){
    menu.remove();
    document.querySelector(".fa-bars").style.display = "block";
    document.querySelector(".fa-times").style.display = "none";
    isActive = false;
  }
  else if(isActive == false){
    menu.classList.add("mobileMenu");
    if(isAddedLinks == false){
      document.querySelectorAll(".menu-links").forEach(link=>{
        menu.appendChild(link.cloneNode(true));
      });
      isAddedLinks = true;
    }
    document.querySelector(".container-wrap").appendChild(menu);
    document.querySelector(".fa-bars").style.display = "none";
    document.querySelector(".fa-times").style.display = "block";
    isActive = true;
  }
});

const slideList = [{
    img: `linear-gradient(
      rgba(0, 0, 0, 0.6), 
      rgba(0, 0, 0, 0.6)), 
    url(img/slide-1.jpg)`,
    text: "Będziesz się uczyć z ciekawością.<span>Obiecujemy.</span>"
  },
  {
    img: `linear-gradient(
      rgba(0, 0, 0, 0.6), 
      rgba(0, 0, 0, 0.6)), 
    url(img/slide-2.jpg)`,
    text: "Będziesz się uczyć z ciekawością.<span>Slide - 2</span>"
  },
  {
    img: `linear-gradient(
      rgba(0, 0, 0, 0.6), 
      rgba(0, 0, 0, 0.6)), 
    url(img/slide-1.jpg)`,
    text: "Będziesz się uczyć z ciekawością.<span>Slide - 3</span>"
  },
  {
    img: `linear-gradient(
      rgba(0, 0, 0, 0.6), 
      rgba(0, 0, 0, 0.6)), 
    url(img/slide-2.jpg)`,
    text: "Będziesz się uczyć z ciekawością.<span>Slide - 4</span>"
  }];
  
  const slider = document.querySelector(".slider");
  const dots = [...document.querySelectorAll(".dots span")];
  const sliderText = document.querySelector(".slider-text > h1");
  
  const time = 5000;
  let active = 0;
  
  const changeDot = ()=>{
    const acriveDot = dots.findIndex(dot => dot.classList.contains("active"));
    dots[acriveDot].classList.remove("active");
    dots[active].classList.add("active");
  }
  
  const setSlider = ()=>{
    sliderText.innerHTML = slideList[active].text;
  
    slider.style.paddingTop = "2%";
    slider.style.background = slideList[active].img;
    slider.style.backgroundSize = "cover";
    slider.style.backgroundRepeat = "no-repeat";
    slider.style.backgroundPosition = "center";
    slider.style.width = "100%";
  }
  
  const changeSlide = ()=>{
    active++;
    if(active === slideList.length){
      active = 0;
    }
    setSlider();
    changeDot();
  }
  
  let timeId = setInterval(changeSlide, time);
  
  document.querySelectorAll(".navigation a").forEach((arrow, index)=>{
    if(index == 0){
      arrow.addEventListener("click", ()=>{
        event.preventDefault();
        clearInterval(timeId);
        active--;
        if(active< 0){
          active = slideList.length-1;
        }
        setSlider();
        changeDot();
        timeId = setInterval(changeSlide, time);
      });
    }else{
      arrow.addEventListener("click", ()=>{
      event.preventDefault();
      clearInterval(timeId);
      changeSlide();
      timeId = setInterval(changeSlide, time);
      });
    }
  });