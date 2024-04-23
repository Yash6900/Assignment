import React from 'react'
import Chart from "react-apexcharts"
import { salesData } from '../data';

const RadarChart = () => {
  const categories = Object.keys(salesData[0]);
  const category = Object.keys(salesData[0])[0];
 
  const seriesData = categories.map(categoryName => ({
    name: categoryName,
    data: salesData[0][categoryName].map(data => data.data)
  }));


  return (
    <div>
      <Chart
       type='radar'
       series={seriesData}
       options={{    
         colors: ['#58D68D', "#3aafa9","#FFB300"],
         xaxis: {
           categories: salesData[0][category].map(data => data.month)
         },
         tooltip:{
           followCursor:true
         },
         markers: {
           size: 5,
         },
         fill:{
           colors:['#58D68D', "#2ECC71" ,"#FFB300"]
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
  )
}

export default RadarChart
