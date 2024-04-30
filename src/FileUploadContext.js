import React, { createContext, useContext, useState } from 'react';
import Papa from 'papaparse';

const FileUploadContext = createContext();

export const useFileUpload = () => useContext(FileUploadContext);

export const FileUploadProvider = ({ children }) => {
  const [jsonData, setJsonData] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (file) => {
      setUploading(true);
      
      try {
          const result = await parseCsv(file);
          const formattedData = parseCsvToJson(result.data);
          setJsonData(formattedData);
      } catch (error) {
          console.error('Error parsing CSV:', error);
      } finally {
          setUploading(false);
      }
  };

  const parseCsv = (file) => {
      return new Promise((resolve, reject) => {
          Papa.parse(file, {
              complete: (result) => {
                  resolve(result);
              },
              error: (error) => {
                  reject(error);
              }
          });
      });
  };

  const parseCsvToJson = (csvData) => {
      const headers = csvData[0];
      const jsonData = [];

      for (let i = 1; i < csvData.length; i++) {
          const row = csvData[i];
          const obj = {};

          for (let j = 0; j < headers.length; j++) {
              obj[headers[j]] = row[j];
          }

          jsonData.push(obj);
      }

      // Convert to the dynamic format
      const formattedData = {};
      headers.forEach((header, index) => {
          if (index !== 0) {
              jsonData.forEach(item => {
                  const category = item[headers[0]];
                  const month = item[header];

                  if (!formattedData[header]) {
                      formattedData[header] = [];
                  }

                  formattedData[header].push({ category, month, value: parseInt(item[header + 1]) });
              });
          }
      });

      return formattedData;
  };

  return (
      <FileUploadContext.Provider value={{ jsonData, handleFileUpload, uploading }}>
          {children}
      </FileUploadContext.Provider>
  );
};
