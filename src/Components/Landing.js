import React, { useState } from 'react';
import ChartComponent from '../Charts/ChartComponent';

const Landing = () => {
  const [csvData, setCsvData] = useState(null); 

  const handleDataUpload = (data) => {
    setCsvData(data);
   
    document.getElementById('chart-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className='landing'>
        <div className='landing-image'>
          <img src="LandingImage.svg" alt="Analyse" />
        </div>
        <div className="landing-container">
          <h2>Unlock Insights, Leverage Data with Powerful Analytics.</h2>
          <p>Empower your business with actionable insights. Our powerful analytics platform transforms raw data into valuable information, enabling informed strategies and smarter decisions.</p>
          <UploadForm onUpload={handleDataUpload} />
        </div>
      </div>
      {csvData && <ChartComponent data={csvData} />}
    </div>
  );
}

const UploadForm = ({ onUpload }) => {
    const [fileName, setFileName] = useState(""); // State to hold selected file name
  
    const handleFileUpload = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
  
      if (file.type !== 'text/csv') {
        alert('Please select a valid CSV file.');
        return;
      }
  
      try {
        setFileName(file.name); // Update the state with selected file name
        const csvData = await readFile(file);
        onUpload(csvData);
      } catch (err) {
        console.error('Error reading file:', err);
        alert('Error reading file.');
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
  
    return (
      <div className="upload-form">
        <label className="custom-file-upload">
          <input type="file" accept="text/csv" onChange={handleFileUpload} />
          Upload CSV File
        </label>
        {/* Display the selected file name */}
        {fileName && <div>Selected file: {fileName}</div>}
      </div>
    );
  };
  
  
export default Landing;
