// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './App.css'
import { useRef } from 'react';

function App() {
  const gsapRef = useRef();
  // const [count, setCount] = useState(0)
  useGSAP(() => {
    gsap.to(gsapRef.current, {
      x: 1000,
      duration: 2,
      delay: 1,
      rotate:180
    })
  })

  return (
    <main>
      <div ref={gsapRef} className="box">

      </div>
    </main>
  )
}

export default App
