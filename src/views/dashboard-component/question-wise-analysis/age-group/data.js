
import { colors } from '@material-ui/core';

export const data = {
  labels: ['15-25', '25-35', '35-45', '45-55', '55-65'],
  datasets: [
    {
      label: 'category 3',
      backgroundColor: colors.lightBlue[600],
      data: [15, 12, 11, 29, 24, 22, 23]
    }
  ]
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: false },
  cornerRadius: 20,
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: colors.grey[200],
    backgroundColor: '#FFFFFF',
    titleFontColor: colors.blueGrey[900],
    bodyFontColor: colors.blueGrey[600],
    footerFontColor: colors.blueGrey[600]
  },
  layout: { padding: 0 },
  scales: {
    xAxes: [
      {
        barThickness: 30,
        maxBarThickness: 50,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        ticks: {
          fontColor: colors.blueGrey[600]
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: colors.blueGrey[600],
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: colors.grey[200],
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: colors.grey[200]
        }
      }
    ]
  }
};
