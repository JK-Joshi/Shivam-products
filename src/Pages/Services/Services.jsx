import React from 'react';
import { Box, Container, Grid, Typography, Fade, Zoom } from '@mui/material';
import { ColorHelper } from '../../Helper/ColorHelper';
import serviceImage1 from '../../Assets/ServiceImage1.jpg'
import serviceImage2 from '../../Assets/serviceImage2.jpg'

const services = [
    {
        id: 1,
        title: 'Hardware Products Manufacturing',
        description: (
            <>
                We specialize in manufacturing high-quality hardware products, including
                <strong style={{ color: ColorHelper.appColorDark, fontWeight: 600 }}> locks, handles, knobs, and other precision-engineered components</strong>.
                Our advanced production facility ensures durability, precision, and superior craftsmanship in every product, meeting international quality standards.
            </>
        ),
        image: serviceImage1,
        imagePosition: 'left',
        features: [
            'Precision Engineering',
            'High-Quality Finishing',
            'Custom Hardware Solutions',
            'Bulk Manufacturing'
        ]
    },
    {
        id: 2,
        title: 'Kitchen Products Manufacturing',
        description: (
            <>
                We are manufacturers of a
                <strong style={{ color: ColorHelper.appColorDark, fontWeight: 600 }}> wide range of high-quality kitchen products</strong>, including
                <strong style={{ color: ColorHelper.appColorDark, fontWeight: 600 }}> garlic crushers, lemon crushers, peelers, and more</strong>.
                Our kitchen tools are designed for durability, efficiency, and ease of use, ensuring the best user experience with innovative and functional designs.
            </>
        ),
        image: serviceImage2,
        imagePosition: 'right',
        features: [
            'Innovative & Durable Designs',
            'Precision Manufacturing',
            'High-Quality Materials',
            'Customizable Solutions'
        ]
    },
    {
        id: 3,
        title: 'High-Quality Zinc Die Casting Solutions',
        description: (
            <>
                We are <strong style={{ color: ColorHelper.appColorDark, fontWeight: 600 }}> specialists in Zinc die-casting</strong>,
                providing <strong style={{ color: ColorHelper.appColorDark, fontWeight: 600 }}> custom-manufactured Zinc components</strong> tailored to your specific requirements and designs.
                Whether for the <strong style={{ color: ColorHelper.appColorDark, fontWeight: 600 }}> automobile industry, hardware, electronics, or other sectors</strong>,
                we use state-of-the-art machinery to deliver <strong style={{ color: ColorHelper.appColorDark, fontWeight: 600 }}> high-precision and durable Zinc products</strong> that meet industry standards.
            </>
        ),
        image: "https://blog.transvalorusa.com/hubfs/AdobeStock_274431310.jpg",
        imagePosition: 'left',
        features: [
            'Custom Zinc Die Casting',
            'High-Precision Manufacturing',
            'Industry-Specific Solutions',
            'Stringent Quality Control'
        ]
    }
];



