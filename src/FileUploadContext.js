import React, { createContext, useState, useContext } from 'react';
import { parse } from 'papaparse';

const FileUploadContext = createContext();

export const useFileUpload = () => useContext(FileUploadContext);

export const FileUploadProvider = ({ children }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedData, setUploadedData] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsText(selectedFile, 'UTF-8');
      reader.onload = function (event) {
        const content = event.target.result;
        parse(content, {
          complete: (result) => {
            // Set the parsed CSV data to the context
            setUploadedData(result.data);
          },
          error: (error) => {
            console.error('Error parsing CSV:', error);
          },
        });
      };
      reader.onerror = function (event) {
        console.error('File could not be read! Code ' + event.target.error.code);
      };
    } else {
      console.error('No file selected');
    }
  };

  const initialState = {
    selectedFile,
    handleFileChange,
    handleUpload,
    uploadedData,
  };

  return (
    <FileUploadContext.Provider value={initialState}>
      {children}
    </FileUploadContext.Provider>
  );
};
