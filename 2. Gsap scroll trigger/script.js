// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360
// })


// gsap.from("#page2 #box", {
//   scale: 0,
//   delay: 1,
//   rotate: 360,
//   scrollTrigger:{
//     trigger:"#page2 #box",
//     scroller:"body",
//     markers:true,
//     start:"top 60%" ,
//     end:"top 30%",
//     scrub:2, //value 1-5
//     pin:true
//   }
// });


// Vertical scrolling

gsap.to("#page2 h1", {
  x: () =>
    -(document.querySelector("#page2 h1").scrollWidth - window.innerWidth),
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 3,
    pin: true,
  },
});
