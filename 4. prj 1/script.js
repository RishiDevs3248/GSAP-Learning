let main = document.querySelector('#main');
main.addEventListener('mousemove',(pos)=>{
    gsap.to("#cursor", {
      x: pos.x,
      y: pos.y,
      duration: 1,
      delay:0.1,
      ease: "circ.out",
    });
})