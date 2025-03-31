import React, { useEffect } from 'react';
import { Container, Grid, Typography, Box, Divider, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, LocationOn, Email } from '@mui/icons-material';
import { ColorHelper } from '../Helper/ColorHelper';
import { Link as RouterLink } from 'react-router-dom';
import { productCategories } from '../Constants/ProductImages';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    const quickLinks = [
        { title: 'Home', path: '/' },
        { title: 'About us', path: '/about' },
        { title: 'Products', path: '/products' },
        { title: 'Services', path: '/services' },
        { title: 'Download', path: '/downloads' },
        { title: 'Contact us', path: '/contact' },
    ];

    // Filter published product categories
    const publishedCategories = productCategories.filter(cat => cat.is_publish);

    return (
        <Box sx={{
            position: 'relative',
            background: `linear-gradient(135deg, 
                ${ColorHelper.appColorDark} 0%, 
                rgba(41, 95, 45, 0.9) 50%,
                ${ColorHelper.appColorDark} 100%)`,
            color: 'white',
            pt: { xs: 8, md: 10 },
            pb: { xs: 4, md: 5 },
            overflow: 'hidden',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 10%),
                                radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 10%)`,
                opacity: 0.5,
            },
            '&::after': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l9.9-9.9h-2.83zM32 0l-3.486 3.485-1.414 1.414L40.97 0H32zM0 5.373l.828-.83L2.243 5.96 0 8.2V5.374zm0 5.656l.828-.829 5.657 5.657-1.414 1.414L0 11.03v-2.83zm0 5.656l.828-.828 8.485 8.485-1.414 1.414L0 16.686v-2.83zm0 5.657l.828-.828 11.314 11.314-1.414 1.414L0 22.343v-2.83zM0 32l3.485-3.485 1.414-1.414L0 40.97V32zm0 5.373l.828-.83 14.142 14.142-1.414 1.414L0 38.857v-2.83zm0 5.656l.828-.828 16.97 16.97-1.414 1.414L0 44.514v-2.83zm0 5.657l.828-.828 19.8 19.8-1.414 1.414L0 50.17v-2.83zM5.373 60L.828 55.456 2.243 54.04 7.9 59.697 5.374 60zm5.656 0l-7.071-7.07 1.415-1.415 7.07 7.07-2.828 2.83zm5.657 0l-9.9-9.9 1.415-1.414 9.9 9.9-2.83 2.83zm5.657 0l-12.728-12.73 1.414-1.414 12.728 12.728-2.83 2.83zM32 60l-16.485-16.485 1.414-1.414 16.485 16.485H32zm5.373 0l-19.314-19.313 1.414-1.414 19.314 19.314h-2.83zm5.657 0l-22.142-22.142 1.414-1.414 22.142 22.142h-2.83zm5.657 0l-24.97-24.97 1.414-1.414 24.97 24.97h-2.83zM60 32v8.97l-7.9-7.9 1.415-1.414L60 32zm0 5.373v2.83l-9.9-9.9 1.415-1.414L60 37.373zm0 5.657v2.83l-12.728-12.73 1.414-1.414L60 43.03zm0 5.657v2.83L41.414 33.243l1.414-1.414L60 48.687zm0-32v2.83l-5.657-5.657 1.414-1.415L60 16.687zm0 5.657v2.83L52.243 17.9l1.414-1.414L60 22.344zm0 5.656v2.83L49.414 22.244l1.414-1.414L60 28zM39.9 16.385l1.414-1.414 1.414 1.414-1.414 1.414-1.414-1.414zm-4.95 4.95l1.414-1.415 1.415 1.415-1.415 1.414-1.414-1.414zm9.9-9.9l1.414-1.415 1.415 1.415-1.415 1.414-1.414-1.414zm-9.9 9.9l1.414-1.415 1.415 1.415-1.415 1.414-1.414-1.414zm9.9-9.9l1.414-1.415 1.415 1.415-1.415 1.414-1.414-1.414zm-9.9 9.9l1.414-1.415 1.415 1.415-1.415 1.414-1.414-1.414zm9.9-9.9l1.414-1.415 1.415 1.415-1.415 1.414-1.414-1.414z\' fill=\'rgba(255, 255, 255, 0.05)\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
            }
        }}>
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={4} justifyContent="space-around">
                    {/* About Us */}
                    <Grid item xs={12} sm={6} md={3} data-aos="fade-right" data-aos-once="true">
                        <Typography variant="h6" sx={{
                            fontWeight: 600,
                            mb: 3,
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: -8,
                                left: 0,
                                width: 40,
                                height: 3,
                                background: ColorHelper.appColorLight,
                                borderRadius: 1,
                            }
                        }}>
                            About Us
                        </Typography>
                        <Typography variant="body2" sx={{
                            opacity: 0.9,
                            lineHeight: 1.8,
                            letterSpacing: 0.3
                        }}>
                            We are a leading exporter of high-quality products, committed to delivering excellence worldwide.
                        </Typography>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} sm={6} md={3} data-aos="fade-right" data-aos-once="true">
                        <Typography variant="h6" sx={{
                            fontWeight: 600,
                            mb: 3,
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: -8,
                                left: 0,
                                width: 40,
                                height: 3,
                                background: ColorHelper.appColorLight,
                                borderRadius: 1,
                            }
                        }}>
                            Quick Links
                        </Typography>
                        <Box component="ul" sx={{
                            listStyle: 'none',
                            p: 0,
                            '& li': {
                                mb: 1.5,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateX(8px)',
                                    '& a': {
                                        color: ColorHelper.appColorLight,
                                    }
                                }
                            },
                            '& a': {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                color: 'white',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                            }
                        }}>
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <RouterLink
                                        to={link.path}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: 'white',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: '6px',
                                                height: '6px',
                                                backgroundColor: ColorHelper.appColorLight,
                                                borderRadius: '50%',
                                                transition: 'all 0.3s ease',
                                            }}
                                        />
                                        {link.title}
                                    </RouterLink>
                                </li>
                            ))}
                        </Box>
                    </Grid>

                    {/* Our Products */}
                    <Grid item xs={12} sm={6} md={3} data-aos="fade-left" data-aos-once="true">
                        <Typography variant="h6" sx={{
                            fontWeight: 600,
                            mb: 3,
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: -8,
                                left: 0,
                                width: 40,
                                height: 3,
                                background: ColorHelper.appColorLight,
                                borderRadius: 1,
                            }
                        }}>
                            Our Products
                        </Typography>
                        <Box component="ul" sx={{
                            listStyle: 'none',
                            p: 0,
                            '& li': {
                                mb: 1.5,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateX(8px)',
                                    '& a': {
                                        color: ColorHelper.appColorLight,
                                    }
                                }
                            },
                            '& a': {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                color: 'white',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                            }
                        }}>
                            {publishedCategories.map((category, index) => (
                                <li key={index}>
                                    <RouterLink
                                        to={`/products?category=${category.category}`}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: 'white',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: '6px',
                                                height: '6px',
                                                backgroundColor: ColorHelper.appColorLight,
                                                borderRadius: '50%',
                                                transition: 'all 0.3s ease',
                                            }}
                                        />
                                        {category.name}
                                    </RouterLink>
                                </li>
                            ))}
                        </Box>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12} sm={6} md={3} data-aos="fade-left" data-aos-once="true">
                        <Typography variant="h6" sx={{
                            fontWeight: 600,
                            mb: 3,
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: -8,
                                left: 0,
                                width: 40,
                                height: 3,
                                background: ColorHelper.appColorLight,
                                borderRadius: 1,
                            }
                        }}>
                            Shivam Products
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            '& .contact-item': {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateX(8px)',
                                    color: ColorHelper.appColorLight,
                                }
                            }
                        }}>
                            <Box className="contact-item">
                                <LocationOn fontSize="small" />
                                <Typography variant="body2">Sahjanand Industrial Area, Street No-1, Nr. Kishan Gaushala, National Highway 27H, Rajkot-360003.</Typography>
                            </Box>
                            {/* <Box className="contact-item">
                                <Phone fontSize="small" />
                                <Typography variant="body2">Contact: +1234567890</Typography>
                            </Box>
                            <Box className="contact-item">
                                <WhatsApp fontSize="small" />
                                <Typography variant="body2">WhatsApp: +9876543210</Typography>
                            </Box> */}
                            <Box className="contact-item">
                                <Email fontSize="small" />
                                <Typography variant="body2">sales@shivamproducts.in</Typography>
                            </Box>
                        </Box>

                        {/* Social Media Icons */}
                        <Box sx={{
                            mt: 3,
                            display: 'flex',
                            gap: 2,
                            '& .MuiIconButton-root': {
                                color: 'white',
                                border: '2px solid rgba(255, 255, 255, 0.2)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: ColorHelper.appColorLight,
                                    color: ColorHelper.appColorDark,
                                    borderColor: ColorHelper.appColorLight,
                                    transform: 'translateY(-3px)',
                                }
                            }
                        }}>
                            <IconButton size="small"><Facebook /></IconButton>
                            <IconButton size="small"><Twitter /></IconButton>
                            <IconButton size="small"><LinkedIn /></IconButton>
                        </Box>
                    </Grid>
                </Grid>

                {/* Divider and Copyright */}
                <Divider sx={{
                    my: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        top: 0,
                        width: '100px',
                        height: '1px',
                        background: ColorHelper.appColorLight,
                    }
                }} />

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 2
                }}>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        © {new Date().getFullYear()} Shivam Products. All rights reserved.
                    </Typography>
                    <Typography sx={{
                        color: 'white',
                        fontSize: "0.9rem",
                        '& a': {
                            color: ColorHelper.appColorLight,
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                color: 'white',
                            }
                        }
                    }}>
                        Web Master <a href='https://frontend-developer-jayjoshi.netlify.app/' rel="noreferrer" target='_blank'>.JAY</a>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;