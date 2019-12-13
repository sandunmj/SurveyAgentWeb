import uuid from 'uuid/v1';
import moment from 'moment';

export default {data:[
  {
    id: uuid(),
    name: 'HR',
    progress: '33.5',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Finance',
    progress: '13.5',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Marketing',
    progress: '73.5',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuid(),
    name: 'Engineering',
    progress: '93.5',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuid(),
    name: 'Support',
    progress: '33.5',
    updatedAt: moment().subtract(9, 'hours')
  }, {
    id: uuid(),
    name: 'Sales',
    progress: '43.5',
    updatedAt: moment().subtract(5, 'hours')
  }, {
    id: uuid(),
    name: 'DevOps',
    progress: '50.5',
    updatedAt: moment().subtract(5, 'hours')
  }
]};
