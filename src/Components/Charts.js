import React, { useState } from 'react';
import LineChart from '../Charts/LineChart';
import { salesData } from '../data';
import PieChart from '../Charts/PieChart';
import Facts from '../Charts/Facts';
import "../Component.css"
import BarChart from '../Charts/BarChart';
import RadarChart from '../Charts/RadarChart';
import Area from '../Charts/Area';




const Charts = () => {
  const [selectedChart, setSelectedChart] = useState('LineChart');
  const [chartData, setChartData] = useState(salesData);

  const handleChartClick = (chartType) => {
    setSelectedChart(chartType);
  };

  const renderChart = () => {
    switch (selectedChart) {
      case 'LineChart':
        return <LineChart />;
      case 'BarChart':
        return <BarChart />;
      case 'Area':
        return <Area />;
      case 'PieChart':
        return <PieChart />;
      case 'RadarChart':
        return <RadarChart />;
      default:
        return null;
    }
  };

  return (
    <div className="Home">
      <div className='wrapper'>
        <div>
          <Facts salesData={salesData} />
        </div>
           <div className='chart-container'>

            <div className='bar-chart' >
              <BarChart/>
            </div>
              <div className='chart-selection-container'> 
              <div className="chart-selection">
          <img src="/Line.png" alt="Line Chart" onClick={() => handleChartClick('LineChart')} />
          <img src="/Area.png" alt="Area Chart" onClick={() => handleChartClick('Area')} />
          <img src="/Radar.png" alt="Radar Chart" onClick={() => handleChartClick('RadarChart')} />
     </div>
    <div className="selected-chart">
        {selectedChart && renderChart()}
     </div>
              </div>

            </div> 
      </div>
    </div>
  );
};

export default Charts;
