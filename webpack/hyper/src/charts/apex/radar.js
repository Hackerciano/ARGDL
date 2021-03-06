/**
 * Theme: Hyper - Responsive Bootstrap 4 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Apex Radar Charts
 */

import * as ApexCharts from 'apexcharts/dist/apexcharts';
import '../../core/hyper';

class ApexRadar {
  constructor() {}

  /**
   * Initilizes the charts
   */
  initCharts() {
    //
    // BASIC RADAR CHART
    //

    var options = {
      chart: {
        height: 350,
        type: 'radar',
      },
      series: [
        {
          name: 'Series 1',
          data: [80, 50, 30, 40, 100, 20],
        },
      ],
      colors: ['#727cf5'],
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    };

    var chart = new ApexCharts(document.querySelector('#basic-radar'), options);

    chart.render();

    //
    // RADAR WITH POLYGON-FILL
    //

    options = {
      chart: {
        height: 350,
        type: 'radar',
      },
      series: [
        {
          name: 'Series 1',
          data: [20, 100, 40, 30, 50, 80, 33],
        },
      ],
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      plotOptions: {
        radar: {
          size: 140,
        },
      },
      colors: ['#FF4560'],
      markers: {
        size: 4,
        colors: ['#fff'],
        strokeColor: '#FF4560',
        strokeWidth: 2,
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val;
          },
        },
      },
      yaxis: {
        tickAmount: 7,
        labels: {
          formatter: function(val, i) {
            if (i % 2 === 0) {
              return val;
            } else {
              return '';
            }
          },
        },
      },
    };

    chart = new ApexCharts(document.querySelector('#radar-polygon'), options);

    chart.render();

    //
    // RADAR – MULTIPLE SERIES
    //
    options = {
      chart: {
        height: 350,
        type: 'radar',
      },
      series: [
        {
          name: 'Series 1',
          data: [80, 50, 30, 40, 100, 20],
        },
        {
          name: 'Series 2',
          data: [20, 30, 40, 80, 20, 80],
        },
        {
          name: 'Series 3',
          data: [44, 76, 78, 13, 43, 10],
        },
      ],
      stroke: {
        width: 0,
      },
      fill: {
        opacity: 0.4,
      },
      markers: {
        size: 0,
      },
      legend: {
        offsetY: -10,
      },
      colors: ['#727cf5', '#02a8b5', '#fd7e14'],
      labels: ['2011', '2012', '2013', '2014', '2015', '2016'],
    };

    chart = new ApexCharts(
      document.querySelector('#radar-multiple-series'),
      options
    );

    chart.render();
  }

  /**
   * Initilizes the chart
   */
  init() {
    this.initCharts();
  }
}

// init
var apexRadar = new ApexRadar();
apexRadar.init();
