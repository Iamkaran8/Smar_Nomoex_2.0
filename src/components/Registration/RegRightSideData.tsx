import MOckUp from "../../assets/Status_Mockup.png";
import Nomoex_logo from "../../assets/NomoexFav_icon.svg";
import { Slider } from "./Slider";

export const RegRightSideData = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-[30px] py-[40px] ">
        <img className="lg:block  hidden" src={MOckUp} alt="Crypto_MockUp" />
        <img
          className="md:hidden lg:hidden block h-[54px] w-[54px] "
          src={Nomoex_logo}
          alt="nomoex_logo"
        />

        <Slider />

        <div className="text-center hidden md:hidden lg:block">
          <h3 className="text-white text-[18px] font-extrabold">
            Waiapi Karaka
          </h3>
          <h5 className="text-Soft_White text-[14px] font-normal ">
            Financial Officer
          </h5>
        </div>
      </div>
    </>
  );
};
