import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import QueueIcon from '@material-ui/icons/Queue';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SettingsIcon from '@material-ui/icons/Settings';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import TimelineIcon from '@material-ui/icons/Timeline';

import { Profile, SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Home',
      href: '/home',
      icon: <DashboardIcon />
    },
    {
      title: 'User Group',
      href: '/usergroup',
      icon: <PeopleIcon />
    },
    // {
    //   title: 'User Profile',
    //   href: '/userprofile',
    //   icon: <RecentActorsIcon />
    // },
    {
      title: 'Surveys',
      href: '/surveys',
      icon: <LibraryBooksIcon />
    },
    {
      title: 'New Survey',
      href: '/newsurvey',
      icon: < QueueIcon/>
    },
    {
      title: 'DashBoard',
      href: '/dashboard',
      icon: <TimelineIcon />
    }
    // ,{
    //   title: 'Settings',
    //   href: '/settings',
    //   icon: <SettingsIcon />
    // }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
