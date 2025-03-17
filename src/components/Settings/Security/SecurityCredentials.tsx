export const SecurityCredentials = () => {
  const AccountInfo = {
    FullName: "Sebastian Bennett",
    Gender: "Female",
    DOB: "January 24, 1983",
  };
  return (
    <>
      <div className="p-4">
        <div>
          <h2 className="text-[24px]">Security credentials</h2>
          <div className="bg-Cyan dark:bg-Light_Cyan_Gray p-5 rounded-[16px]  ">
            <div className="flex gap-3   dark:text-white gap-1 pb-3 border-b-[1px] border-bg-Soft_Gray dark:border-Soft_Gray_20">
              <div>
                <div className="border-[1px] h-full p-4 rounded-[8px] border-bg-Soft_Gray dark:border-Soft_Gray_20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="currentColor"
                  >
                    <path d="M80-160q-33 0-56.5-23.5T0-240h160q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240h160q0 33-23.5 56.5T880-160H80Zm400-40q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240q0 17 11.5 28.5T480-200ZM160-320h640v-440H160v440Zm0 0v-440 440Z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-1 justify-center">
                <p className="text-Slate_Gray text-[12px] font-medium leading-[18px] dark:text-Soft_White">
                  01 Apr 2021 at 06:25PM
                </p>
                <p className="text-[14px] font-bold">Mac OS Safari 15.1</p>
              </div>
            </div>
            <div className="flex gap-3  mt-3 dark:text-white gap-1 pb-3 border-b-[1px] border-bg-Soft_Gray dark:border-Soft_Gray_20">
              <div>
                <div className="border-[1px]  h-full p-4 rounded-[8px] border-bg-Soft_Gray dark:border-Soft_Gray_20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="currentColor"
                  >
                    <path d="M80-160q-33 0-56.5-23.5T0-240h160q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240h160q0 33-23.5 56.5T880-160H80Zm400-40q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240q0 17 11.5 28.5T480-200ZM160-320h640v-440H160v440Zm0 0v-440 440Z" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-1 justify-center">
                <p className="text-Slate_Gray text-[12px] font-medium leading-[18px] dark:text-Soft_White">
                  20 Oct 2021 at 04:32AM{" "}
                </p>
                <p className="text-[14px] font-bold">
                  Windows 11 Mozilla Firefox
                </p>
              </div>
            </div>
            <div className="flex gap-3  mt-3 dark:text-white gap-1  ">
              <div>
                <div className="border-[1px] h-full p-4 rounded-[8px] border-bg-Soft_Gray dark:border-Soft_Gray_20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="currentColor"
                  >
                    <path d="M400-160h160v-40H400v40ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm0-80h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-1 justify-center">
                <p className="text-Slate_Gray text-[12px] font-medium leading-[18px] dark:text-Soft_White">
                  19 Oct 2021 at 06:30AM
                </p>
                <p className="text-[14px] font-bold">iOS Safari 15.1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
