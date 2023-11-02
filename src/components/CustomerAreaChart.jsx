import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import ShareableCustomerData from './ShareableCustomerData';

const CustomerAreaChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Network',
        data: [
          {
            x: 'Dec 23 2017',
            y: 0,
          },
          {
            x: 'Dec 24 2017',
            y: 44,
          },
          {
            x: 'Dec 25 2017',
            y: 0,
          },
          {
            x: 'Dec 26 2017',
            y: 55,
          },
          {
            x: 'Dec 27 2017',
            y: 0,
          },
          {
            x: 'Dec 28 2017',
            y: 0,
          },
          {
            x: 'Dec 29 2017',
            y: 60,
          },
          {
            x: 'Dec 30 2017',
            y: 0,
          },
          {
            x: 'Dec 31 2017',
            y: 0,
          },
          {
            x: 'Jan 01 2018',
            y: 22,
          },
          {
            x: 'Jan 02 2018',
            y: 34,
          },
          {
            x: 'Jan 03 2018',
            y: 0,
          },
          {
            x: 'Jan 04 2018',
            y: 0,
          },
        ],
      },
    ],
    options: {
      chart: {
        type: 'area',
        height: 215,
        animations: {
          enabled: false,
        },
        zoom: {
          enabled: false,
        },
        toolbar:{
          show: false
        }
      },
      colors:['#686bb1','#73d9ee'],
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'center', 
        floating: false,
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial',
        fontWeight: 400,
    },  
      dataLabels: {
        style: {
          colors: ['#F44336', '#E91E63', '#9C27B0']
        },
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: [1, 1],
        dashArray: [0, 0],
        colors:['#686bb1','#73d9ee']
      },
      fill: {
        
        colors:['#686bb1','#73d9ee'],

        opacity: 0.9,
        type: 'solid',
        pattern: {
          style: ['#686bb1', '#73d9ee'],
          width: 5,
          height: 6,
        },
      },
      markers: {
        size: 0,
        hover: {
          size: 9,
        },
      },
      title: {
        text: '',
      },
      tooltip: {
        intersect: true,
        shared: false,
      },
      theme: {
        palette: 'palette1',
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        title: {
          text: '',
        },
      },
    },
  });

  return (
    <div>
    <ShareableCustomerData />
      <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={215} />
    </div>
  );
};

export default CustomerAreaChart;
