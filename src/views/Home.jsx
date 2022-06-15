import React, { useEffect, useRef } from "react";
//components
import Navbar from "../components/Navbar";
//styles
import "../styles/Home/Home.scss";
function Home() {
  const cursor = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
  });

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX = mouseX - cursor.current.clientWidth / 2;
      positionRef.current.mouseY = mouseY - cursor.current.clientHeight / 2;
      cursor.current.style.transform = `translate3d(${
        mouseX - cursor.current.clientWidth / 2
      }px, ${mouseY - cursor.current.clientHeight / 2}px, 0)`;
    });
  }, []);

  return (
    <div className="home">
      <div className="light" ref={cursor}></div>
      <Navbar />
    </div>
  );
}

export default Home;
