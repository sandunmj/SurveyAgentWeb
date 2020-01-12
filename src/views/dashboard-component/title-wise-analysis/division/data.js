
import { colors } from '@material-ui/core';

export const data = {
  labels: ['category 1', 'category 2', 'category 3', 'category 4', 'category 5', 'category 5'],
  datasets: [
    {
      label: 'HR',
      backgroundColor: colors.indigo[500],
      data: [18, 5, 19, 27, 29, 19, 20]
    },
    {
      label: 'Marketing',
      backgroundColor: colors.red[400],
      data: [11, 9, 15, 22, 13, 25, 13]
    },
    {
      label: 'Finance',
      backgroundColor: colors.green[500],
      data: [15, 12, 11, 29, 24, 22, 23]
    },
    {
      label: 'Engineering',
      backgroundColor: colors.lightBlue[600],
      data: [7, 10, 17, 25, 18, 15, 33]
    },{
      label: 'Support',
      backgroundColor: colors.red[600],
      data: [23, 16, 27, 2, 8, 13, 3]
    },
    {
      label: 'DevOps',
      backgroundColor: colors.yellow[600],
      data: [5, 26, 7, 15, 28, 5, 3]
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
