import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
  const [chartData, setChartData] = React.useState({
    series: [
      {
        name: 'Session Duration',
        data: [45, 52, 42, 45, 35, 26, 21, 30, 20, 55, 15, 40],
      },
      {
        name: 'Page Views',
        data: [35, 41, 62, 30, 45, 18, 40, 20, 36, 51, 32, 35],
      },
    ],
    options: {
      chart: {
        foreColor: '#d2d5d8',
        height: 250,
        type: 'line',
        zoom: {
          enabled: false,
        },
        toolbar:{
          show: false
        }
      },
      colors: ['#686bb1','#73d9ee'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [2,2],
        curve: 'straight',
        dashArray: [0, 0],
        colors:['#686bb1','#73d9ee']
      },
      title: {
        text: '',
        align: 'left',
      },
      legend: {
        position:'top',
        tooltipHoverFormatter: function (val, opts) {
          return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '';
        },
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
        categories: [
          '02 Jan',
          '03 Jan',
          '04 Jan',
          '05 Jan',
          '06 Jan',
          '07 Jan',
          '08 Jan',
          '09 Jan',
          '10 Jan',
          '11 Jan',
          '12 Jan',
        ],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val) {
                return val + ' (mins)';
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return val + ' per session';
              },
            },
          },
        
        ],
      },
      grid: {
        borderColor: '#f1f1f1',
      },
      export: {
        enabled: false, // Disable the download icon
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={210}
      />
    </div>
  );
};

export default LineChart;
