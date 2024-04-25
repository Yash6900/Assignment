import React, { useState, useEffect } from 'react';
import LineChart from './components/LineChart';
import { salesData } from './data';
import PieChart from './components/PieChart';

import Facts from './components/Facts';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Component.css"
import BarChart from './components/BarChart';
import RadarChart from './components/RadarChart';
import Area from './components/Area';

const App = () => {
  const [chartData, setChartData] = useState(salesData);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    customPaging: function(i) {
      // Define an array of images corresponding to each chart
      const images = [
        './Line.png',
        './Bar.png',
        './Area.png',
        "./pie.png",
        './Radar.png'
        // Add more image paths as needed
      ];
      // Render custom dot with image
      return <img className='dots' src={images[i]} alt={`Chart ${i}`} />;
    }
  };

  return (
    <div className="Home">
      <div  className='heading'>
      <h1>Visualize</h1>
      </div>
      <div className='wrapper' >
      <div className='Analyse'>
          <Facts salesData={salesData} />
        </div>

        <div className='ChartBox'>
          <h3>Data</h3>
      <Slider className='slider' {...settings}>
        <div className='charts' >
          {chartData && <LineChart />}
        </div>
        <div >
          {chartData && <BarChart />}
        </div>
        <div >
          {chartData && <Area />}
        </div>
        <div >
          {chartData && <PieChart />}
        </div>
        
        <div >
          {chartData && <RadarChart />}
        </div>
      </Slider>
      </div>
      </div>
    </div>
  );
};

export default App;
