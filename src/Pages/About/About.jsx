import React, { useRef, useEffect } from 'react';
import { Box, Container, Grid, Typography, Fade, Zoom } from '@mui/material';
import { ColorHelper } from '../../Helper/ColorHelper';
import { useInView, animate } from 'framer-motion';
import image from '../../Assets/AboutImage.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Counter = ({ endValue, text }) => {
    const counterRef = useRef(null);
    const isInView = useInView(counterRef, { once: true, threshold: 0.2 });

    useEffect(() => {
        if (isInView) {
            const node = counterRef.current;
            const controls = animate(0, parseInt(endValue), {
                duration: 2,
                onUpdate(value) {
                    node.textContent = Math.round(value).toLocaleString() + '+';
                },
            });
            return () => controls.stop();
        }
    }, [isInView, endValue]);

    return (
        <Box
            sx={{
                textAlign: 'center',
                p: 2,
                backgroundColor: 'rgba(41, 95, 45, 0.05)',
                borderRadius: '10px',
                transition: 'all 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    backgroundColor: 'rgba(41, 95, 45, 0.1)',
                }
            }}
        >
            <Typography
                ref={counterRef}
                variant="h4"
                sx={{
                    color: ColorHelper.appColorDark,
                    fontWeight: 'bold',
                    mb: 1
                }}
            >
                0
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    color: '#666',
                    fontWeight: 500
                }}
            >
                {text}
            </Typography>
        </Box>
    );
};

const About = () => {

    return (
        <Box sx={{
            minHeight: '100vh',
            pt: { xs: '80px', md: '100px' }, // Account for fixed header
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
                {/* Top Left Square */}
                <Fade in timeout={1000}>
                    <Box sx={{
                        position: 'absolute',
                        top: '5%',
                        left: '2%',
                        width: { xs: '100px', md: '150px' },
                        height: { xs: '100px', md: '150px' },
                        backgroundColor: 'rgba(41, 95, 45, 0.05)',
                        transform: 'rotate(45deg)',
                        borderRadius: '20px',
                    }} />
                </Fade>

                {/* Bottom Right Square */}
                <Fade in timeout={1000} style={{ transitionDelay: '200ms' }}>
                    <Box sx={{
                        position: 'absolute',
                        bottom: '10%',
                        right: '5%',
                        width: { xs: '80px', md: '120px' },
                        height: { xs: '80px', md: '120px' },
                        backgroundColor: 'rgba(41, 95, 45, 0.08)',
                        transform: 'rotate(-30deg)',
                        borderRadius: '15px',
                    }} />
                </Fade>

                {/* Middle Decorative Element */}
                <Fade in timeout={1000} style={{ transitionDelay: '400ms' }}>
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        right: '15%',
                        width: { xs: '60px', md: '90px' },
                        height: { xs: '60px', md: '90px' },
                        border: `2px solid ${ColorHelper.appColorLight}`,
                        opacity: 0.2,
                        transform: 'rotate(30deg)',
                    }} />
                </Fade>

                {/* Small Dots Pattern */}
                <Fade in timeout={1000} style={{ transitionDelay: '600ms' }}>
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
                </Fade>
                <Fade in timeout={1000} style={{ transitionDelay: '800ms' }}>
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
                </Fade>
            </Box>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Page Title */}
                <Fade in timeout={1000} direction="up">
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
                        About <span style={{ fontWeight: 300 }}>Us</span>
                    </Typography>
                </Fade>

                {/* Main Content */}
                <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
                    {/* Image Section */}
                    <Grid item xs={12} md={6}>
                        <Fade in timeout={1000} direction="right">
                            <Box sx={{
                                position: 'relative',
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
                                }
                            }}>
                                <LazyLoadImage
                                    src={image}
                                    alt="About Shivam Products"
                                    effect="blur"
                                    style={{
                                        width: '100%',
                                        height: { xs: '300px', md: '400px' },
                                        objectFit: 'cover',
                                        borderRadius: '20px',
                                        position: 'relative',
                                        zIndex: 2,
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.02)',
                                        }
                                    }}
                                />
                            </Box>
                        </Fade>
                    </Grid>

                    {/* Content Section */}
                    <Grid item xs={12} md={6}>
                        <Fade in timeout={1000} direction="left">
                            <Box sx={{ pl: { md: 4 } }}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: ColorHelper.appColorDark,
                                        mb: 3,
                                        fontWeight: 600
                                    }}
                                >
                                    Welcome to Shivam Products
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        mb: 3,
                                        color: '#666',
                                        lineHeight: 1.8,
                                        letterSpacing: 0.3,
                                    }}
                                >
                                    At Shivam Products, we specialize in <strong style={{ color: ColorHelper.appColorDark, fontWeight: 600 }}>high-quality Zinc die-casting manufacturing</strong>, delivering precision-engineered components for various industries. Equipped with state-of-the-art machinery, our production facility ensures superior craftsmanship and durability in every product we create.
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        mb: 3,
                                        color: '#666',
                                        lineHeight: 1.8,
                                        letterSpacing: 0.3,
                                    }}
                                >
                                    We take pride in offering <strong style={{ color: ColorHelper.appColorDark, fontWeight: 600 }}>custom Zinc die-casting solutions </strong>, manufacturing products tailored to your specifications based on the designs and drawings you provide. Our commitment to <strong style={{ color: ColorHelper.appColorDark, fontWeight: 600 }}>quality, innovation, and customer satisfaction</strong> drives us to deliver exceptional products that meet the highest industry standards.
                                </Typography>

                                {/* Key Points */}
                                <Box sx={{
                                    mt: 4,
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, 1fr)',
                                    gap: 3
                                }}>
                                    {[
                                        { number: '15', text: 'Country Export' },
                                        { number: '100%', text: 'Export oriented Units' },
                                        { number: '20', text: 'Satisfied Importers' },
                                        { number: '50', text: 'Team Members' }
                                    ].map((item, index) => (
                                        <Zoom in timeout={500} key={index} style={{ transitionDelay: `${index * 100}ms` }}>
                                            <Box>
                                                <Counter endValue={item.number} text={item.text} />
                                            </Box>
                                        </Zoom>
                                    ))}
                                </Box>
                            </Box>
                        </Fade>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About; 