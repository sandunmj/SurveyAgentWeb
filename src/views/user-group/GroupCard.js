import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Grid,
    Divider
} from '@material-ui/core';

const GroupCard = props => {
    const { className, group, ...rest } = props;

    const classes = useStyles();

    return (
        <Card
        
            {...rest}
            className={clsx(classes.root, className)}

        >
            <CardContent>
                <div className={classes.imageContainer}>
                    <img
                        alt="Product"
                        className={classes.image}
                        src={"/assets/company/users.jpg"}
                    />
                </div>
                <Typography
                    align="center"
                    gutterBottom
                    variant="h4"
                >
                    {group.title}
                </Typography>
                <Typography
                    align="center"
                    variant="body1"
                >
                    {group.description}
                </Typography>
            </CardContent>
            <Divider />
            <CardContent>
                    <Typography
                        align="center"
                        variant="body2">
                        {group.emailList.length} Members
                           </Typography>

            </CardContent>
        </Card>
    );
};

GroupCard.propTypes = {
    className: PropTypes.string,
    group: PropTypes.object.isRequired
};

export default GroupCard;

const useStyles = makeStyles(theme => ({
    root: {},
    imageContainer: {
        height: 64,
        width: 64,
        margin: '0 auto',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: '5px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%'
    },
    statsItem: {
        display: 'flex',
        alignItems: 'center'
    },
    statsIcon: {
        color: theme.palette.icon,
        marginRight: theme.spacing(1)
    }
}));