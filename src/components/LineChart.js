import React, { useState } from 'react';
import Papa from 'papaparse'; // Library for parsing CSV
import Chart from 'react-apexcharts'; // ApexCharts wrapper for React

const ChartComponent = () => {
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== 'text/csv') {
      setError('Please select a valid CSV file.');
      return;
    }

    setError(null);

    try {
      const csvData = await readFile(file);
      const parsedData = Papa.parse(csvData, { header: true });
      console.log('Parsed Data:', parsedData.data);
      setChartData(parsedData.data);
    } catch (err) {
      setError('Error reading file.');
    }
  };

  const readFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        resolve(event.target.result);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsText(file);
    });
  };

  console.log('Chart Data:', chartData);

  return (
    <div>
      <input type="file" accept="text/csv" onChange={handleFileUpload} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {chartData && chartData.length > 0 ? (
        <Chart
          options={{
            chart: {
              type: 'area', // Change chart type to line
            },
            xaxis: {
              categories: chartData.map((item) => item.category),
            },
            stroke: {
              curve: 'smooth', // Smooth curve for lines
              width: 4, // Set the width of the lines
            },
            legend: {
              position: 'bottom',
            },
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
  );
};

export default ChartComponent;
