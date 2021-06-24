import Highcharts from 'highcharts';
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/export-data')(Highcharts);

export const defualtChartOptions = Highcharts.setOptions({
  chart: {
    type: 'area',
    scrollablePlotArea: {
      minWidth: 420,
      scrollPositionX: 1,
    },
  },
  title: {
    style: {
      fontSize: '16px',
      fontWeight: '600',
    },
  },
  xAxis: {
    type: 'datetime',
    labels: {
      overflow: 'justify',
      format: '{value:%m/%d}',
    },
  },

  yAxis: {
    title: { text: null },
  },

  legend: {
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'bottom',
    x: 0,
    y: 0,
  },

  tooltip: {
    xDateFormat: '%Y년 %m월 %d일',
    shared: true,
    headerFormat: '<span style="font-size: 0.8rem">{point.key}</span><br/>',
    style: {
      fontSize: '14px',
    },
  },

  plotOptions: {
    spline: {
      lineWidth: 2,
      states: {
        hover: {
          lineWidth: 5,
        },
      },
    },
    series: {
      events: {
        legendItemClick: function () {
          return this.chart.series.some((s) =>
            this === s ? !s.visible : s.visible
          );
        },
      },
      marker: {
        enabled: false,
      },
      tooltip: {
        valueSuffix: ' 명',
      },
    },
  },

  exporting: {
    buttons: {
      contextButton: {
        enabled: false,
      },
    },
  },

  lang: {
    thousandsSep: ',',
    numericSymbols: ['만', '백만', 'G', 'T', 'P', 'E'],
    numericSymbolMagnitude: 10000,
  },

  credits: {
    enabled: false,
  },

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 420,
        },
      },
    ],
  },
});