const Services = () => {
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
                    Our <span style={{ fontWeight: 300 }}>Services</span>
                </Typography>

                {/* Services List */}
                {services.map((service, index) => (
                    <Box key={service.id} sx={{ mb: { xs: 8, md: 12 } }}>
                        <Fade in timeout={1000} triggerOnce>
                            <Grid
                                container
                                spacing={4}
                                alignItems="center"
                                direction={service.imagePosition === 'right' ? 'row-reverse' : 'row'}
                                sx={{
                                    '&:hover': {
                                        '& .service-image': {
                                            transform: 'scale(1.02)',
                                        },
                                        '& .service-content': {
                                            transform: 'translateX(10px)',
                                        }
                                    }
                                }}
                            >
                                {/* Image Section */}
                                <Grid item xs={12} md={6}>
                                    <Fade in timeout={1000} direction={service.imagePosition === 'right' ? 'left' : 'right'}>
                                        <Box
                                            className="service-image"
                                            sx={{
                                                position: 'relative',
                                                width: '100%',
                                                height: '50%',
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    top: -20,
                                                    left: -20,
                                                    right: 20,
                                                    bottom: 20,
                                                    border: `2px solid ${ColorHelper.appColorLight}`,
                                                    borderRadius: '20px',
                                                    zIndex: 1,
                                                    transition: 'all 0.3s ease',
                                                },
                                                '&::after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    top: 20,
                                                    left: 20,
                                                    right: -20,
                                                    bottom: -20,
                                                    backgroundColor: 'rgba(41, 95, 45, 0.1)',
                                                    borderRadius: '20px',
                                                    zIndex: 0,
                                                    transition: 'all 0.3s ease',
                                                },
                                                '&:hover': {
                                                    '&::before': {
                                                        top: -25,
                                                        left: -25,
                                                        right: 25,
                                                        bottom: 25,
                                                    },
                                                    '&::after': {
                                                        top: 25,
                                                        left: 25,
                                                        right: -25,
                                                        bottom: -25,
                                                    }
                                                }
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={service.image}
                                                alt={service.title}
                                                sx={{
                                                    width: '100%',
                                                    height: { xs: '300px', md: '400px' },
                                                    objectFit: 'cover',
                                                    borderRadius: '20px',
                                                    position: 'relative',
                                                    zIndex: 2,
                                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                                    transition: 'all 0.3s ease',
                                                    filter: 'brightness(1)',
                                                    '&:hover': {
                                                        transform: 'scale(1.02)',
                                                        boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
                                                        filter: 'brightness(1.05)',
                                                    }
                                                }}
                                            />
                                        </Box>
                                    </Fade>
                                </Grid>

                                {/* Content Section */}
                                <Grid item xs={12} md={6}>
                                    <Box
                                        className="service-content"
                                        sx={{
                                            p: { xs: 2, md: 4 },
                                            transition: 'transform 0.5s ease',
                                            position: 'relative',
                                        }}
                                    >
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                color: ColorHelper.appColorDark,
                                                fontWeight: 600,
                                                mb: 3,
                                                fontSize: { xs: '1.8rem', md: '2.2rem' },
                                                position: 'relative',
                                                '&::after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    bottom: -8,
                                                    left: 0,
                                                    width: '60px',
                                                    height: '3px',
                                                    backgroundColor: ColorHelper.appColorLight,
                                                    borderRadius: '2px',
                                                }
                                            }}
                                        >
                                            {service.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: '#666',
                                                mb: 4,
                                                lineHeight: 1.8,
                                                fontSize: { xs: '1rem', md: '1.1rem' },
                                            }}
                                        >
                                            {service.description}
                                        </Typography>
                                        {/* Features Grid */}
                                        <Grid container spacing={2} sx={{ mt: 3 }}>
                                            {service.features.map((feature, idx) => (
                                                <Grid item xs={12} sm={6} key={idx}>
                                                    <Zoom in style={{ transitionDelay: `${idx * 200}ms` }}>
                                                        <Box
                                                            sx={{
                                                                p: 2,
                                                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                                borderRadius: '10px',
                                                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                                                                border: '1px solid rgba(41, 95, 45, 0.1)',
                                                                transition: 'all 0.3s ease',
                                                                minHeight: '80px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                '&:hover': {
                                                                    transform: 'translateY(-5px)',
                                                                    boxShadow: '0 6px 25px rgba(0, 0, 0, 0.1)',
                                                                    borderColor: ColorHelper.appColorLight,
                                                                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                                                }
                                                            }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{
                                                                    textAlign: 'center',
                                                                    fontWeight: 500,
                                                                    color: '#333',
                                                                }}
                                                            >
                                                                {feature}
                                                            </Typography>
                                                        </Box>
                                                    </Zoom>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Fade>
                    </Box>
                ))}
            </Container>
        </Box>
    );
};

export default Services; 