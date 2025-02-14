import Background_img from "../assets/Singup_Bg.png";
import Background_img_mbl from "../assets/singup_mbl_bg.png";
import { RegRightSideData } from "../components/Registration/RegRightSideData";
import { SigninForm } from "../components/Registration/SignInModule/SigninForm";

export const Signin = () => {
  return (
    <>
      <div className="dark:bg-black dark:text-white min-h-screen   relative">
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

        {/* SignUp Form */}
        <div className="dark:bg-black flex flex-col-reverse md:flex-col-reverse   md:flex-col lg:flex-row justify-center items-center min-h-screen container md:container-none mx-auto h-full  flex justify-center items-center ">
          <div className="dark:bg-black rounded-t-[20px] bg-white  px-5 w-[100%] lg:w-[50%]  md:w-[100%] lg:w-[50%] md:px-[8%] text-center py-10 z-10 ">
            <SigninForm />
          </div>
          <div className="md:w-[70%] lg:w-[50%] w-[50%] py-3 relative">
            <RegRightSideData />
          </div>
        </div>
      </div>
    </>
  );
};
