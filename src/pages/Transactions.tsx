import { DashboardLayout } from "../components/Common/Layout/DashboardLayout";
import { HashTable } from "../components/Dashboard/Transactions/HashTable";
import { TopBar } from "../components/Dashboard/Transactions/TopBar";

const CurrentPage = () => {
  return (
    <>
      <div className="p-5">
        <TopBar />
      </div>
      {/* Hash Table Section */}
      <div className="p-5">
        <HashTable />
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
