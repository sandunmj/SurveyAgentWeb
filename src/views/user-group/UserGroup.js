import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import GroupCard from './GroupCard';
import UsersTable from './UsersTable';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const UserGroup = () => {
  const classes = useStyles();
  const usersImgUrl = '/assets/company/users.jpg';
  const products = [
    {
      id: 39423,
      title: 'HR',
      description:
        'Mangers, HR emplyees  ',
      imageUrl: usersImgUrl,
      totalDownloads: '594',
      updatedAt: '27/03/2019'
    },
    {
      id: 3423,
      title: 'Management',
      description:
        'CEO, Managers, Tech leads',
      imageUrl: usersImgUrl,
      totalDownloads: '625',
      createdAt: '31/03/2019'
    },
    {
      id: 3243,
      title: 'Engineers',
      description:
        'Engineers, Associative Engineers',
      imageUrl: usersImgUrl,
      totalDownloads: '857',
      createdAt: '03/04/2019'
    },
    {
      id: 342,
      title: 'Tech leads',
      description:
        'Tech leads, Architects',
      imageUrl: usersImgUrl,
      totalDownloads: '406',
      createdAt: '04/04/2019'
    }
  ];

  const users = [{
    id: 757,
    employeeId: 'TA234',
    
    email: 'ekaterina.tankova@devias.io',
    phone: '304-428-3097',
    designation: 'Engineer'
  },
  {
    id: 4543,
    employeeId: 'TA284',
    
    email: 'ekaterina.tankova@devias.io',
    phone: '304-428-3097',
    designation: 'Engineer'
  },
  {
    id: 435,
    employeeId: 'TA134',
    
    email: 'ekaterina.tankova@devias.io',
    phone: '304-428-3097',
    designation: 'Engineer'
  }];
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {products.map(product => (
            <Grid
              item
              key={product.id}
              lg={4}
              md={6}
              xs={12}
            >
              <div onClick={() => console.log(product.id)}>
                <GroupCard product={product} />
              </div>
            </Grid>
          ))}
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <div onClick={() => console.log('new')}>
              <GroupCard product={{
                title: 'New Group',
                description: 'Create new users group',
                imageUrl: '/assets/company/add.jpg',
                totalDownloads: '0'
              }} />
            </div>
          </Grid>
        </Grid>
      </div>

        <div className={classes.content}>
          <UsersTable users={users} />
        </div>
     
    </div>
  );
}
export default UserGroup;