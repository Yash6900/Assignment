import React from 'react';
import Chart from "react-apexcharts";
import { salesData } from '../data';

const BarChart = () => {
  const categories = Object.keys(salesData[0]);
  const category = Object.keys(salesData[0])[0];

  const seriesData = categories.map(categoryName => ({
    name: categoryName,
    data: salesData[0][categoryName].map(data => data.Ydata)
  }));

  return (
    <div>
      <Chart
        type='bar'
        series={seriesData}
        options={{
          colors:  ["#e60049", "#50e991",  "#9b19f5", "#ffa300", "#dc0ab4", "#b3d4ff", "#00bfa0"],
          xaxis: {
            categories: salesData[0][category].map(data => data.Xdata)
          },
          tooltip: {
            followCursor: true
          },
          markers: {
            size: 1,
          },
          fill: {
            colors: ["#e60049", "#50e991",  "#9b19f5", "#ffa300", "#dc0ab4", "#b3d4ff", "#00bfa0"]
            ,
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