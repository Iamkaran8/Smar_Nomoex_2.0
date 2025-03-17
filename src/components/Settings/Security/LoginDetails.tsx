export const LoginDetails = () => {
  const AccountInfo = {
    Currentpassword: "••••••",
    Securityquestions: "Your fathers name",
    twoStepverification: "Enabled",
  };
  return (
    <>
      <div className="p-4">
        
        <div>
          <h2 className="text-[24px]">Login details</h2>
          <div className="bg-Cyan dark:bg-Light_Cyan_Gray p-5 rounded-[16px]  ">
            <div className="flex flex-col dark:text-white gap-1 pb-3 border-b-[1px] border-bg-Soft_Gray dark:border-Soft_Gray_20">
              <p className="text-Slate_Gray text-[12px] font-medium leading-[18px] dark:text-Soft_White">
                Full name
              </p>
              <p className="text-[14px] font-bold">{AccountInfo.Currentpassword}</p>
            </div>
            <div className="flex flex-col dark:text-white gap-1 py-3 border-b-[1px] border-bg-Soft_Gray dark:border-Soft_Gray_20">
              <p className="text-Slate_Gray text-[12px] font-medium leading-[18px] dark:text-Soft_White">
                Securityquestions
              </p>
              <p className="text-[14px] font-bold">{AccountInfo.Securityquestions}</p>
            </div>
            <div className="flex flex-col dark:text-white gap-1 pt-3  ">
              <p className="text-Slate_Gray text-[12px] font-medium leading-[18px] dark:text-Soft_White">
                Date of birth
              </p>
              <p className="text-[14px] font-bold">{AccountInfo.twoStepverification}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
