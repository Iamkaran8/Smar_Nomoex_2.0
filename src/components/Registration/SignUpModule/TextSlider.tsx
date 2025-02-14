import { useState, useEffect } from "react";

const texts = [
  "“Enjoy the world’s largest cryptocurrency exchange at your fingertips”",
  "“Enjoy the world’s largest cryptocurrency exchange at your fingertips”",
  "“Enjoy the world’s largest cryptocurrency exchange at your fingertips”",
];

export const TextSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-[30px] h-[100%] lg:w-[70%] w-[70%] md:w-[100%] container mx-auto md:gap-[30px] xl:gap-[10px] lg:gap-[20px]">
      {/* Text Animation */}
      <div className="relative h-12 w-full text-center ">
        {texts.map((text, i) => (
          <p
            key={i}
            className={` md:text-[25px] text-white absolute w-full lg:text-[24px] md:leading-[40px] lg:leading-[30px] text-[24px] leading-[30px] font-bold transition-opacity duration-1000 ${
              i === index ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            {text}
          </p>
        ))}
      </div>

      {/* Dot Pagination */}
      <div className="mt-[50px] justify-center items-center md:mt-[40px] flex space-x-2">
        {texts.map((_, i) => (
          <div
            key={i}
            className={`h-[6px] w-[6px] rounded-full transition-all duration-500 ${
              i === index ? "bg-white w-[25px]" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
