import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';

const ChartComponent = () => {
    const [chartData, setChartData] = useState({
        options: {
            chart: {
                type: 'bar'
            },
            xaxis: {
                categories: []
            }
        },
        series: []
    });

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = async (event) => {
            const csvData = event.target.result;

            // Parse the CSV data into an array of objects
            const dataArray = csvData.split('\n').map(line => {
                const [city, month, sales] = line.split('\t').map(item => item.trim());
                return { city, month, sales: parseFloat(sales) };
            });

            // Group data by city and month
            const dataByCityAndMonth = {};
            dataArray.forEach(item => {
                if (!dataByCityAndMonth[item.city]) {
                    dataByCityAndMonth[item.city] = {};
                }
                dataByCityAndMonth[item.city][item.month] = item.sales;
            });

            // Prepare series data for ApexCharts
            const seriesData = Object.keys(dataByCityAndMonth).map(city => ({
                name: city,
                data: Object.values(dataByCityAndMonth[city])
            }));

            // Extract x-axis labels
            const categories = Object.keys(dataByCityAndMonth['Karnataka']); // Assuming all cities have the same months

            // Set the chart data
            setChartData({
                options: {
                    chart: {
                        type: 'bar'
                    },
                    xaxis: {
                        categories: categories
                    }
                },
                series: seriesData
            });
        };

        reader.readAsText(file);
    };

    return (
        <div>
            <input type="file" onChange={handleFileUpload} accept=".csv" />
            <div id="chart">
                {chartData.series.length > 0 && (
                    <ApexCharts options={chartData.options} series={chartData.series} type="bar" height={350} />
                )}
            </div>
        </div>
    );
};

export default ChartComponent;
