// gsap.to("#box1", {
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   rotate:360,
//   backgroundColor:"yellow",
//   borderRadius:"50%"
// });

// gsap.from("#box2", {
//   x: 500,
//   y:500,
//   duration: 2,
//   delay: 1,
// });

// // Stagger make the effect of every line

// gsap.from("h1",{
//     opacity:0,
//     x:30,
//     duration:1,
//     delay:1,
//     stagger:1
// })

// gsap.to("#box", {
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   rotate:360,
//   repeat:2,
//   yoyo:true
// });

// Time line used for  -------------------

// gsap.to("#box1", {
//   x: 1200,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
// });

// gsap.to("#box2", {
//   x: 1200,
//   backgroundColor: "yellow",
//   duration: 2,
//   delay: 3
// });

// gsap.to("#box3", {
//   x: 1200,
//   duration: 2,
//   delay: 5,
//   scale:0.5,
//   borderRadius:"50%"
// });

// Time line code  -------------------

let tl = gsap.timeline()

tl.to("#box1", {
  x: 1200,
  duration: 2,
  delay: 1,
  rotate: 360,
});

tl.to("#box2", {
  x: 1200,
  backgroundColor: "yellow",
  duration: 2,
});

tl.to("#box3", {
  x: 1200,
  duration: 2,
  scale: 0.5,
  borderRadius: "50%",
});