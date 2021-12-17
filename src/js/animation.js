import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import CSSRulePlugin from "gsap/CSSRulePlugin";

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




  window.addEventListener('DOMContentLoaded', (event) => {
    const myTimeout = setTimeout(scroll, 1000);
      function scroll(){

        const sections = gsap.utils.toArray(".panel");
        let maxWidth = 0;

        const getMaxWidth = () => {
          maxWidth = 0;
          sections.forEach((section) => {
            maxWidth += section.offsetWidth;
          });
        };
        getMaxWidth();
        ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

        gsap.to(sections, {
          y: -100,
          x: () => `-${maxWidth - window.innerWidth}`,
          ease: "none",
          scrollTrigger: {
            trigger: ".slider-section",
            pin: true,
            scrub: true,
            end: () => `+=${maxWidth}`,
            invalidateOnRefresh: true
          }
        });

        sections.forEach((sct, i) => {
          ScrollTrigger.create({
            trigger: sct,
            start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth/2) * (maxWidth / (maxWidth - window.innerWidth)),
            end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
            toggleClass: {targets: sct, className: "active"}
          });
        });
      }

  });


const tl = gsap.timeline();
const rule = CSSRulePlugin.getRule(".img-container-left:after");
    tl.to(rule, { duration: 0.7, width: "100%", ease: "Power2.ease" })
    .set(rule, { duration: 0, right: 0, left: "unset" })
    .to(rule, { duration: 1, width: "0%", ease: "Power2.ease" })
    .to("img", { duration: 0.2, opacity: 1, delay: -1 })
    .from(".img-container-left img", {
      duration: 1,
      scale: 1.1,
      ease: "Power2.easeInOut",
      delay: -1.2
    });


const tl2 = gsap.timeline();
const rule2 = CSSRulePlugin.getRule(".img-container-right:after");
        tl2.to(rule2, { duration:0.7, width: "100%", ease: "Power2.ease" })
        .set(rule2, { duration: 0, left: 0, right: "unset" })
        .to(rule2, { duration: 1, width: "0%", ease: "Power2.ease" })
        .to("img", { duration: 0.2, opacity: 1, delay: -1 })
        .from(".img-container-right img", {
          duration: 1,
          scale: 1.1,
          ease: "Power2.easeInOut",
          delay: -1.2
  });


  // skew image

//   let proxy = { skew: 0 },
//     skewSetterL = gsap.quickSetter(".skewElem-left", "skewY", "deg"),
//     skewSetterR = gsap.quickSetter(".skewElem-right", "skewY", "deg"),
//     clamp = gsap.utils.clamp(-3, 3);
// ScrollTrigger.create({
//   onUpdate: (self) => {
//     let skew = clamp(self.getVelocity() / -300);
//     if (Math.abs(skew) > Math.abs(proxy.skew)) {
//       proxy.skew = skew;
//       gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetterL(proxy.skew)});
//     }
//   }
// });
// ScrollTrigger.create({
//   onUpdate: (self) => {
//     let skew = clamp(self.getVelocity() / -300);
//     if (Math.abs(skew) > Math.abs(proxy.skew)) {
//       proxy.skew = skew;
//       gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetterR(proxy.skew)});
//     }
//   }
// });
//
// gsap.set(".skewElem-left", {transformOrigin: "left top", force3D: true});
// gsap.set(".skewElem-right", {transformOrigin: "right top", force3D: true});
