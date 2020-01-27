import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => {
    return ({
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        appBar: {
            background: theme.background.main
        },
        a: {
            textDecoration: 'none',
            color: theme.color.white
        }
    })
});

export default function Header() {
    const classes = useStyles();
    const phoneNumber = '+7 (999) 555 55 55';
    const href = `tel:${phoneNumber}`;

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6"  className={classes.title}>
                        <a className={classes.a} href={href}>{phoneNumber}</a>
                    </Typography>
                    <Button href={href}  color="inherit">Позвонить</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}