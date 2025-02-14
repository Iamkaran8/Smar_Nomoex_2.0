import Background_img from "../assets/Singup_Bg.png";
import Background_img_mbl from "../assets/singup_mbl_bg.png";
import { BackgroundImage } from "../components/Registration/BackgroundImage";
import { RegRightSideData } from "../components/Registration/RegRightSideData";
import { SigninForm } from "../components/Registration/SignInModule/SigninForm";

export const Signin = () => {
  return (
    <>
      <div className="dark:bg-black dark:text-white min-h-screen   relative">

        {/* {Background Images} */}
        <BackgroundImage />

        {/* SignUp Form */}
        <div className="dark:bg-black flex flex-col-reverse md:flex-col-reverse md:place-content-end    md:flex-col lg:flex-row justify-center items-center min-h-screen container md:container-none mx-auto h-full  flex justify-center items-center ">
          {/* <div className="dark:bg-black rounded-t-[20px] bg-white  px-5 w-[100%] lg:w-[50%]  md:w-[100%] lg:w-[50%] md:px-[8%] text-center py-10 z-10 "> */}
            <SigninForm />
          {/* </div> */}
          <div className="md:w-[70%] lg:w-[50%] w-[50%] py-3 relative">
            <RegRightSideData />
          </div>
        </div>
      </div>
    </>
  );
};
