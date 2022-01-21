import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

import lozad from 'lozad'


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText);


const observer = lozad();
observer.observe();


  window.addEventListener('DOMContentLoaded', (event) => {
    const myTimeout = setTimeout(scroll, 200);

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

      // fade blocchi
  ScrollTrigger.batch(".hero-image", {
    onEnter: elements => {
      gsap.to(elements, {
        opacity: 1,
        stagger: 0.1,
        duration: 0.3,
        webkitFilter: "blur(0)"
      });
    },
    once: true
  });

  });

  ScrollTrigger.batch(".lozad", {
    onEnter: elements => {
      gsap.to(elements, {
        opacity: 1,
        stagger: 0.1,
        duration: 0.3,
        webkitFilter: "blur(0)"
      });
    },
    once: true
  });

  ScrollTrigger.batch(".hero-second", {
    onEnter: elements => {
      gsap.to(elements, {
        opacity: 1,
        stagger: 0.1,
        duration: 0.3,
        webkitFilter: "blur(0)"
      });
    },
    once: true
  });

  gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: {
      trigger: "#mySection",
      scrub: 0.3
    }
  });



  // slideshow

  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    grabCursor: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      }
    },
    navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
    },
    on: {
     slideChangeTransitionStart: function () {
         let activeSlide = this.el.querySelector('div.swiper-slide-active');
         let caption = activeSlide.querySelector('img').getAttribute("data-caption");
         let slideCaption = this.el.parentElement.querySelector(".slide-captions");
         if(slideCaption != null){
           slideCaption.innerHTML = "<h2 class='current-title'>" + caption + "</h2>"
         }
     }
   }
});
