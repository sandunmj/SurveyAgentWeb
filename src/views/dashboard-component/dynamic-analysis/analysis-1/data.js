
import { colors } from '@material-ui/core';

export const data = {
  labels: ['HR', 'Marketing', 'Finance', 'Engineering', 'Support', 'DevOps'],
  datasets: [
    {
      label: 'age 20-25',
      backgroundColor: "#8601af",
      data: [18, 5, 19, 27, 29, 19, 20]
    },
    {
      label: 'age 25-30',
      backgroundColor: "#90ee90",
      data: [11, 9, 15, 22, 13, 25, 13]
    },
    {
      label: 'age 30-35',
      backgroundColor: "#B5651D",
      data: [15, 12, 11, 29, 24, 22, 23]
    },
    {
      label: 'age 35-40',
      backgroundColor: "#33ACFF",
      data: [7, 10, 17, 25, 18, 15, 33]
    },{
      label: 'age 40-45',
      backgroundColor:  "#FF9633",
      data: [23, 16, 27, 2, 8, 13, 3]
    }
  ]
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: true,
            position:"bottom" },
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
