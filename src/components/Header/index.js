import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import "../../styles/output.css"
import './style.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import $ from 'jquery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import MoreIcon from '@material-ui/icons/MoreVert';



const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
    marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        position: "relative"
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    bar: {
        background:  "rgb(42, 46, 40)"
    },
    links: {
        color: "#fff",
        backgroundColor: "transparent",
        display: "block",
        padding: ".5rem 1rem",
        "&:hover": {
            textDecoration: "none",
            color: "#0c8b50"
        }
    },
    menuIcons: {
        paddingRight: "10%",
    },
    menuLinks: {
        color: "#fff",
        backgroundColor: "transparent",
        display: "block",
        "&:hover": {
            textDecoration: "none",
            color: "#0c8b50"
        }
    },
    menu: {
        background: "rgb(42, 46, 40)",
        "&:hover": {
            color: "#0c8b50 !important"
        }
    },
    barIcon: {
        position: "relative",
        bottom: "5px",
        fontSize: "24px !important",
        color: "#0c8b50",
        "&:hover": {
            color: "#fff"
        }
    }
  }));
export default function Header() {
    const  classes  = useStyles();
        const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
      
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
      
      
        const handleMobileMenuClose = () => {
          setMobileMoreAnchorEl(null);
        };
      
      
        const handleMobileMenuOpen = (event) => {
          setMobileMoreAnchorEl(event.currentTarget);
        };
        // const menuId = 'primary-search-account-menu';
        // const renderMenu = (
        //   <Menu
        //     anchorEl={anchorEl}
        //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        //     id={menuId}
        //     keepMounted
        //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        //     open={isMenuOpen}
        //     onClose={handleMenuClose}
        //   >
        //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        //   </Menu>
        // );
      
      
        const mobileMenuId = 'primary-search-account-menu-mobile';
        const renderMobileMenu = (
                <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={mobileMenuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
                onClick={handleMobileMenuClose}
                >
                <a className={classes.menuLinks} href="#home">
                    <MenuItem className={classes.menu}>
                        Home
                    </MenuItem>
                </a>
                <a className={classes.menuLinks} href="#about">
                    <MenuItem className={classes.menu}>
                        About
                    </MenuItem>
                </a>
                <a className={classes.menuLinks} href="#portfolio">
                    <MenuItem className={classes.menu}>
                        Portfolio
                    </MenuItem>
                </a>
                <a className={classes.menuLinks} href="#contact">
                    <MenuItem className={classes.menu}>
                        Contact
                    </MenuItem>
                </a> 
                <a className={classes.menuLinks} href="https://github.com/keshavsavva">
                    <MenuItem className={classes.menu}>
                        <GitHubIcon className={classes.menuIcons}/>Github
                    </MenuItem>
                </a> 
                <a className={classes.menuLinks} href="https://drive.google.com/file/d/1JE8D7i6qQc2d9EnRE343eico7PWoV-uS/view?usp=sharing">
                    <MenuItem className={classes.menu}>
                        <DescriptionIcon className={classes.menuIcons}/>Resume
                    </MenuItem>
                </a> 
                <a className={classes.menuLinks} href="https://www.linkedin.com/in/keshavsavva/">
                    <MenuItem className={classes.menu}>
                        <LinkedInIcon className={classes.menuIcons}/>LinkedIn
                    </MenuItem>
                </a> 
                </Menu>
        );
        return (
            <div className={classes.grow}>
                <AppBar position="fixed" className={classes.bar}>
                    <Toolbar>
                        {/* <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton> */}
                        <Typography className={classes.grow} style={{paddingRight: "3%"}} variant="h6" noWrap>
                            Keshav Avva
                        </Typography>
                        <Typography className={classes.title} variant="h8" noWrap>
                            <a
                                className={classes.links}
                                href="#home"
                            >
                                Home
                            </a>
                        </Typography>
                        <Typography className={classes.title} variant="h8" noWrap>
                            <a
                                className={classes.links}
                                href="#about"
                            >
                                About
                            </a>
                        </Typography>
                        <Typography className={classes.title} variant="h8" noWrap>
                            <a
                                className={classes.links}
                                href="#portfolio"
                            >
                                Portfolio
                            </a>
                        </Typography>
                        <Typography className={classes.title} variant="h8" noWrap>
                            <a
                                className={classes.links}
                                href="#contact"
                            >
                                Contact
                            </a>
                        </Typography>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                                <a
                                class="nav-link waves-effect waves-light"
                                href="https://github.com/keshavsavva"
                                >
                                    <GitHubIcon className={classes.barIcon}/>
                                </a>
                                <a
                                class="nav-link waves-effect waves-light"
                                href="https://drive.google.com/file/d/1JE8D7i6qQc2d9EnRE343eico7PWoV-uS/view?usp=sharing"
                                >
                                    <DescriptionIcon className={classes.barIcon}/>
                                </a>
                                <a href="https://www.linkedin.com/in/keshavsavva/" class="nav-link waves-effect waves-light">
                                    <LinkedInIcon className={classes.barIcon}/>
                                </a>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                            >
                            <MenuIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {/* {renderMenu} */}
          </div>
       
        )
}







{/* <nav
        class="navbar fixed-top navbar-expand-lg indigo navbar-dark scrolling-navbar"
      >
        <div class="container">
          <span class="navbar-brand brand">Keshav Avva</span>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
            aria-controls="navbar-collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto smooth-scroll">
              <li class="nav-item">
                <a class="nav-link waves-effect waves-light" href="#home">
                    Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link waves-effect waves-light"
                  href="#about"
                  data-offset="95"
                >
                    About
                </a>
              </li>
              {/* <li class="nav-item">
                <a
                  class="nav-link waves-effect waves-light"
                  href="#skills"
                  data-offset="75"
                  >Skills</a
                >
              </li> */}
    //           <li class="nav-item">
    //             <a
    //               class="nav-link waves-effect waves-light"
    //               href="#portfolio"
    //               data-offset="100"
    //             >
    //                 Portfolio
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a
    //               class="nav-link waves-effect waves-light"
    //               href="#contact"
    //               data-offset="97"
    //             >
    //                 Contact
    //             </a>
    //           </li>
    //         </ul>
    //         <ul class="navbar-nav nav-flex-icons">
    //           <li class="nav-item">
    //             <a
    //               class="nav-link waves-effect waves-light"
    //               href="https://github.com/keshavsavva"
    //             >
    //                 <GitHubIcon className="icon"/>
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a
    //               class="nav-link waves-effect waves-light"
    //               href="https://drive.google.com/file/d/1JE8D7i6qQc2d9EnRE343eico7PWoV-uS/view?usp=sharing"
    //             >
    //                 <DescriptionIcon className="icon"/>
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a
    //               class="nav-link waves-effect waves-light"
    //               href="https://www.linkedin.com/in/keshavsavva/"
    //             >
    //                 <LinkedInIcon className="icon"/>
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav> 