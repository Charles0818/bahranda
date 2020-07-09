import React, { useState, useRef } from "react";
import { MdKeyboardArrowDown } from 'react-icons/md';
import "./accordion.scss";

function Accordion({ title, content }) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const contentRef = useRef(null);
  const chevronRef = useRef(null);
  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setActive === "active"
    ? chevronRef.current.classList.add('active')
    : chevronRef.current.classList.remove('active')
    console.log(content.current.scrollHeight);
  }
 return (
   <div className="accordion__section d-flex column">
     <button className="accordion d-flex padding-md align-items-center bg-white cursor-pointer" onClick={toggleAccordion}>
        <p className="accordion__title">{title}</p>
        <div className="accordion-icon" ref={chevronRef}>
          <MdKeyboardArrowDown className={"accordion__icon font-md"} fill={"#777"} />
        </div>
      </button>
      <div ref={contentRef} className="accordion__content" style={{ maxHeight: `${setHeight}` }}>
        <div className="accordion__text">{content}</div>
      </div>
    </div>
  );
}

export default Accordion;