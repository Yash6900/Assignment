import React from 'react';
import Chart from "react-apexcharts";
import { salesData } from '../data';

const BarChart = () => {
  const categories = Object.keys(salesData[0]);
  const category = Object.keys(salesData[0])[0];

  const seriesData = categories.map(categoryName => ({
    name: categoryName,
    data: salesData[0][categoryName].map(data => data.data)
  }));

  return (
    <div>
      <Chart
        type='bar'
        series={seriesData}
        options={{
          colors: ['#1E8449', "#FFB300", "#1e81b0"],
          xaxis: {
            categories: salesData[0][category].map(data => data.month)
          },
          tooltip: {
            followCursor: true
          },
          markers: {
            size: 1,
          },
          fill: {
            colors: ['#1E8449', "#FFB300", "#1e81b0"],
          },
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 600,
            animateGradually: {
              enabled: true,
              delay: 150
            },
            dynamicAnimation: {
              enabled: true,
              speed: 500
            }
          }
        }}
      />
    </div>
  );
};

export default BarChart;
