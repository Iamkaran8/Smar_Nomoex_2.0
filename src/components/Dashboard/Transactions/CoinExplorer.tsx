import img from '../../../assets/Dummy_images/Bitcoin.svg'

export const CoinExplorer = () => {
  return (
    <>
      <div className="flex realative justify-evenly items-center p-3 w-[50%] border-[1px] border-Soft_Gray_20 rounded-[6px]  hover:bg-Soft_Gray_20 ease-in duration-300">
        <img src={img} alt='btc' />
        <h4 className="font-medium">Bitcoin Explorer</h4>
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
    </>
  );
};
