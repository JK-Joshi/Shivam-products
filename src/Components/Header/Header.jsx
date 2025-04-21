import React, { useState } from 'react';
import { Box, Container, Typography, Button, IconButton, Menu, MenuItem, Fade, Collapse } from '@mui/material';
import { ColorHelper } from '../../Helper/ColorHelper';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../Assets/MakerLogo/Maker-logo-White.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
    const location = useLocation();
    const [productsAnchorEl, setProductsAnchorEl] = useState(null);
    const [isProductsOpen, setIsProductsOpen] = useState(false);

    const handleProductsClick = (event) => {
        setProductsAnchorEl(event.currentTarget);
        setIsProductsOpen(true);
    };

    const handleProductsClose = () => {
        setProductsAnchorEl(null);
        setIsProductsOpen(false);
    };

    const categories = [
        { id: 'all', name: 'All Products' },
        { id: 'category1', name: 'Category 1' },
        { id: 'category2', name: 'Category 2' },
        { id: 'category3', name: 'Category 3' },
        { id: 'category4', name: 'Category 4' },
    ];

    return (
        <Box sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: '#fff',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}>
            <Container maxWidth="lg">
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 2,
                }}>
                    {/* Logo */}
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Box component="img" src={logo} alt="Shivam Products" sx={{ height: '50px' }} />
                    </Link>

                    {/* Navigation */}
                    <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Typography
                                sx={{
                                    color: location.pathname === '/' ? ColorHelper.appColorDark : '#666',
                                    fontWeight: location.pathname === '/' ? 600 : 400,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: ColorHelper.appColorDark,
                                    }
                                }}
                            >
                                Home
                            </Typography>
                        </Link>

                        {/* Products Dropdown */}
                        <Box sx={{ position: 'relative' }}>
                            <Typography
                                onClick={handleProductsClick}
                                sx={{
                                    color: location.pathname === '/products' ? ColorHelper.appColorDark : '#666',
                                    fontWeight: location.pathname === '/products' ? 600 : 400,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: ColorHelper.appColorDark,
                                    }
                                }}
                            >
                                Products
                                <KeyboardArrowDownIcon
                                    sx={{
                                        transition: 'transform 0.3s ease',
                                        transform: isProductsOpen ? 'rotate(180deg)' : 'rotate(0)'
                                    }}
                                />
                            </Typography>

                            {/* Products Menu */}
                            <Collapse
                                in={isProductsOpen}
                                timeout="auto"
                                unmountOnExit
                                sx={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: 0,
                                    right: 0,
                                    backgroundColor: '#fff',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                    borderRadius: '0 0 10px 10px',
                                    overflow: 'hidden',
                                    zIndex: 1000,
                                }}
                            >
                                <Box sx={{ p: 2 }}>
                                    {categories.map((category) => (
                                        <MenuItem
                                            key={category.id}
                                            onClick={() => {
                                                handleProductsClose();
                                                // Add navigation logic here
                                            }}
                                            sx={{
                                                py: 1.5,
                                                px: 2,
                                                borderRadius: '8px',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(41, 95, 45, 0.1)',
                                                }
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: '#666',
                                                    fontWeight: 500,
                                                    '&:hover': {
                                                        color: ColorHelper.appColorDark,
                                                    }
                                                }}
                                            >
                                                {category.name}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Box>
                            </Collapse>
                        </Box>

                        <Link to="/about" style={{ textDecoration: 'none' }}>
                            <Typography
                                sx={{
                                    color: location.pathname === '/about' ? ColorHelper.appColorDark : '#666',
                                    fontWeight: location.pathname === '/about' ? 600 : 400,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: ColorHelper.appColorDark,
                                    }
                                }}
                            >
                                About
                            </Typography>
                        </Link>

                        <Link to="/certificates" style={{ textDecoration: 'none' }}>
                            <Typography
                                sx={{
                                    color: location.pathname === '/certificates' ? ColorHelper.appColorDark : '#666',
                                    fontWeight: location.pathname === '/certificates' ? 600 : 400,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: ColorHelper.appColorDark,
                                    }
                                }}
                            >
                                Certificates
                            </Typography>
                        </Link>

                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: ColorHelper.appColorDark,
                                '&:hover': {
                                    backgroundColor: ColorHelper.appColorLight,
                                },
                                borderRadius: '30px',
                                px: 3,
                                py: 1,
                            }}
                        >
                            Contact Us
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Header; 