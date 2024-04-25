import React from 'react';
import Chart from "react-apexcharts";
import { salesData } from '../data';

const PieChart = () => {
  // Extracting categories and sales data
  const categories = Object.keys(salesData[0]);

  return (
    <div className='pie'>
      {categories.map(categoryName => (
        <div key={categoryName}>
         
          <Chart
            type="donut"
            width={370}
            height={300}
            series={salesData[0][categoryName].map(data => data.Ydata)} 
            options={{
              labels: salesData[0][categoryName].map(data => data.Xdata), 
              colors: ["#E74C3C",'#82E0AA', '#F1C40F' ,"#1990FF","#8E44AD","#FF5722",],
              title: {
                text: `${categoryName} Data`,
                align: 'center', 
                margin: 10, 
                offsetY: 0, 
                style: {
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  color: '#333', 
                },
              },
              legend: {
                show: true,
                position: 'bottom'
              },
              tooltip: {
                enabled: true,
                y: {
                  formatter: function(value) {
                    return value;
                  }
                }
              },
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default PieChart;
