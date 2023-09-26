import { LineChart, Line } from 'recharts';

const Statistics = () => {

    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
    const renderLineChart = (
        <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      );
      

    return (
        <div>
            <h1>thsi is stattixs page</h1>
            {renderLineChart}
        </div>
    );
};

export default Statistics;