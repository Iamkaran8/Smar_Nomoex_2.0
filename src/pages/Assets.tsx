import { DashboardLayout } from "../components/Common/Layout/DashboardLayout";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CurrentPage = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [50, 200, 60, 170, 90, 10, 120, 1, 20, 100], // Sample data
        borderColor: "rgba(35, 227, 62, 1)", // Line color

        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        tension: 0.4, // Curve the line slightly
        
      },
    ],

  };
  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Sales Over Time",
      },
    },
    scales: {
      x: {
        display: false, // Hide X-axis grid
      },
      y: {
        display: false,
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <h1>Assets</h1>
      <h2>Graph</h2>
      <div className="p-5 w-[50%] ">
        <Line data={data} options={options} />
      </div>
    </>
  );
};

export const Assets = () => {
  return <DashboardLayout dynamic={<CurrentPage />} title="Assets" />;
};



