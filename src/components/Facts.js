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
          <p className="card-text">Maximum: {max.value} <br />in {max.Xdata}</p>
         
          <p className="card-text">Minimum: {min.value} <br />in {min.Xdata}</p>
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


const calculateMaxSales = (data) => {
  let maxSales = { value: 0, Xdata: '' };
  data.forEach(item => {
    if (item.Ydata > maxSales.value) {
      maxSales.value = item.Ydata;
      maxSales.Xdata = item.Xdata;
    }
  });
  return maxSales;
};


const calculateMinSales = (data) => {
  let minSales = { value: Infinity, Xdata: '' }; 
  data.forEach(item => {
    if (item.Ydata < minSales.value) {
      minSales.value = item.Ydata;
      minSales.Xdata = item.Xdata;
    }
  });
  return minSales;
};



const calculateAverageSales = (data) => {
  const totalSales = data.reduce((total, item) => total + item.Ydata, 0);
  return totalSales / data.length;
};

export default Facts;
