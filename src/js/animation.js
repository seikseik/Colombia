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
  const quotes = gsap.utils.toArray("[title-animation]");
  function setupSplits() {
    quotes.forEach((quote, i) => {

      quote.split = new SplitText(quote, {
        type:"words,chars",
        wordsClass: "split-line"
      });

      const anim = gsap.fromTo(quote.split.words, {autoAlpha: 0}, {duration: 1, stagger: 0.03, autoAlpha: 1 });
      ScrollTrigger.create({
        trigger: quote,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
      });

    });
  }
  setupSplits()



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
