export const SearchBar = () => {
  return (
    <div className="flex p-3 items-center gap-3 w-[70%] border-[1px] border-Soft_Gray_20 rounded-[6px]  hover:bg-Soft_Gray_20 ease-in duration-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="currentColor"
      >
        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
      </svg>
      <input
        className="w-[100%] bg-transparent focus:outline-none"
        type="text"
        placeholder="Search your transactions or address"
      />
    </div>
  );
};
