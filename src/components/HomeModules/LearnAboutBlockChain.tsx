import blockChainImg from "../../assets/blockschain.png";
import btnIcon from "../../assets/getstartedbtn.svg";
export const LearnAboutBlockChain = () => {
  return (
    <>
      <div className="cont">
        <div className="py-14 lg:px-[10%]  flex md:flex-row flex-col justify-center">
          <div className="md:w-[50%] w-[100%] flex   flex-col  justify-around">
            <h4 className="text-[28px] leading-[34px] pb-5 hidden lg:block md:hidden">
              Earn crypto by learning about
              <br /> blockchain
            </h4>
            <h4 className="text-[28px] md:text-start text-center leading-[34px] pb-5  lg:hidden md:block">
              Earn crypto by learning about blockchain
            </h4>
            <p className="text-[16px] font-normal md:text-start text-center ">
              Build your blockchain knowledge, complete <br /> quizzes, and earn
              free crypto.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className=" flex items-center bg-blue-500 text-white py-3 px-7 rounded-md my-5 lg:my-10 gap-2 text-[14px]">
                <img src={btnIcon} alt="btn_icon" /> Get Started
              </button>
            </div>
          </div>
          <div className="md:w-[50%] w-[100%] flex flex-col justify-center">
            <img src={blockChainImg} alt="blocjchain" />
          </div>
        </div>
      </div>
    </>
  );
};
