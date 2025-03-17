interface Props {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}

export const NavButtons = ({ currentNav, setCurrentNav }: Props) => {
  const navButtons = [
    {
      id: 1,
      name: "Profile",
    },
    {
      id: 2,
      name: "Security",
    },
    {
      id: 3,
      name: "Social Networks",
    },
    {
      id: 4,
      name: "APIs",
    },
    {
      id: 5,
      name: "Notifications",
    },
    {
      id: 6,
      name: "Crypto Addesses",
    },
  ];

  /// To Set Current Nav
  const handleClick = (name: string) => {
    setCurrentNav(name);
  };

  return (
    <>
      <div className="flex p-3 mt-3 gap-3 flex-wrap  w-fit rounded-lg">
        {navButtons.map((nav) => (
          <button
            onClick={() => handleClick(nav.name)}
            key={nav.id}
            className={` ${
              currentNav === nav.name
                ? "bg-black  text-white dark:bg-Light_Cyan_Gray "
                : ""
            } px-5 py-2 hover:bg-black hover:text-white text-black dark:text-white hover:dark:bg-Light_Cyan_Gray  rounded-[8px] text-[14px] }`}
          >
            {nav.name}
          </button>
        ))}
      </div>
    </>
  );
};
