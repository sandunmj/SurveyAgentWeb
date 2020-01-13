
import { colors } from '@material-ui/core';

export const data = {
  labels: ['question 1', 'question  2', 'question  3', 'question  4', 'question  5', 'question  5'],
  datasets: [
    {
      label: 'HR',
      backgroundColor: "#8601af",
      data: [18, 5, 19, 27, 29, 19, 20]
    },
    {
      label: 'Marketing',
      backgroundColor: "#90ee90",
      data: [11, 9, 15, 22, 13, 25, 13]
    },
    {
      label: 'Finance',
      backgroundColor: "#B5651D",
      data: [15, 12, 11, 29, 24, 22, 23]
    },
    {
      label: 'Engineering',
      backgroundColor:  "#33ACFF",
      data: [7, 10, 17, 25, 18, 15, 33]
    },{
      label: 'Support',
      backgroundColor: "#FF9633",
      data: [23, 16, 27, 2, 8, 13, 3]
    },
    {
      label: 'DevOps',
      backgroundColor: colors.yellow[300],
      data: [5, 26, 7, 15, 28, 5, 3]
    }
  ]
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: true,
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
