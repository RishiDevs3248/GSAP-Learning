let menu = document.querySelector("#nav i");
let close = document.querySelector("#full i");

let tl = gsap.timeline();

tl.to("#full", {
  right: "0px",
  duration: 0.7,
  ease: "power3.out",
});

tl.from("#full h4", {
  x: 150,
  duration: 0.4,
  stagger: 0.2,
  opacity: 0,
});

tl.from("#full i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", () => {
  menu.style.display = "none";
  tl.play();
});

close.addEventListener("click", () => {
  menu.style.display = "block";
  tl.reverse();
});
