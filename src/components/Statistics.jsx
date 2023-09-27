import { Chart } from "react-google-charts";
import { getStoredDonations } from "../utility/localstorage";


const Statistics = () => {
    const donationData = getStoredDonations();
    const donationCount = donationData.length;
    const total = 12 - donationCount;

    const data = [
        ["Task", "Hours per Day"],
        ["Your Donation", donationCount],
        ["Total Donation", total],
      ];
      
    const options = {
        title: "My Daily Activities",
      };

    return (
        <div>
            <Chart
                chartType="PieChart"
                data={data}
                width={"100%"}
                height={"800px"}
            />
        </div>
    );
};

export default Statistics;