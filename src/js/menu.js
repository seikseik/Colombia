import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText);

let body = document.querySelector("body");
let menuBtn = document.querySelector("#menu-btn");
var burger = gsap.timeline({
    paused: true
});

burger
    .to(" .burger-one", 0.3, { y: "5px", ease: "circ.out" }, "burg")
    .to(" .burger-tree", 0.3, { y: "-5px", ease: "circ.out" }, "burg")
    .to(
        " .burger-two",
        0.3,
        { scale: 0.1, transformOrigin: "center", ease: "circ.out" },
        "burg"
    )
    .add("rotate")
    .to(" .burger-one", 0.3, { y: "10", ease: "circ.out" }, "rotate")
    .to(" .burger-tree", 0.3, { y: "-10", ease: "circ.out" }, "rotate")
    .to(
        " .burger-one",
        0.3,
        { rotationZ: 45, transformOrigin: "50% 50%", ease: "circ.out" },
        "rotate"
    )
    .to(
        " .burger-tree",
        0.3,
        { rotationZ: -45, transformOrigin: "50% 50%", ease: "circ.out" },
        "rotate"
    );

    let menu =  document.querySelector(".menu-full");
    let menuItems = gsap.utils.toArray(".menu-item");
    let flag = false;

let scroll = false;
menuBtn.addEventListener("click", () => {
  let navbar = document.querySelector(".navbar");
        flag = !flag;
        if (flag) {
            menu.visibility = "visible";
            gsap.fromTo(menu,{autoAlpha: 0},{  duration: 0.25, autoAlpha: 1, ease: "circ.out"});

            gsap.fromTo(menuItems,{autoAlpha: 0},{  duration: 0.3, autoAlpha: 1, stagger: 0.1, delay: 0.15});

            body.style.overflowY = "hidden"
            burger.restart();
        } else {
            let tl = gsap.timeline({
                paused: true
              });
              tl.fromTo(menuItems,{autoAlpha: 1},{  duration: 0.2, autoAlpha: 0 ,stagger: -0.1, delay: 0.1});
              tl.fromTo(menu,{autoAlpha: 1},{  duration: 0.4, autoAlpha: 0, ease: "circ.out", delay: 0.2});
              tl.set(menu, {visibility: "hidden"});
              tl.restart();
              body.style.overflowY = "scroll";
              burger.reverse();
        }
});

menuItems.forEach((item, i) => {
item.addEventListener("click", function(){
  let id = item.getAttribute('scrollto');
  let tl = gsap.timeline({
      paused: true
    });
    tl.fromTo(menuItems,{autoAlpha: 1},{  duration: 0.2, autoAlpha: 0 ,stagger: -0.1, delay: 0.1});
    tl.fromTo(menu,{autoAlpha: 1},{  duration: 0.4, autoAlpha: 0, ease: "circ.out", delay: 0.2});
    tl.set(menu, {visibility: "hidden"});
    tl.restart();
    body.style.overflowY = "scroll";
    burger.reverse();
  gsap.to(window, {duration: 1, scrollTo: `#${id}`});
  flag = !flag
})
});


// scroll active


let introSections = document.querySelectorAll(".scroll");
introSections.forEach((item, i) => {
  ScrollTrigger.create({
    trigger: item,
    start: "top 50%",
    onEnter: () => {
      let id = item.id;
      menuItems.forEach((link, i) => {
        let attr = link.getAttribute('scrollto')
        if(attr == id){
          link.classList.add("active");
        }else{
          link.classList.remove("active")
        }
      });
    },
    onEnterBack: () => {
      let id = item.id;
      menuItems.forEach((link, i) => {
        let attr = link.getAttribute('scrollto')
        if(attr == id){
          link.classList.add("active");
        }else{
          link.classList.remove("active")
        }
      });
    }
  });
});
