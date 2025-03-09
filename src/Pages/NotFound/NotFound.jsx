import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ColorHelper } from '../../Helper/ColorHelper';
import notFoundImage from '../../Assets/404-notFound.jpg'

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            backgroundColor: '#fff',
            overflow: 'hidden',
            pt: { xs: '80px', md: '100px' },
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
                    right: '5%',
                    width: { xs: '100px', md: '200px' },
                    height: { xs: '100px', md: '200px' },
                    borderRadius: '50%',
                    backgroundColor: `${ColorHelper.appColorDark}10`,
                    opacity: 0.5,
                }} />
                <Box sx={{
                    position: 'absolute',
                    bottom: '15%',
                    left: '8%',
                    width: { xs: '150px', md: '250px' },
                    height: { xs: '150px', md: '250px' },
                    borderRadius: '50%',
                    backgroundColor: `${ColorHelper.appColorDark}10`,
                    opacity: 0.3,
                }} />

                {/* Decorative Lines */}
                <Box sx={{
                    position: 'absolute',
                    top: '30%',
                    left: '20%',
                    width: '2px',
                    height: '100px',
                    background: `linear-gradient(to bottom, ${ColorHelper.appColorDark}20, transparent)`,
                }} />
                <Box sx={{
                    position: 'absolute',
                    bottom: '40%',
                    right: '25%',
                    width: '2px',
                    height: '100px',
                    background: `linear-gradient(to bottom, ${ColorHelper.appColorDark}20, transparent)`,
                }} />
            </Box>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: 3,
                }}>
                    {/* 404 Image */}
                    <Box
                        component="img"
                        src={notFoundImage}
                        alt="404 Not Found"
                        sx={{
                            width: { xs: '80%', md: '60%' },
                            maxWidth: '500px',
                            height: 'auto',
                            mb: 2,
                            animation: 'float 6s ease-in-out infinite',
                            '@keyframes float': {
                                '0%': {
                                    transform: 'translateY(0px)',
                                },
                                '50%': {
                                    transform: 'translateY(-20px)',
                                },
                                '100%': {
                                    transform: 'translateY(0px)',
                                },
                            },
                        }}
                    />

                    {/* Error Message */}
                    <Typography
                        variant="h2"
                        sx={{
                            color: ColorHelper.appColorDark,
                            fontWeight: 600,
                            mb: 1,
                        }}
                    >
                        Oops! Page Not Found
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            color: '#666',
                            mb: 3,
                            maxWidth: '600px',
                        }}
                    >
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </Typography>

                    {/* Back to Home Button */}
                    <Button
                        variant="contained"
                        onClick={() => navigate('/')}
                        sx={{
                            backgroundColor: ColorHelper.appColorDark,
                            color: '#fff',
                            px: 4,
                            py: 1.5,
                            '&:hover': {
                                backgroundColor: ColorHelper.appColorDark,
                                opacity: 0.9,
                            },
                        }}
                    >
                        Back to Home
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default NotFound; 