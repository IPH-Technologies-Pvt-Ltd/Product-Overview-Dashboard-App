import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import ShareableData from './ShareableData';

const AreaChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'series1',
        data: [20, 40, 22, 40, 25, 40, 20],

      },
      {
        name: 'series2',
        data: [10, 30, 22, 28, 20, 28, 18],

      },
    ],
    options: {
      chart: {
        foreColor: '#d2d5d8',
        height: 250,
        type: 'area',
        background: '#fff',
        toolbar:{
          show: false
        }
      },
      colors: ['#293595', '#4ebee0'],

      legend:{
        position:"top"
      },
      dataLabels: {
        enabled: false,
        
      },
      stroke: {
        curve: 'smooth',
        width:[0,0],
        tension: 0.9, // Adjust the tension here (0.5 is the default, you can change it as needed)

      },
      xaxis: {
        type: 'datetime',
        backgroundColor:'red', 
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      fill: {
        colors: ['#293595', '#4ebee0'],
        type: 'solid',

        gradient: {
            shade: 'white',
            type: "horizontal",
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0,
            opacityTo: 0,
            stops: [0, 0, 0],
            colorStops: []
        },
        image: {
            src: [],
            width: undefined,
            height: undefined
        },
        pattern: {
            style: 'verticalLines',
            width: 6,
            height: 6,
            strokeWidth: 2,
        },
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  });

  return (
    <div id="chart">
    <ShareableData />
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={215}
      />
    </div>
  );
};

export default AreaChart;
