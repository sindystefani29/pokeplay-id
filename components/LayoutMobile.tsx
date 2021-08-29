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

interface LayoutProps {
    children: any
    window?: any
}

const useStyles = makeStyles({
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
    children
}) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <HideOnScroll>
                <AppBar className={classes?.appbarTop}>
                    <Toolbar>
                        <img className={classes?.logo} src="/image/logo.webp" alt='Logo' />
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            {children}
            <AppBar className={classes?.appbarBottom}>
                <Toolbar>
                    <BottomNavigation className={classes?.bottomNav}>
                        <Link href="/" activeClassName={styles?.active} additionalClassName={styles?.linkLayout}>
                            <BottomNavigationAction label="Poke List" icon={<ListIcon />} />
                        </Link>
                        <Link href="/favorites" activeClassName={styles?.active} additionalClassName={styles?.linkLayout}>
                            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        </Link>
                    </BottomNavigation>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Layout
