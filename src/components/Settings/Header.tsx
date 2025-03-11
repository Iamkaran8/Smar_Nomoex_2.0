import ProfileImg from "../../assets/Dummy_images/profile_pic.png";

export const Header = () => {
  return (
    <div className="border-[0px] md:border-b-[1px] sticky px-[3%] top-0 border-b-Soft_Gray flex justify-between p-4 dark:border-Soft_Gray_20 bg-white dark:bg-black">
      <div className=" flex items-center">
        <h2 className="text-[24px] mb-0 hidden md:block lg:block">
          {"Settings"}
        </h2>
        <div className="md:hidden block text-black dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </div>
      </div>
      <div className="flex gap-5">
        <button className="bg-Bright_Blue text-white px-5 rounded-[8px] text-[14px] leading-[21px] py-2 hidden md:block lg:block">
          Recieve
        </button>
        <button className="border-[1px] border-Soft_Gray px-5 py-2 rounded-[8px] dark:border-Soft_Gray_20 leading-[21px] flex  justify-center items-center ">
          Send
        </button>
        <div className="hidden md:block lg:block">
          <button className="border-[1px] border-Soft_Gray rounded-[8px] dark:border-Soft_Gray_20 p-2 leading-[21px] h-[40px] w-[40px] flex  justify-center items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="currentColor"
            >
              <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
            </svg>
          </button>
        </div>

        <img
          className="h-[40px] w-[40x] rounded-full"
          src={ProfileImg}
          alt="Profile Image"
        />
      </div>
    </div>
  );
};
