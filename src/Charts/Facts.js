import React from 'react';
import "../Component.css";

const Facts = ({salesData}) => {
  if (!salesData || salesData.length === 0) {
    return <div>Loading...</div>; 
  }
  const totalSales = Object.values(salesData[0]).reduce((total, category) => {
    return total + category.reduce((categoryTotal, item) => {
      return categoryTotal + item.Ydata;
    }, 0);
  }, 0);

  const categoryAnalysis = Object.keys(salesData[0]).map(categoryName => {
    const categoryData = salesData[0][categoryName];
    const max = calculateMaxSales(categoryData);
    const min = calculateMinSales(categoryData);
    const average = calculateAverageSales(categoryData);
    const tot = calculateTotalSales(categoryData);

    return (

      <div className=' col-md-4' key={categoryName}>
      <div className="card" >
        <div className="card-header">{categoryName}</div>
        <div className="card-body">
          <p className="card-text">Maximum: {max.value} <br />in {max.Xdata}</p>
          <p className="card-text">Minimum: {min.value} <br />in {min.Xdata}</p>
          <p className="card-text">Total Sales: {tot} <br /></p>
        </div>
      </div>
     

      </div>
    );
  });

  return (
    <div className='analyse'>
       <img src="FactsImage.svg" alt="Analyse" />
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


const calculateTotalSales = (data) => {
  const totalSales = data.reduce((total, item) => total + item.Ydata, 0);
  return totalSales;
};

export default Facts;
