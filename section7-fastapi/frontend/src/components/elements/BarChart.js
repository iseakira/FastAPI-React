import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Grid } from '@mui/material';

const BarChart = (props) => {
  const { data } = props;
  console.log(data);
  if (data === undefined || data.length === 0) {
    return <>データはなし</>;
  }
  const obj = {};
  for (let i = 0; i < data.length; i++) {
    obj[data[i][0]] = data[i].slice(1);
  }
  console.log(obj);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const labels = obj[Object.keys(obj)[0]];
  const chartdata = {
    labels,
    datasets: [
      {
        label: obj['year'][0],
        data: obj['sales'],
        backgroundColor: 'rgba(99, 172, 255, 0.5)',
      },
    ],
  };
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8}>
        <div style={{ width: '600px', height: '300px' }}>
          部署ごとの売上
          <Bar options={options} data={chartdata} />
        </div>
      </Grid>
    </Grid>
  );
};

export default BarChart;
