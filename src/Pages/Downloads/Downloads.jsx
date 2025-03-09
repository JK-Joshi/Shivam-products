import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, IconButton, Fade, Button } from '@mui/material';
import { ColorHelper } from '../../Helper/ColorHelper';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LockCatagog from '../../Assets/CatalogsPdf/Maker Mortise Handle Brochure.pdf'

const catalogs = [
    {
        id: 1,
        title: 'Hardware Products Catalog 2025',
        description: 'Comprehensive catalog of our hardware products including specifications and applications.',
        fileSize: '45 MB',
        category: 'Hardware',
        downloadUrl: LockCatagog,
        image: 'https://images.jdmagicbox.com/quickquotes/images_main/-55hu5ok9.jpg'
    },
    // {
    //     id: 2,
    //     title: 'Kitchen Products Collection',
    //     description: 'Latest collection of premium kitchen products with detailed specifications.',
    //     fileSize: '3.1 MB',
    //     category: 'Kitchen',
    //     downloadUrl: '/catalogs/kitchen-products-2024.pdf',
    //     image: 'https://m.media-amazon.com/images/I/41ntfnZBQoL._SL500_.jpg'
    // },
    // {
    //     id: 3,
    //     title: 'Automobile Components Guide',
    //     description: 'Technical guide for automobile casting products and components.',
    //     fileSize: '4.2 MB',
    //     category: 'Automobile',
    //     downloadUrl: '/catalogs/automobile-components-2024.pdf',
    //     image: 'https://www.rapiddirect.com/wp-content/uploads-v0/2022/06/die-casting-applications-in-the-automotive-industry.jpg'
    // },
    // {
    //     id: 4,
    //     title: 'Complete Product Range 2024',
    //     description: 'Complete catalog of all our products across different categories.',
    //     fileSize: '5.8 MB',
    //     category: 'All',
    //     downloadUrl: '/catalogs/complete-range-2024.pdf',
    //     image: logo
    // }
];

const Downloads = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleDownload = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = url.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Box sx={{
            minHeight: '100vh',
            pt: { xs: '80px', md: '100px' },
            pb: { xs: '60px', md: '80px' },
            position: 'relative',
            backgroundColor: '#fff',
            overflow: 'hidden',
        }}>
            {/* Background Decorative Elements */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'hidden',
                pointerEvents: 'none',
                zIndex: 0,
            }}>
                {/* Decorative Squares */}
                <Box sx={{
                    position: 'absolute',
                    top: '10%',
                    right: '5%',
                    width: { xs: '60px', md: '100px' },
                    height: { xs: '60px', md: '100px' },
                    backgroundColor: `${ColorHelper.appColorDark}10`,
                    transform: 'rotate(45deg)',
                    opacity: 0.5,
                }} />
                <Box sx={{
                    position: 'absolute',
                    bottom: '15%',
                    left: '8%',
                    width: { xs: '80px', md: '120px' },
                    height: { xs: '80px', md: '120px' },
                    backgroundColor: `${ColorHelper.appColorDark}10`,
                    transform: 'rotate(30deg)',
                    opacity: 0.3,
                }} />

                {/* Decorative Hexagons */}
                <Box sx={{
                    position: 'absolute',
                    top: '20%',
                    left: '15%',
                    width: { xs: '70px', md: '110px' },
                    height: { xs: '70px', md: '110px' },
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    backgroundColor: `${ColorHelper.appColorDark}15`,
                    opacity: 0.4,
                }} />
                <Box sx={{
                    position: 'absolute',
                    bottom: '25%',
                    right: '12%',
                    width: { xs: '90px', md: '130px' },
                    height: { xs: '90px', md: '130px' },
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    backgroundColor: `${ColorHelper.appColorDark}15`,
                    opacity: 0.3,
                }} />

                {/* Decorative Dots Pattern */}
                <Box sx={{
                    position: 'absolute',
                    top: '5%',
                    right: '10%',
                    width: { xs: '80px', md: '120px' },
                    height: { xs: '80px', md: '120px' },
                    backgroundImage: 'radial-gradient(circle, rgba(41, 95, 45, 0.2) 1px, transparent 1px)',
                    backgroundSize: '10px 10px',
                    opacity: 0.5,
                }} />
            </Box>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Page Title */}
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'center',
                        mb: { xs: 5, md: 8 },
                        fontWeight: 600,
                        color: ColorHelper.appColorDark,
                        position: 'relative',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -16,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '80px',
                            height: '4px',
                            backgroundColor: ColorHelper.appColorLight,
                            borderRadius: '2px',
                        }
                    }}
                >
                    Download <span style={{ fontWeight: 300 }}>Catalogs</span>
                </Typography>

                {/* Catalogs Grid */}
                <Grid container spacing={4}>
                    {catalogs.map((catalog, index) => (
                        <Grid item xs={12} sm={6} md={6} key={catalog.id}>
                            <Fade in timeout={1000} delay={index * 200} triggerOnce>
                                <Card
                                    onMouseEnter={() => setHoveredCard(catalog.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        transition: 'all 0.5s ease',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                                        }
                                    }}
                                >
                                    {/* Image Section */}
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            height: '200px',
                                            overflow: 'hidden',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: `linear-gradient(45deg, ${ColorHelper.appColorDark}40, transparent)`,
                                                opacity: hoveredCard === catalog.id ? 1 : 0,
                                                transition: 'opacity 0.5s ease',
                                                zIndex: 1,
                                            }
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={catalog.image}
                                            alt={catalog.title}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.5s ease',
                                                transform: hoveredCard === catalog.id ? 'scale(1.1)' : 'scale(1)',
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                zIndex: 2,
                                                opacity: hoveredCard === catalog.id ? 1 : 0,
                                                transition: 'all 0.3s ease',
                                            }}
                                        >
                                            <Button
                                                variant="contained"
                                                startIcon={<DownloadIcon />}
                                                onClick={() => handleDownload(catalog.downloadUrl)}
                                                sx={{
                                                    backgroundColor: ColorHelper.appColorDark,
                                                    color: '#fff',
                                                    '&:hover': {
                                                        backgroundColor: ColorHelper.appColorDark,
                                                        opacity: 0.9,
                                                    }
                                                }}
                                            >
                                                Download PDF
                                            </Button>
                                        </Box>
                                    </Box>

                                    {/* Content Section */}
                                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                            <PictureAsPdfIcon
                                                sx={{
                                                    fontSize: 40,
                                                    color: ColorHelper.appColorDark,
                                                    mr: 2
                                                }}
                                            />
                                            <Box>
                                                <Typography
                                                    variant="h5"
                                                    sx={{
                                                        color: ColorHelper.appColorDark,
                                                        fontWeight: 600,
                                                        mb: 0.5,
                                                    }}
                                                >
                                                    {catalog.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: '#666',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    {catalog.fileSize}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography
                                            sx={{
                                                color: '#666',
                                                mb: 2,
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {catalog.description}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: ColorHelper.appColorDark,
                                                    fontWeight: 500,
                                                    backgroundColor: `${ColorHelper.appColorDark}10`,
                                                    px: 2,
                                                    py: 1,
                                                    borderRadius: '20px',
                                                }}
                                            >
                                                {catalog.category}
                                            </Typography>
                                            <IconButton
                                                onClick={() => handleDownload(catalog.downloadUrl)}
                                                sx={{
                                                    color: ColorHelper.appColorDark,
                                                    '&:hover': {
                                                        backgroundColor: `${ColorHelper.appColorDark}10`,
                                                    }
                                                }}
                                            >
                                                <ArrowForwardIcon />
                                            </IconButton>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Fade>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Downloads; 