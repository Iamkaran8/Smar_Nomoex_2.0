import "../../../App.css";
import { UserDataType } from "../../../model";


interface Props {
  userData: UserDataType;
}
export const CountryMobileCode = ({ userData }: Props) => {
  return (
    <>
      <div className=" ">
        <input
          className="border-[1px] border-Soft_Gray dark:border-Soft_Gray_20 dark:bg-black rounded-[8px] w-[94%] h-[64px] px-4 placeholder:text-gray-400 focus:outline-none focus:border-Bright_Blue dark:focus:border-Bright_Blue text-[14px] font-medium "
          placeholder="+91"
          type="text"
          value={userData.countrycode}
        />
      </div>
    </>
  );
};
