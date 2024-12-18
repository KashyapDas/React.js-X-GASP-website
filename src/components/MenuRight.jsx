import React, { useState } from "react";
import style from "./style.module.css";
import { menuAtom } from "../store/menuAtom";
import { useSetRecoilState } from "recoil";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MenuRight = () => {
  // const [about, setAbout] = useState(false);

  const [hoveredElement, setHoveredElement] = useState(null);

  const menuFnc = useSetRecoilState(menuAtom);

  const menuHandler = () => {
    menuFnc(false);
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    if (hoveredElement) {
      // When an element is being hovered
      tl.to(`.${hoveredElement}Text1`, {
        top: "-100%",
        duration: 0.4,
        delay: 0.1,
        ease: "power3.inOut", // Smooth easing
      });
      tl.to(
        `.${hoveredElement}Text2`,
        {
          top: "0%",
          duration: 0.4,
          ease: "power3.inOut",
        },
        "<" // Start this animation at the same time as the previous
      );
    } else {
      // When no element is hovered
      tl.to(".text2", {
        top: "100%",
        duration: 0.4,
        delay: 0.1,
        ease: "power3.inOut",
      });
      tl.to(
        ".text1",
        {
          top: "0%",
          duration: 0.4,
          ease: "power3.inOut",
        },
        "<"
      );
    }
  }, [hoveredElement]);

  const options = [
    { label: "About", width: "65%" },
    { label: "Story", width: "60%" },
    { label: "Projects", width: "90%" },
    { label: "Releases", width: "89%" },
  ];

  return (
    <div className="bg-[#1A1A1A] w-[35%] h-full">

      {/* This is the close button */}
      <div className="w-full h-[5%]">
        <h1
          onClick={menuHandler}
          className={`${style.gilroyRegular} uppercase text-xs font-extralight text-right pr-5 pt-3 mt-1 cursor-pointer hover:text-sm origin-center transition-all ease-in-out duration-75`}
        >
          Close
        </h1>
      </div>

      {/* This is the logo in the menu */}
      <h1 className={`${style.gilroyRegular} text-2xl font-semibold mt-10`}>
        Logo
      </h1>

      {/* This is the menu's options */}
      <div className="options text-5xl uppercase font-extrabold mt-28 w-[50%] h-[6%]">
        {options.map((option, index) => (
          <div
            key={index}
            className={`w-[${option.width}] h-full mt-1 overflow-hidden relative`}
            onMouseEnter={() => setHoveredElement(option.label.toLowerCase())}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <h1
              className={`${option.label.toLowerCase()}Text1 text1 cursor-pointer absolute top-0 left-0`}
            >
              {option.label}
            </h1>
            <h1
              className={`${option.label.toLowerCase()}Text2 text2 cursor-pointer absolute top-[100%] left-0`}
            >
              {option.label}
            </h1>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MenuRight;
