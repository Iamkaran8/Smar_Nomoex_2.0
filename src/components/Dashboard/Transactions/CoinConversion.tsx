import { useState } from "react";
// import Select, { selectClasses } from "@mui/joy/Select";
// import Option from "@mui/joy/Option";
// import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
export const CoinConversion = () => {
  const selectCoinSymbol = [
    {
      value: "USD",
      label: "USD",
    },
    {
      value: "INR",
      label: "INR",
    },
    {
      value: "EUR",
      label: "EUR",
    },
  ];

  const [isOpen, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <div
        className="flex   justify-evenly items-center w-[43%] h-full border-[1px] border-Soft_Gray_20 rounded-[6px] hover:bg-Soft_Gray_20 ease-in duration-300"
        onClick={handleClick}
      >
        <h4 className="font-medium">USD </h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
        </svg>
      </div>
      {isOpen && (
        <div
          className="flex flex-col h-[100px] overflow-y-scroll absolute border-[1px] mt-1 rounded-[6px]  border-Soft_Gray_20 justify-evenly items-center w-[43%]   rounded-b-[6px] "
          onClick={handleClick}
        >
          {selectCoinSymbol.map((data) => (
            <div className="flex  flex-col rounded-[5px] p-1  items-start w-[100%] h-full  hover:bg-Soft_Gray_20 ease-in duration-300">
              <div className="flex ">
                <h4 className="font-normal pl-3">{data.label}</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                  className="invisible"
                >
                  <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 
      <Select
        defaultValue="USD"
        indicator={<KeyboardArrowDown />}
        sx={{
          width: 240,
          [`& .${selectClasses.indicator}`]: {
            transition: "0.2s",
            [`&.${selectClasses.expanded}`]: {
              transform: "rotate(-180deg)",
            },
          },
          height: "100%",
          background: "black",
          border: "1px solid rgba(207, 219, 213, 0.2)",
          color: "white",
          "&:hover": {
            background: "rgba(207, 219, 213, 0.2)",
          },
        }}
      >
        <div className="bg-black">
          {selectCoinSymbol.map((option) => (
            <Option
              sx={{}}
              value={option.value}
            >
              {option.label}
            </Option>
          ))}
        </div>
      </Select> */}
    </>
  );
};
