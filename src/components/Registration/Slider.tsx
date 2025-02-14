import { useEffect, useState } from "react";

export const Slider = () => {
  const texts: String[] = [
    "“Enjoy the world’s largest cryptocurrency exchange at your fingertips”",
    "“Enjoy the world’s largest cryptocurrency exchange at your ",
    "“Enjoy the world’s largest cryptocurrency exchange at ",
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  useEffect(() => {
    const intervel = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      console.log(3 % texts.length);
    }, 3000);

    return () => clearInterval(intervel);
  }, []);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setIndex((prevIndex) => (prevIndex + 1) % texts.length);
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   }, []);
  return (
    <>
      {texts.map((data, index) =>
        index === currentIndex ? <p>{data}</p> : null
      )}
    </>
  );
};
