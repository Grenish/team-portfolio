import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";

const Welcome = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Hello.",
        "नमस्ते।",
        "Bonjour.",
        "Hola.",
        "হ্যালো।",
        "नमस्कार।",
        "హలో।",
        "ಹಲೋ।",
        "வணக்கம்।",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      css: `
        #typed-text {
            z-index: 10;
        }
      `
    };
    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy(); // cleanup
    };
  }, []);

  return (
    <div className="welcome md:text-[6rem] sm:text-5xl text-3xl">
      <div ref={typedRef} style={{zIndex:'10'}} id="typed-text"></div>

      <div className="scroll-mouse"></div>

      <div className="color">
        <div className="color1"></div>
        <div className="color2"></div>
        <div className="color3"></div>
        <div className="color4"></div>
      </div>
    </div>
  );
};

export default Welcome;
