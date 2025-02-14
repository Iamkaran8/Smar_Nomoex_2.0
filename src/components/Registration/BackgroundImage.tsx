import Background_img from "../../assets/Singup_Bg.png";
import Background_img_mbl from "../../assets/singup_mbl_bg.png";

export const BackgroundImage = () => {
  return (
    <>
      <div
        className="w-[100%] hidden md:block top-0 right-0 absolute h-full lg:w-1/2 md:w-[100%]"
        style={{
          backgroundImage: `url(${Background_img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          rotate: "rotate(0deg)",
        }}
      ></div>
      <div
        className="w-[100%] block lg:hidden md:block top-0 right-0 absolute h-full lg:w-1/2 md:w-[100%]"
        style={{
          backgroundImage: `url(${Background_img_mbl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      ></div>
    </>
  );
};
