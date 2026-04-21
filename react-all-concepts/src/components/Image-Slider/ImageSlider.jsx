import { useEffect, useState } from "react";

function ImageSlider() {
  const images = [
    "https://www.instamojo.com/blog/wp-content/uploads/2021/08/Free-Stock-Image-Websites.jpg",
    "https://www.instamojo.com/blog/wp-content/uploads/2021/08/Dinodia.png",
  ];

  const [active, setActive] = useState(0);

  const handlePrevious = () => {
    setActive((active) => (active + 1) % images.length); // imp
  };

  const handleNext = () => {
    setActive((active) => (active - 1 < 0 ? images.length - 1 : active - 1)); // imp
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handlePrevious;
    }, 1000);
  }, []);

  return (
    <div className="flex w-[200px] h-[200px] justify-center cursor-pointer">
      <img
        src="https://i.pinimg.com/736x/15/04/ed/1504edd40f534ed3ab22642e4d688044.jpg"
        alt="left-arrow"
        onClick={handlePrevious}
      />
      <img src={images[active]} alt="wallpaper" />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbZHhK7CEawDhnJKlHRD3h18nH6tb5oEo5Q&s"
        alt="left-arrow"
        onClick={handleNext}
      />
    </div>
  );
}

export default ImageSlider;
