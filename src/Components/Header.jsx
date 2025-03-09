import { Box, Typography, Drawer, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Assets/ShivamTextLogo_White.png';
import { ColorHelper } from '../Helper/ColorHelper';

const Header = () => {
    const List = [
        { title: 'Home', path: '/' },
        { title: 'About us', path: '/about' },
        // { title: 'Certificats', path: '/certificates' },
        { title: 'Products', path: '/products' },
        { title: 'Services', path: '/services' },
        { title: 'Download', path: '/downloads' },
        { title: 'Contact us', path: '/contact' },
    ];

    const location = useLocation();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Box
            sx={{
                height: isSticky ? { xs: '3.5rem', sm: '3.6rem', md: '3.6rem' } : { xs: '4rem', sm: '4.5rem', md: '5rem' },
                backgroundColor: isSticky ? 'rgba(41, 95, 45, 0.5)' : '#295f2d',
                backdropFilter: isSticky ? 'blur(10px)' : 'none',
                WebkitBackdropFilter: isSticky ? 'blur(10px)' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                transition: 'all 0.3s ease-in-out',
                boxShadow: isSticky ? '0 4px 10px rgba(0,0,0,0.1)' : 'none',
                padding: isSticky ?
                    { xs: '0.5rem 1rem', sm: '0.6rem 1rem', md: '0.5rem 1rem' } :
                    { xs: '0.8rem 1.5rem', sm: '1rem 2rem', md: '1rem 2rem' },
            }}
        >
            {/* Logo */}
            <Link to="/">
                <Box
                    component="img"
                    src={logo}
                    sx={{
                        width: isSticky ?
                            { xs: '10rem', sm: '10rem', md: '14rem' } :
                            { xs: '12rem', sm: '16rem', md: '18rem' },
                        transition: 'width 0.3s ease-in-out',
                    }}
                />
            </Link>

            {/* Desktop Menu */}
            <Box
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    gap: { md: 0.5, lg: 1 },
                    justifyContent: "space-between",
                    mr: isSticky ? { md: '2rem', lg: '3rem' } : { md: '3rem', lg: '4rem' },
                    transition: 'margin 0.3s ease-in-out',
                }}
            >
                {List.map((item, index) => (
                    <Link
                        key={`${item.title}${index}`}
                        to={item.path}
                        style={{ textDecoration: 'none' }}
                    >
                        <Typography
                            noWrap
                            sx={{
                                fontWeight: 800,
                                fontSize: isSticky ?
                                    { md: '0.8rem', lg: '0.9rem' } :
                                    { md: '0.9rem', lg: '1rem' },
                                cursor: 'pointer',
                                py: isSticky ? { md: '0.9rem', lg: '1.1rem' } : { md: '1.5rem', lg: '1.75rem' },
                                px: isSticky ? { md: '0.8rem', lg: '1rem' } : { md: '1rem', lg: '1.2rem' },
                                transition: 'all 0.3s ease-in-out',
                                color: location.pathname === item.path ? ColorHelper.appColorDark : ColorHelper.appColorLight,
                                bgcolor: location.pathname === item.path ? ColorHelper.appColorLight : "",
                                '&:hover': {
                                    color: ColorHelper.appColorDark,
                                    backgroundColor: ColorHelper.appColorLight
                                }
                            }}
                        >
                            {item.title}
                        </Typography>
                    </Link>
                ))}
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    color: ColorHelper.appColorLight,
                    transition: 'all 0.3s ease-in-out',
                    padding: { xs: '8px', sm: '12px' },
                }}
                onClick={() => setDrawerOpen(true)}
            >
                <Box
                    component={Icon}
                    icon="mdi:menu"
                    fontSize={isSticky ?
                        { xs: '2rem', sm: '2.2rem' } :
                        { xs: '2.2rem', sm: '2.5rem' }
                    }
                />
            </IconButton>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                variant="temporary"
                elevation={0}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: { xs: '80%', sm: '350px' },
                        bgcolor: ColorHelper.appColorDark,
                        height: '100%',
                        boxSizing: 'border-box',
                        border: 'none',
                        boxShadow: '-4px 0 10px rgba(0,0,0,0.1)',
                    },
                    '& .MuiBackdrop-root': {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }
                }}
                ModalProps={{
                    keepMounted: true,
                    disableScrollLock: false,
                }}
            >
                <Box sx={{
                    p: { xs: 2, sm: 3 },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 4
                    }}>
                        <Link to="/" onClick={() => setDrawerOpen(false)}>
                            <Box
                                component="img"
                                src={logo}
                                sx={{
                                    width: '180px',
                                    height: 'auto'
                                }}
                            />
                        </Link>
                        <IconButton
                            sx={{
                                color: ColorHelper.appColorLight,
                                '&:hover': {
                                    bgcolor: 'rgba(255,255,255,0.1)'
                                }
                            }}
                            onClick={() => setDrawerOpen(false)}
                        >
                            <Box
                                component={Icon}
                                icon="mdi:close"
                                fontSize={{ xs: '1.5rem', sm: '1.8rem' }}
                            />
                        </IconButton>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2
                    }}>
                        {List.map((item, index) => (
                            <Link
                                key={`${item.title}${index}`}
                                to={item.path}
                                style={{ textDecoration: 'none' }}
                                onClick={() => setDrawerOpen(false)}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 800,
                                        fontSize: { xs: '1rem', sm: '1.1rem' },
                                        cursor: 'pointer',
                                        py: { xs: '0.8rem', sm: '1rem' },
                                        px: { xs: '1rem', sm: '1.2rem' },
                                        color: location.pathname === item.path ? ColorHelper.appColorDark : ColorHelper.appColorLight,
                                        bgcolor: location.pathname === item.path ? ColorHelper.appColorLight : "transparent",
                                        borderRadius: '8px',
                                        transition: 'all 0.3s ease-in-out',
                                        '&:hover': {
                                            color: ColorHelper.appColorDark,
                                            backgroundColor: ColorHelper.appColorLight,
                                            transform: 'translateX(8px)'
                                        }
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Drawer>
        </Box>
    );
};

export default Header;
