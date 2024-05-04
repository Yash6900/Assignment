import React, {  useRef, useState } from 'react';
import ChartComponent from '../Charts/ChartComponent';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';

const Landing = () => {
  const dismissButtonRef = useRef(null);

  const handleLinkClick = () => {
    if (dismissButtonRef.current) {
      dismissButtonRef.current.click();
    }
  };
  
  return (
    <div>   
       <Header/>
      <div className='landing'>
        <div className='landing-image'>
          <img src="LandingImage.svg" alt="Analyse" />
        </div>
        <div className="landing-container">
          <h2>Unlock Insights, Leverage Data with Powerful Analytics.</h2>
          <p>Empower your business with actionable insights. Our powerful analytics platform transforms raw data into valuable information, enabling informed strategies and smarter decisions.</p>
          <div className="upload-form">
       
          <button type="button" class="btn-m" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Get Started
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Data Upload</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={dismissButtonRef}></button>
      </div>
      <div class="modal-body">
        <UploadForm/>
        <p className="note">This feature is in testing mode and is current not working <Link to="/chart" onClick={handleLinkClick}>Click here</Link> to check out the sample data.</p>
      </div>
      
    </div>
  </div>
</div>
       
      </div>

 
        </div>
      </div>

      
    </div>
  );
}

const UploadForm = () => {



   

    return (
  
      <div className="upload-form">
        <label className="custom-file-upload">
          <input type="file" accept="csv" />
          Upload CSV File
        </label>
        
      </div>
      
    )
  };
  
  
export default Landing;
