import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ListIcon from '@material-ui/icons/List';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import Link from './Link';
import styles from '../styles/Layout.module.css'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

interface LayoutProps {
    children: any
    window?: any
    titleDetailPage?: string
}

const useStyles = makeStyles({
    titleDetail: {
        fontSize: 20,
        margin: 'auto'
    },
    buttonBack: {
        position: 'absolute'
    },
    iconBack: {
        color: 'white'
    },
    appbarTop: {
        backgroundColor: "orange"
    },
    appbarBottom: {
        bottom: 0,
        top: 'auto',
        backgroundColor: 'white'
    },
    bottomNav: {
        width: '100%'
    },
    bottomNavButton: {
        padding: '0'
    },
    logo: {
        maxWidth: '35%',
        margin: 'auto'
    }
});

function HideOnScroll(props: LayoutProps) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Layout: React.FC<LayoutProps> = ({
    children,
    titleDetailPage
}) => {
    const classes = useStyles();
    const goBack = () => {
        let prevState = window.location.href
        window.history.go(-1)
        setTimeout(() => {
            if (prevState === window.location.href) {
                window.open(window.location.origin, '_top')
            }
        }, 500);
    }
    return (
        <React.Fragment>
            <HideOnScroll>
                <AppBar className={classes?.appbarTop}>
                    <Toolbar>
                        {titleDetailPage ?
                            <React.Fragment>
                                <IconButton aria-label="back" size="small" className={classes?.buttonBack} onClick={() => goBack()}>
                                    <ArrowBackIcon className={classes?.iconBack} />
                                </IconButton>
                                <h1 className={classes?.titleDetail}>{titleDetailPage}</h1>
                            </React.Fragment>
                            :
                            <img className={classes?.logo} src="/image/logo.webp" alt='Logo' />
                        }
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            {children}
            {/* Bottom navigation start */}
            <AppBar className={classes?.appbarBottom}>
                <Toolbar>
                    <BottomNavigation className={classes?.bottomNav}>
                        <Link href="/" activeClassName={styles?.active} additionalClassName={styles?.linkLayout}>
                            <BottomNavigationAction label="Poke List" icon={<ListIcon />} className={classes?.bottomNavButton} />
                        </Link>
                        <Link href="/favorites" activeClassName={styles?.active} additionalClassName={styles?.linkLayout}>
                            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} className={classes?.bottomNavButton} />
                        </Link>
                    </BottomNavigation>
                </Toolbar>
            </AppBar>
            {/* Bottom navigation end */}
        </React.Fragment>
    )
}

export default Layout
