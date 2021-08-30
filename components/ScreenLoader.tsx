import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress'

const useStyles = makeStyles({
    logo: {
        maxWidth: '35%',
        marginBottom: '20px'
    },
    containerScreen: {
        height: '100vh',
        position: 'absolute',
        top: 0
    }
});

const ScreenLoader = () => {
    const classes = useStyles();
    return(
        <div className={`d-flex justify-center align-center direction-column ${classes?.containerScreen}`}>
            <img className={classes?.logo} src="/image/logo.webp" alt='Logo' />
            <LinearProgress className="w-50" />
        </div>
    )
}

export default ScreenLoader