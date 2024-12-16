import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

const BlackScreen = ({tl}) => {
  const blackScreenRef = useRef(null);
//   const tl = gsap.timeline();

  useGSAP(() => {
    tl.to(blackScreenRef.current, {
      y: "-100%",
      duration: 0.5,
    });
  });

  return (
    <div
      ref={blackScreenRef}
      className="blackBox w-screen h-screen bg-black fixed top-0 left-0 z-40"
    ></div>
  );
};

export default BlackScreen;
