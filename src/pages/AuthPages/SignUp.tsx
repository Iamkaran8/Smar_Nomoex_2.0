import { BackgroundImage } from "../../components/Registration/BackgroundImage";
import { RegRightSideData } from "../../components/Registration/RegRightSideData";
import { SignUpForm } from "../../components/Registration/SignUpModule/SignUpForm";

export const SignUp = () => {
  return (
    <>
      <div className="dark:bg-black dark:text-white  min-h-screen   relative">
        {/* {Background Images} */}
        <BackgroundImage />

        {/* SignUp Form */}
        <div className="dark:bg-black flex flex-col-reverse md:flex-col-reverse  md:place-content-end  md:flex-col lg:flex-row justify-center items-center min-h-screen container md:container-none mx-auto h-full  flex justify-center items-center ">
          <SignUpForm />

          <div className="md:w-[70%] lg:w-[50%] w-[50%] py-3 relative">
            <RegRightSideData />
          </div>
        </div>
      </div>
    </>
  );
};
