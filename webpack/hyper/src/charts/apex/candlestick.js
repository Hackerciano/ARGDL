/**
 * Theme: Hyper - Responsive Bootstrap 4 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Apex Candlestick Charts
 */

import * as ApexCharts from 'apexcharts/dist/apexcharts';
import '../../core/hyper';

import ApexDummyData from './data';

class ApexCandlestick {
  constructor() {}

  /**
   * Initilizes the charts
   */
  initCharts() {
    var options = {
      chart: {
        height: 400,
        type: 'candlestick',
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#0acf97',
            downward: '#fa5c7c',
          },
        },
      },
      series: [
        {
          data: ApexDummyData.seriesData,
        },
      ],

      stroke: {
        show: true,
        colors: '#f1f3fa',
        width: [1, 4],
      },
      xaxis: {
        type: 'datetime',
      },
      grid: {
        borderColor: '#f1f3fa',
      },
    };

    var chart = new ApexCharts(
      document.querySelector('#simple-candlestick'),
      options
    );

    chart.render();

    var optionsCandlestick = {
      chart: {
        height: 240,
        type: 'candlestick',
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      series: [
        {
          data: ApexDummyData.seriesData,
        },
      ],
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#0acf97',
            downward: '#fa5c7c',
          },
        },
      },
      xaxis: {
        type: 'datetime',
      },
      grid: {
        borderColor: '#f1f3fa',
      },
    };

    var chartCandlestick = new ApexCharts(
      document.querySelector('#combo-candlestick'),
      optionsCandlestick
    );

    chartCandlestick.render();

    options = {
      chart: {
        height: 160,
        type: 'bar',
        toolbar: {
          show: false,
          autoSelected: 'selection',
        },
        selection: {
          xaxis: {
            min: new Date('20 Jan 2017').getTime(),
            max: new Date('10 Dec 2017').getTime(),
          },
          fill: {
            color: '#6c757d',
            opacity: 0.4,
          },
          stroke: {
            color: '#6c757d',
          },
        },
        events: {
          selection: function(chart, e) {
            chartCandlestick.updateOptions(
              {
                xaxis: {
                  min: e.xaxis.min,
                  max: e.xaxis.max,
                },
              },
              false,
              false
            );
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          columnWidth: '80%',
          colors: {
            ranges: [
              {
                from: -1000,
                to: 0,
                color: '#727cf5',
              },
              {
                from: 1,
                to: 10000,
                color: '#ffbc00',
              },
            ],
          },
        },
      },
      series: [
        {
          name: 'volume',
          data: ApexDummyData.seriesDataLinear,
        },
      ],
      xaxis: {
        type: 'datetime',
        axisBorder: {
          offsetX: 13,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      grid: {
        borderColor: '#f1f3fa',
      },
    };

    chart = new ApexCharts(
      document.querySelector('#combo-bar-candlestick'),
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
var apexCandlestick = new ApexCandlestick();
apexCandlestick.init();
