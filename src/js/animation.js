import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Typed from 'typed.js';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText);


// let h = document.querySelector(".hero").offsetHeight;
// let topArrow = document.querySelector(".hero");
// topArrow.addEventListener("click", function(){
//   body.classList.remove("open")
//   gsap.to(window, {duration: 0.7, scrollTo: h});
// });


  // animate text on scroll
  //
  const quotes = document.querySelectorAll(".animation-text");
  const timing = [ 0.3, 0.4, 0.4, 0.4];
  const stagger = [ 0.01, 0.02, 0.02, 0.02];
  function setupSplits() {
    quotes.forEach((quote, i) => {

      if(quote.anim) {
        quote.anim.progress(1).kill();
        quote.split.revert();
      }

      quote.split = new SplitText(quote, {
        type:"words,chars",
        wordsClass: "split-line"
      });

      quote.anim = gsap.from(quote.split.chars, {
        scrollTrigger: {
          trigger: quote,
          start: "top 75%",
        },
        duration: timing[i],
        ease: "circ.out",
        y: 80,
        stagger: stagger[i]
      });
    });
  }


  // type
  let hero = document.querySelector(".hero")
  let options = {
    strings: ["è quì",
   "è in mezzo a noi"],
  	typeSpeed: 50,
  	startDelay: 300,
  	backSpeed: 30,
  	backDelay: 2000,
  	loop: true,
  	showCursor: false,
  };

  let typed = new Typed('.type', options);

  // modale
  let buttons = document.querySelectorAll(".modal-btn");
  let modali = document.querySelectorAll(".modal-container");

  let body = document.querySelector("body");

  buttons.forEach((item, i) => {
    item.addEventListener("click", function(){
      let id = item.id;
      let modale = document.querySelector(`[${id}]`);
      modale.classList.add("three");
      body.style.overflow = "hidden"
    })
  });

  modali.forEach((item, i) => {
    let prev = item.querySelectorAll(".prev");
    let close = item.querySelectorAll(".close");
    let next = item.querySelectorAll(".next");
      prev.forEach((a, i) => {
        if(!a.classList.contains("disabled")){
          a.addEventListener("click", function(){
            let oldModal = document.querySelector(".three");
            oldModal.classList.remove("three");
            let id = `scheda${a.id}`;
            let newModal = document.querySelector(`[${id}]`);
            newModal.classList.add("three");
          })
        }
      });
      next.forEach((b, i) => {
        if(!b.classList.contains("disabled")){
          b.addEventListener("click", function(){
            let oldModal = document.querySelector(".three");
            oldModal.classList.remove("three");
            let id = `scheda${b.id}`;
            let newModal = document.querySelector(`[${id}]`);
            newModal.classList.remove("out");
            newModal.classList.add("three");
          })
        }
      });
      close.forEach((c, i) => {
        c.addEventListener("click",function(){
          let oldModal = document.querySelector(".three");
          oldModal.classList.remove("three");
          body.style.overflow = "auto"
        })
      });

  });


  const fadeUp = gsap.utils.toArray("[fade-up]");
  fadeUp.forEach((el, i) => {
    const anim = gsap.fromTo(el, {autoAlpha: 0, y: 50}, {duration: 1, autoAlpha: 1, y: 0});
    ScrollTrigger.create({
      trigger: el,
      animation: anim,
      toggleActions: 'play none none none',
      once: true,
    });
  });

  const fade = gsap.utils.toArray("[fade]");
  fade.forEach((el, i) => {
    const anim = gsap.fromTo(el, {autoAlpha: 0}, {duration: 1, autoAlpha: 1});
    ScrollTrigger.create({
      trigger: el,
      animation: anim,
      toggleActions: 'play none none none',
      once: true,
    });
  });
