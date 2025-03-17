export const ProfileInfo = () => {
  const AccountInfo = {
    FullName: "Sebastian Bennett",
    Gender: "Female",
    DOB: "January 24, 1983",
  };

  return (
    <>
      <div className="p-4">
        <div>
          <h2 className="text-[24px]">Account information</h2>
          <div className="bg-Cyan dark:bg-Light_Cyan_Gray p-5 rounded-[16px]  ">
            <div className="flex flex-col dark:text-white gap-1 pb-3 border-b-[1px] border-bg-Soft_Gray dark:border-Soft_Gray_20">
              <p className="text-Slate_Gray text-[12px] font-medium leading-[18px] dark:text-Soft_White">
                Full name
              </p>
              <p className="text-[14px] font-bold">{AccountInfo.FullName}</p>
            </div>
            <div className="flex flex-col dark:text-white gap-1 py-3 border-b-[1px] border-bg-Soft_Gray dark:border-Soft_Gray_20">
              <p className="text-Slate_Gray text-[12px] font-medium leading-[18px] dark:text-Soft_White">
                Gender
              </p>
              <p className="text-[14px] font-bold">{AccountInfo.Gender}</p>
            </div>
            <div className="flex flex-col dark:text-white gap-1 pt-3  ">
              <p className="text-Slate_Gray text-[12px] font-medium leading-[18px] dark:text-Soft_White">
                Date of birth
              </p>
              <p className="text-[14px] font-bold">{AccountInfo.DOB}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
