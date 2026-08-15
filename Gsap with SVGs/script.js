
let path = `M 10 100 Q 500 100 990 100`;

let finalPath = `M 10 100 Q 500 100 990 100`;

let string = document.querySelector("#string")

string.addEventListener("mousemove", (dets) => {
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;

    gsap.to("svg path", {
      attr: { d: path }, // to change any attribute of any elememt
      duration: 0.2,
      ease: "power3.out"  // from the docs for easein 
    });
});

string.addEventListener("mousemove", (dets) => {
     gsap.to("svg path", {
       attr: { d: finalPath }, // to change any attribute of any elememt
       duration: 1.5 ,
       ease: "elastic.out(1,0.2)", // from the docs for easein
     });
})
   