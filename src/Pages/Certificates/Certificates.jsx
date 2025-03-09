import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Fade } from '@mui/material';
import { ColorHelper } from '../../Helper/ColorHelper';

const certificates = [
    {
        id: 1,
        title: 'ISO 9001:2015',
        description: 'Quality Management System Certification',
        image: 'https://epinfoways.com/wp-content/uploads/2021/12/Sample-Certificate-MSME.jpeg',
        delay: 0
    },
    {
        id: 2,
        title: 'ISO 14001:2015',
        description: 'Environmental Management System Certification',
        image: 'https://epinfoways.com/wp-content/uploads/2021/12/Sample-Certificate-MSME.jpeg',
        delay: 0.2
    },
    {
        id: 3,
        title: 'OHSAS 18001:2007',
        description: 'Occupational Health and Safety Management System',
        image: 'https://epinfoways.com/wp-content/uploads/2021/12/Sample-Certificate-MSME.jpeg',
        delay: 0.4
    },
    {
        id: 4,
        title: 'CE Marking',
        description: 'European Conformity Certification',
        image: 'https://epinfoways.com/wp-content/uploads/2021/12/Sample-Certificate-MSME.jpeg',
        delay: 0.6
    }
];

const Certificates = () => {
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
                {/* Decorative Circles */}
                <Box sx={{
                    position: 'absolute',
                    top: '10%',
                    left: '5%',
                    width: { xs: '100px', md: '150px' },
                    height: { xs: '100px', md: '150px' },
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${ColorHelper.appColorLight} 0%, transparent 70%)`,
                    opacity: 0.1,
                    transform: 'translate(-50%, -50%)',
                }} />
                <Box sx={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '5%',
                    width: { xs: '150px', md: '200px' },
                    height: { xs: '150px', md: '200px' },
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${ColorHelper.appColorDark} 0%, transparent 70%)`,
                    opacity: 0.1,
                    transform: 'translate(50%, 50%)',
                }} />

                {/* Decorative Squares */}
                <Box sx={{
                    position: 'absolute',
                    top: '20%',
                    right: '15%',
                    width: { xs: '80px', md: '120px' },
                    height: { xs: '80px', md: '120px' },
                    backgroundColor: `${ColorHelper.appColorLight}10`,
                    transform: 'rotate(45deg)',
                    borderRadius: '20px',
                }} />
                <Box sx={{
                    position: 'absolute',
                    bottom: '25%',
                    left: '20%',
                    width: { xs: '100px', md: '140px' },
                    height: { xs: '100px', md: '140px' },
                    backgroundColor: `${ColorHelper.appColorDark}10`,
                    transform: 'rotate(-30deg)',
                    borderRadius: '15px',
                }} />

                {/* Hexagonal Shapes */}
                <Box sx={{
                    position: 'absolute',
                    top: '15%',
                    left: '5%',
                    width: { xs: '60px', md: '90px' },
                    height: { xs: '60px', md: '90px' },
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    background: `linear-gradient(135deg, ${ColorHelper.appColorLight}20, ${ColorHelper.appColorDark}20)`,
                    transform: 'rotate(15deg)',
                }} />
                <Box sx={{
                    position: 'absolute',
                    top: '25%',
                    left: '15%',
                    width: { xs: '70px', md: '100px' },
                    height: { xs: '70px', md: '100px' },
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    background: `linear-gradient(135deg, ${ColorHelper.appColorDark}20, ${ColorHelper.appColorLight}20)`,
                    transform: 'rotate(-15deg)',
                }} />

                {/* Decorative Lines */}
                <Box sx={{
                    position: 'absolute',
                    top: '30%',
                    right: '10%',
                    width: '2px',
                    height: '100px',
                    background: `linear-gradient(to bottom, ${ColorHelper.appColorLight}, transparent)`,
                    opacity: 0.3,
                }} />
                <Box sx={{
                    position: 'absolute',
                    bottom: '30%',
                    left: '10%',
                    width: '2px',
                    height: '100px',
                    background: `linear-gradient(to top, ${ColorHelper.appColorLight}, transparent)`,
                    opacity: 0.3,
                }} />

                {/* Small Dots Pattern */}
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
                <Box sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '5%',
                    width: { xs: '100px', md: '150px' },
                    height: { xs: '100px', md: '150px' },
                    backgroundImage: 'radial-gradient(circle, rgba(41, 95, 45, 0.2) 1px, transparent 1px)',
                    backgroundSize: '8px 8px',
                    opacity: 0.3,
                }} />

                {/* Decorative Triangles */}
                <Box sx={{
                    position: 'absolute',
                    top: '60%',
                    left: '5%',
                    width: 0,
                    height: 0,
                    borderLeft: '30px solid transparent',
                    borderRight: '30px solid transparent',
                    borderBottom: `60px solid ${ColorHelper.appColorLight}10`,
                    transform: 'rotate(45deg)',
                }} />
                <Box sx={{
                    position: 'absolute',
                    bottom: '40%',
                    right: '5%',
                    width: 0,
                    height: 0,
                    borderLeft: '40px solid transparent',
                    borderRight: '40px solid transparent',
                    borderBottom: `80px solid ${ColorHelper.appColorDark}10`,
                    transform: 'rotate(-45deg)',
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
                    Our <span style={{ fontWeight: 300 }}>Certificates</span>
                </Typography>

                {/* Certificates Grid */}
                <Grid container spacing={4}>
                    {certificates.map((certificate) => (
                        <Grid item xs={12} sm={6} md={3} key={certificate.id}>
                            <Fade in timeout={1000} style={{ transitionDelay: `${certificate.delay}s` }}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            boxShadow: `0 10px 30px ${ColorHelper.appColorDark}20`,
                                            '& .MuiCardMedia-root': {
                                                transform: 'scale(1.05)',
                                            },
                                            '& .certificate-overlay': {
                                                opacity: 1,
                                            }
                                        }
                                    }}
                                >
                                    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={certificate.image}
                                            alt={certificate.title}
                                            sx={{
                                                transition: 'transform 0.3s ease',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <Box
                                            className="certificate-overlay"
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                backgroundColor: `${ColorHelper.appColorDark}80`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                opacity: 0,
                                                transition: 'opacity 0.3s ease',
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    color: 'white',
                                                    textAlign: 'center',
                                                    px: 2,
                                                }}
                                            >
                                                View Certificate
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: ColorHelper.appColorDark,
                                                fontWeight: 600,
                                                mb: 1,
                                            }}
                                        >
                                            {certificate.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#666',
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {certificate.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Fade>
                        </Grid>
                    ))}
                </Grid>

                {/* Additional Info */}
                <Box sx={{
                    mt: 8,
                    textAlign: 'center',
                    p: 4,
                    borderRadius: '20px',
                    background: `linear-gradient(135deg, ${ColorHelper.appColorDark}10, ${ColorHelper.appColorLight}10)`,
                }}>
                    <Typography
                        variant="h5"
                        sx={{
                            color: ColorHelper.appColorDark,
                            mb: 2,
                            fontWeight: 600,
                        }}
                    >
                        Quality Assured
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#666',
                            maxWidth: '800px',
                            mx: 'auto',
                            lineHeight: 1.8,
                        }}
                    >
                        Our commitment to quality and excellence is reflected in our comprehensive certification portfolio.
                        These certifications demonstrate our dedication to maintaining the highest standards in manufacturing,
                        environmental management, and workplace safety.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Certificates; 