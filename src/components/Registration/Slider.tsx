import { useEffect, useState } from "react";

export const Slider = () => {
  const Quotes: String[] = [
    "“Access the world's leading cryptocurrency exchange anytime, you anywhere”",
    "“Seamless crypto trading on the world’s largest exchange, wherever you anytime anytime” ",
    "“Trade smarter on the world’s largest crypto exchange wherever you are anytime”",
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  useEffect(() => {
    const intervel = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Quotes.length);
    }, 3000);

    return () => clearInterval(intervel);
  }, []);

  return (
    <>
      <div className="pt-3 hidden md:block lg:w-[70%] md:w-[90%] ">
        {Quotes.map((data, index) =>
          index === currentIndex ? (
            <p
            key={index}
              className={`text-[22px] text-white text-center font-bold leading-[32px] transition-opacity duration-1000 `}
            >
              {data}
            </p>
          ) : null
        )}
      </div>

      {/* Pagination */}
      <div className="hidden md:block -mt-1 pb-2">
        <div className="flex">
        {
          Quotes.map((_,index)=>(
            <p key={index} className={`w-[10px] ml-2 h-[10px] bg-white rounded-full ${index === currentIndex ? "w-[30px]" : 'w-[10px]'} `}></p>
          ))
        }
        </div>

      </div>
    </>
  );
};
