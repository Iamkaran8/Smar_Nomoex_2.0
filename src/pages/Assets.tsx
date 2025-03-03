import { DashboardLayout } from "../components/Common/Layout/DashboardLayout";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

const CurrentPage = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    // const data = {
    //     labels: ["January", "February", "March", "April", "May", "June"],
    //     datasets: [
    //         {
    //             label: "Sales",
    //             data: [5, 59, 80, 81, 56, 55],
    //             backgroundColor: "rgba(75, 192, 192, 0.2)",
    //             borderColor: (context)=>{
    //                 console.log(context)
    //                 const chart = context.chart;
    //                 const {ctx, chartArea, data ,scales} = chart ;
    //                 if(!chartArea){
    //                     return null;
    //                 }
    //                 return getGradient(ctx, chartArea, data, scales)
    //             },
    //             borderWidth: 2,
    //             fill: true,
    //             tension: 0.4,
    //         },
    //     ],
    // };

    // const getGradient  = (ctx, chartArea, data, scales)=>{
    //     const {left, right, top, bottom, width, height} = chartArea;
    //     const {x, y } = scales;
    //     const getGradient = ctx.createLinearGradient(0,0,0,bottom);
    //     const shift = y.getPixelForValue(data.datasets[0].data[0]) / bottom ;
    //     console.log("karan" , shift);
    //     console.log(y.getPixelForValue(data.datasets[0].data[0]));
    //     gradientBorder.addColorStop(0, 'rgba(75,192,192,1)');
    //     gradientBorder.addColorStop(shift, 'rgba(75,192,192,1)');
    //     gradientBorder.addColorStop(0, 'rgba(75,192,192,1)')
    //  }
    // const LineChart = () => {
    //     const options = {
    //         responsive: true,
    //         plugins: {
    //             legend: {
    //                 position: "top",
    //             },
    //             title: {
    //                 display: true,
    //                 text: "Line Chart",
    //             },
    //         },
    //     };

    //     return <Line data={data} options={options} />;
    // };

    return (
        <>
            <h1>Assets</h1>
            {/* <div className="p-10">
            <LineChart />
            </div> */}
        </>
    );
};

export const Assets = () => {
  return <DashboardLayout dynamic={<CurrentPage />} title="Assets" />;
};
