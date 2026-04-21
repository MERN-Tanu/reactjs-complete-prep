import { useState } from "react";
import AccordianItem from "./AccordianItem";

const data = [
  {
    title: "I am first Accordian",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!",
  },
  {
    title: "I am second Accordian",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!",
  },

  {
    title: "I am third Accordian",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!",
  },
  {
    title: "I am fourth Accordian",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!",
  },
  {
    title: "I am fifth Accordian",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!",
  },
];

function Accordian() {
  const [isOpenIndex, setIsOpenIndex] = useState(0);
  return (
    <div className="w-[700px]">
      {data.map((item, index) => {
        return (
          <AccordianItem
            key={index}
            title={item.title}
            description={item.description}
            isOpen={index === isOpenIndex ? true : false} // first accordian is open, others- false
            setIsOpen={() => {
              setIsOpenIndex(
                index === isOpenIndex
                  ? setIsOpenIndex(null)
                  : setIsOpenIndex(index),
              );
            }}
          />
        );
      })}
    </div>
  );
}

export default Accordian;
