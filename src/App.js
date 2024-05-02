import React, { useState } from 'react';
import LineChart from './components/LineChart';
import { salesData } from './data';
import PieChart from './components/PieChart';
import Facts from './components/Facts';
import "./Component.css"
import BarChart from './components/BarChart';
import RadarChart from './components/RadarChart';
import Area from './components/Area';
import ChartComponent from './components/ChartComponent';


const App = () => {
  const [selectedChart, setSelectedChart] = useState('LineChart');
  const [chartData, setChartData] = useState(salesData);

  const handleChange = (event) => {
    setSelectedChart(event.target.value);
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
      <div className='heading'>
        <h1>Visualize</h1>
      </div>
      <div className='wrapper'>
        <div className='Analyse'>
          <Facts salesData={salesData} />
        </div>
        <div className='ChartBox'>
          <h3>Data</h3>
          
          <select value={selectedChart} onChange={handleChange} className="chart-select">
          <option value="LineChart" className="chart-option" style={{ backgroundImage: `url(/Line.png)` }}>
        Line Chart
            </option>
            <option value="BarChart" className="chart-option" >
              Bar Chart </option>
            <option value="Area" className="chart-option" style={{ backgroundImage: `url(/Line.png)` }}>
              Area Chart
            </option>
            <option value="PieChart" className="chart-option" style={{ backgroundImage: `url(/Line.png)` }}>
             Pie Chart
            </option>
            <option value="RadarChart" className="chart-option" style={{ backgroundImage: `url(/Line.png)` }}>
               Radar Chart
            </option>
          </select>
          <div className='charts'>
            {chartData && renderChart()}
          </div>
        </div>
      </div>
      <ChartComponent/>
    </div>
  );
};

export default App;
