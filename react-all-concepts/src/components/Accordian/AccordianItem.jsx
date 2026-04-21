import { useState } from "react";

function AccordianItem({ title, description,isOpen,setIsOpen }) {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-black ">
      <div
        className="border border-black flex justify-between cursor-pointer bg-blue-100"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        <span>{title}</span>
        <span>⬇️</span>
      </div>

      <div>
        <p>{isOpen && description}</p>
      </div>
    </div>
  );
}

export default AccordianItem;
