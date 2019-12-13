
import { colors } from '@material-ui/core';

export const data = {
  labels: ['HR', 'Marketing', 'Finance', 'Engineering', 'Support', 'DevOps'],
  datasets: [
    {
      label: 'category 1',
      backgroundColor: colors.indigo[500],
      data: [18, 5, 19, 27, 29, 19, 20]
    },
    {
      label: 'category 2',
      backgroundColor: colors.brown[600],
      data: [11, 9, 15, 22, 13, 25, 13]
    },
    {
      label: 'category 3',
      backgroundColor: colors.green[500],
      data: [15, 12, 11, 29, 24, 22, 23]
    },
    {
      label: 'category 4',
      backgroundColor: colors.lightBlue[600],
      data: [7, 10, 17, 25, 18, 15, 33]
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
        barThickness: 12,
        maxBarThickness: 10,
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
