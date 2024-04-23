import React from 'react';
import "../Component.css";

const Facts = ({salesData}) => {
  if (!salesData || salesData.length === 0) {
    return <div>Loading...</div>; 
  }


  const categoryAnalysis = Object.keys(salesData[0]).map(categoryName => {
    const categoryData = salesData[0][categoryName];
    const max = calculateMaxSales(categoryData);
    const min = calculateMinSales(categoryData);
    const average = calculateAverageSales(categoryData);

    return (
      <div className="card mb-3" key={categoryName}>
        <div className="card-header" style={{ backgroundColor: 'transparent' }}>{categoryName}</div>
        <div className="card-body">
          <p className="card-text">Maximum: {max.value}</p>
          <p className="card-text">Maximum Month: {max.month}</p>
          <p className="card-text">Minimum: {min}</p>
          <p className="card-text">Average: {average.toFixed(2)}</p>
        </div>
      </div>
    );
  });

  return (
    <div className='analyse'>
      <div className='data-heading'>
      <h1 style={{marginBottom:"5%"}}>Analyse</h1>
      </div>
      <div className='data-box'>
      {categoryAnalysis}
      </div>
    </div>
  );
};

// Function to calculate maximum sales and corresponding month
const calculateMaxSales = (data) => {
  let maxSales = { value: 0, month: '' };
  data.forEach(item => {
    if (item.data > maxSales.value) {
      maxSales.value = item.data;
      maxSales.month = item.month;
    }
  });
  return maxSales;
};

// Function to calculate minimum sales
const calculateMinSales = (data) => {
  return Math.min(...data.map(item => item.data));
};

// Function to calculate average sales
const calculateAverageSales = (data) => {
  const totalSales = data.reduce((total, item) => total + item.data, 0);
  return totalSales / data.length;
};

export default Facts;
