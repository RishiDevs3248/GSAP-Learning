let h1 = document.querySelector('h1'); 
let h1Text = h1.textContent; 
let splitedH1Text = h1Text.split('');
let splitedH1TextHalfLength = splitedH1Text.length/2;
let clutter = "";

splitedH1Text.forEach((item,idx)=>{
    if (idx < splitedH1TextHalfLength){
        clutter += `<span class="a">${item}</span>`;
    }else{
        clutter += `<span class="b">${item}</span>`;
    }
}) 


h1.innerHTML = clutter;

gsap.from(".a", {
  y: 20,
  duration: 1,
  stagger: -0.5,
  opacity: 0,
});


gsap.from(".b", {
  y: 20,
  duration: 1,
  stagger: 0.5,
  opacity: 0,
});