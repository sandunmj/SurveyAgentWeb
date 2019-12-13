
import { colors } from '@material-ui/core';

export const data = {
  labels: ['Location 1', 'Location 2', 'Location 3', 'Location 4', 'Location 5'],
  datasets: [
    {
      backgroundColor: colors.lightBlue[600],
      data: [18, 5, 19, 27, 29, 19, 20]
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
