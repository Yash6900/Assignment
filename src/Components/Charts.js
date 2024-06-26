import React, { useState , useEffect} from 'react';
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
  const [paragraph, setParagraph] = useState('');
  const [revealedText, setRevealedText] = useState('');
  const [showNote, setShowNote] = useState(false);

  const handleSubmit = () => {
    
    setShowNote(true); 
  };

  useEffect(() => {
    const fullParagraph = "Your data represents quarterly sales figures for three types of vehicles: Bikes, Cars, and Trucks. Each vehicle category has sales data recorded for four quarters. By analyzing this data, we can identify trends in sales performance over time for each vehicle type.If you have any further questions about this data or would like more insights, I am here to answer."; 
    setParagraph(fullParagraph);
  }, []);

  useEffect(() => {
    if (revealedText.length < paragraph.length) {
      const intervalId = setInterval(() => {
        setRevealedText(prevText => paragraph.slice(0, prevText.length + 1));
      }, 1); 

      return () => clearInterval(intervalId);
    }
  }, [paragraph, revealedText]);

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
      <div className='fact-container'>
      <Facts salesData={salesData} />
      </div>
      <div className='wrapper'>
          
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
            <div className="loading-text-container">
      <span className="typing-animation">{revealedText}</span>
      <div style={{display:"flex" , flexDirection:"row"}}>
      <input placeholder='For more insights and your questions.... '  className="input-q" type="text" style={{border:"2px solid" , marginTop:"5%", color:"black" , width:"100%"}} />
      <button  className="btn-1" style={{height:"52px" , width:"120px" , marginLeft:"1%" , marginTop:"5%" , borderRadius:"3%", fontSize:"20px"}} onClick={handleSubmit} > Ask</button>
    
      </div>
      {showNote && (
        <p style={{ color: "red", marginTop: "10px" }}>This feature is currently in beta testing.</p>
      )}
    </div>
   </div>

    </div>
  );
};

export default Charts;
