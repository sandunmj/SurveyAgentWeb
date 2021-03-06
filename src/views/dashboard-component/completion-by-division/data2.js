
import { colors } from '@material-ui/core';

export const data = {
  labels: ['HR', 'Marketing', 'Finance', 'Engineering', 'Support', 'DevOps'],
  datasets: [
    {
      label: 'category 2',
      backgroundColor: colors.lightBlue[600],
      data: [11, 9, 15, 22, 13, 25, 13]
    }
  ]
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: false,
    position:"bottom"  },
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
        barThickness: 50,
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
          color: colors.grey[400],
          drawBorder: false,
          
        }
      }
    ]
  }
};

