
import { colors } from '@material-ui/core';

export const data = {
  labels: ['SE', 'SSE', 'Associate TL', 'Tech Lead', ' Team Lead'],
  datasets: [
    {
      label: '0-2 years',
      backgroundColor: "#8601af",
      data: [18, 5, 19, 27, 29, 19, 20]
    },
    {
      label: '2-4 years',
      backgroundColor: "#90ee90",
      data: [11, 9, 15, 22, 13, 25, 13]
    },
    {
      label: '4-6 years',
      backgroundColor: "#B5651D",
      data: [15, 12, 11, 29, 24, 22, 23]
    },
    {
      label: '6-8 years',
      backgroundColor: "#33ACFF",
      data: [7, 10, 17, 25, 18, 15, 33]
    },{
      label: '8-10 years',
      backgroundColor:  "#FF9633",
      data: [23, 16, 27, 2, 8, 13, 3]
    },
    {
      label: '10-12',
      backgroundColor: colors.yellow[400],
      data: [5, 26, 7, 15, 28, 5, 3]
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
