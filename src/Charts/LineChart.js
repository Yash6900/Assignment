import React from 'react';
import Chart from "react-apexcharts";
import { salesData } from '../data';

const LineChart = () => {

  const categories = Object.keys(salesData[0]);
  const category = Object.keys(salesData[0])[0];
  

  
  const seriesData = categories.map(categoryName => ({
    name: categoryName,
    data: salesData[0][categoryName].map(data => data.Ydata)
  }));

  return (
    <div>
      <Chart
        type='line'
        series={seriesData}
        options={{    
          colors: ["#ea5545","#00b7c7",  "#5ad45a", "#27aeef", "#b33dc6"],
          xaxis: {
            categories: salesData[0][category].map(data => data.Xdata)
          },
          tooltip:{
            followCursor:true
          },
          markers: {
            size: 5,
          },
          fill:{
            colors: ["#ea5545","#00b7c7",  "#5ad45a", "#27aeef", "#b33dc6"],
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
            },
            dropShadow: {
              enabled: true,
              top: 0,
              left: 0,
              blur: 3,
              opacity: 0.5
            }
          }
        }}
      />
    </div>
  );
};

export default LineChart;