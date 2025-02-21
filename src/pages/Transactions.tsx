// import { LayOut } from "../components/Common/Layout/Layout";
import { DashboardLayout } from "../components/Common/Layout/DashboardLayout";
import { HashTable } from "../components/Dashboard/Transactions/HashTable";


const CurrentPage = () => {
  return (
    <>
      {/* Total Balance Section */}
      <div className="p-5">
        <HashTable />

      </div>

      {/* Watchlists and Buy/Sell */}
      <div className="flex flex-col lg:flex-row md:flex-col p-5 gap-5">
        <div className="w-full lg:w-[70%] md:w-[100%]">

        </div>
        <div className="w-full md:w-[100%] lg:w-[30%]">

        </div>
      </div>

      {/* Portfolio and Latest Transactions */}
      <div className="flex flex-col lg:flex-row gap-5 p-5">
        <div className="w-full md:w-[100%] lg:w-[50%]">

        </div>
        <div className="w-full md:w-[100%] lg:w-[50%]">

        </div>
      </div>

      {/* Top Stories and Trending Assets */}
      <div className="flex flex-col lg:flex-row p-5 gap-5">
        <div className="w-full lg:w-[70%]">

        </div>
        <div className="w-full lg:w-[30%] mt-3 md:mt-0">

        </div>
      </div>
    </>
  );
};

export const Transactions = () => {
  return (
    <>
      <DashboardLayout dynamic={<CurrentPage />} title="Transactions" />
    </>
  );
};
