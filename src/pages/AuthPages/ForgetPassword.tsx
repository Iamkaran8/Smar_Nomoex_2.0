import { useEffect } from "react";
import { OtpValidation } from "../../components/Registration/PassWordReset/OtpValidation";
import { PassWordResetForm } from "../../components/Registration/PassWordReset/PassWordResetForm";
import { RegRightSideData } from "../../components/Registration/RegRightSideData";
import { BackgroundImage } from "../../components/Registration/BackgroundImage";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { toast, ToastContainer } from "react-toastify";

export const ForgetPassword = () => {
  const isOptSent = useSelector((state: RootState) => state.auth.isOptSend);
  const sendEmail = () => {
    toast("Email Send Succesfully");
  };

  useEffect(() => {
    isOptSent && sendEmail();
  }, [isOptSent]);

  return (
    <>
      <div className="dark:bg-black dark:text-white min-h-screen   relative">
        {/* {Background Images} */}
        <BackgroundImage />

        {/* Password Reset Form Form */}
        <div className="dark:bg-black flex flex-col-reverse md:flex-col-reverse md:place-content-end  md:flex-col lg:flex-row justify-center items-center min-h-screen container md:container-none mx-auto h-full  flex justify-center items-center ">
          {isOptSent ? <OtpValidation /> : <PassWordResetForm />}
          <div className="md:w-[70%] lg:w-[50%] w-[50%] py-3 relative">
            <RegRightSideData />
          </div>
          
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
