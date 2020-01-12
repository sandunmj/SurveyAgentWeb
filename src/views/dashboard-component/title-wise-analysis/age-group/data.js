
import { colors } from '@material-ui/core';

export const data = {
  labels: ['category 1', 'category 2', 'category 3', 'category 4', 'category 5', 'category 5'],
  datasets: [
    {
      label: '15-25',
      backgroundColor: colors.indigo[500],
      data: [18, 5, 19, 27, 29, 19, 20]
    },
    {
      label: '25-35',
      backgroundColor: colors.red[600],
      data: [11, 9, 15, 22, 13, 25, 13]
    },
    {
      label: '35-45',
      backgroundColor: colors.green[500],
      data: [15, 12, 11, 29, 24, 22, 23]
    },
    {
      label: '45-55',
      backgroundColor: colors.yellow[500],
      data: [5, 13, 1, 19, 13, 12, 3]
    },
    {
      label: '55-65',
      backgroundColor: colors.blue[600],
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
        
        ticks: {
          fontColor: colors.blueGrey[600]
        },
        gridLines: {
          display: true,
          drawBorder: true
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
          drawBorder: true,
         
        }
      }
    ]
  }
};
