import React, { useState, useEffect } from 'react'; // Import useEffect
import Chart from 'react-apexcharts'; // ApexCharts wrapper for React
import Papa from 'papaparse';

const ChartComponent = ({ data }) => {
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (data) {
      handleChartData(data);
    }
  }, [data]);

  const handleChartData = (csvData) => {
    try {
      const parsedData = Papa.parse(csvData, { header: true });
      console.log('Parsed Data:', parsedData.data);
      setChartData(parsedData.data);
    } catch (err) {
      setError('Error parsing CSV data.');
    }
  };

  return (
    <div id="chart-section">
      <div className='s-page'>
        <div className='s-content'>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {chartData && chartData.length > 0 ? (
            <Chart
              type='bar'
              options={{
                xaxis: {
                  categories: chartData.map((item) => item.category), // Set categories
                },
                stroke: {
                  curve: 'smooth', // Smooth line
                  width: 2, // Line width
                },
                legend: {
                  position: 'bottom',
                },
                tooltip: {
                  followCursor: true,
                },
                fill: {
                  type: "solid"
                }
              }}
              series={[
                {
                  name: 'May Sales',
                  data: chartData.map((item) => parseInt(item.sales)),
                },
                {
                  name: 'April Sales',
                  data: chartData.map((item) => parseInt(item.sales2)),
                },
              ]}
              width="500"
            />
          ) : (
            <p>No data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
