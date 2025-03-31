import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Button, Card, Fade, Zoom } from '@mui/material';
import { ColorHelper } from '../../Helper/ColorHelper';
import { productCategories, allProducts } from '../../Constants/ProductImages';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Products = () => {
    const [showProducts, setShowProducts] = useState(false);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [fadeIn, setFadeIn] = useState(true);

    const filteredProductCategories = productCategories.filter(product => product.is_publish);


    const handleCategoryClick = (category) => {
        setShowProducts(true);
        const products = allProducts.filter(product => product.category === category);
        setCategoryProducts(products);
        setFadeIn(false);
    };

    const handleBackClick = () => {
        setShowProducts(false);
        setFadeIn(true);
    };

    const handleHover = () => {
        return ColorHelper.appColorDark;
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
                {/* Enhanced Decorative Elements */}
                <Box sx={{
                    position: 'absolute',
                    top: '5%',
                    right: '10%',
                    width: { xs: '80px', md: '120px' },
                    height: { xs: '80px', md: '120px' },
                    backgroundImage: 'radial-gradient(circle, rgba(41, 95, 45, 0.2) 1px, transparent 1px)',
                    backgroundSize: '10px 10px',
                    opacity: 0.5,
                    animation: 'float 6s ease-in-out infinite',
                    '@keyframes float': {
                        '0%, 100%': { transform: 'translateY(0)' },
                        '50%': { transform: 'translateY(-20px)' },
                    },
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
                    animation: 'float 8s ease-in-out infinite',
                }} />
                {/* Additional Decorative Elements */}
                <Box sx={{
                    position: 'absolute',
                    top: '30%',
                    left: '15%',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, rgba(41, 95, 45, 0.1), rgba(41, 95, 45, 0.2))',
                    animation: 'pulse 4s ease-in-out infinite',
                    '@keyframes pulse': {
                        '0%, 100%': { transform: 'scale(1)', opacity: 0.3 },
                        '50%': { transform: 'scale(1.2)', opacity: 0.5 },
                    },
                }} />
                <Box sx={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '15%',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, rgba(41, 95, 45, 0.1), rgba(41, 95, 45, 0.2))',
                    animation: 'pulse 5s ease-in-out infinite',
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
                    Our <span style={{ fontWeight: 300 }}>Products</span>
                </Typography>

                {/* Categories Grid */}
                {!showProducts && (
                    <Grid container spacing={4} sx={{ zIndex: 2 }}>
                        {filteredProductCategories.map((product, index) => (
                            <Grid item xs={12} sm={6} md={4} key={product.id} sx={{ display: "flex", justifyContent: "center" }}>
                                <Fade in={fadeIn} timeout={500} style={{ transitionDelay: `${index * 100}ms` }}>
                                    <Card
                                        onClick={() => handleCategoryClick(product.category)}
                                        sx={{
                                            width: "18rem",
                                            height: "29rem",
                                            border: `0.0625rem solid ${ColorHelper.appColorLight}`,
                                            borderRadius: "20px",
                                            display: "flex",
                                            alignItems: "end",
                                            justifyContent: "center",
                                            boxShadow: "0px 0px 2.5rem rgba(0, 0, 0, 0.1)",
                                            position: "relative",
                                            transition: "all 0.3s ease",
                                            cursor: "pointer",
                                            '&:hover': {
                                                transform: 'translateY(-10px)',
                                                boxShadow: "0px 0px 3.5rem rgba(0, 0, 0, 0.2)",
                                            }
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                background: handleHover(),
                                                transition: "background-color 0.5s ease",
                                                borderRadius: "20px",
                                                width: "100%",
                                                height: "60%",
                                                p: "1rem",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexDirection: "column",
                                                textAlign: "center",
                                            }}
                                        >
                                            <Box sx={{ position: "absolute", top: "3rem" }}>
                                                <LazyLoadImage
                                                    src={product?.image}
                                                    alt={product?.name}
                                                    effect="blur"
                                                    style={{
                                                        width: "10.5rem",
                                                        height: "10.5rem",
                                                        borderRadius: "20px",
                                                        objectFit: "cover",
                                                        boxShadow: "0 0 10px 0 #fff",
                                                        border: `1px solid ${ColorHelper.appColorDark}`,
                                                        transition: "transform 0.1s ease",
                                                        '&:hover': {
                                                            transform: 'scale(1.05)',
                                                        }
                                                    }}
                                                />
                                            </Box>
                                            <Typography
                                                sx={{
                                                    color: "#fff",
                                                    fontSize: "1.2rem",
                                                    mt: 2,
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {product?.name}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: "#fff",
                                                    fontSize: "0.7rem",
                                                    my: "1rem",
                                                    display: "-webkit-box",
                                                    WebkitBoxOrient: "vertical",
                                                    WebkitLineClamp: 2,
                                                    overflow: "hidden",
                                                    width: "inherit",
                                                    " & > p": { m: 0 },
                                                }}
                                            >
                                                {product?.description}
                                            </Typography>
                                            <Zoom in timeout={500} triggerOnce>
                                                <Button
                                                    size="large"
                                                    variant="outlined"
                                                    endIcon={<ArrowForwardIcon />}
                                                    onClick={() => handleCategoryClick(product.category)}
                                                    sx={{
                                                        mt: 1,
                                                        color: "#fff",
                                                        textTransform: "none",
                                                        borderRadius: "8px",
                                                        border: "2px solid #fff !important",
                                                        transition: "all 0.2s ease",
                                                        ".MuiButton-endIcon": {
                                                            transition: "all 0.2s ease",
                                                        },
                                                        "&:hover": {
                                                            transform: "scale(1.05)",
                                                            ".MuiButton-endIcon": {
                                                                transform: "rotate(45deg)",
                                                                ml: 2,
                                                            },
                                                        },
                                                    }}
                                                >
                                                    Know More
                                                </Button>
                                            </Zoom>
                                        </Box>
                                    </Card>
                                </Fade>
                            </Grid>
                        ))}
                    </Grid>
                )}

                {/* Products Grid */}
                {showProducts && (
                    <>
                        <Button
                            onClick={handleBackClick}
                            sx={{
                                mb: 4,
                                color: ColorHelper.appColorDark,
                                borderColor: ColorHelper.appColorDark,
                                '&:hover': {
                                    borderColor: ColorHelper.appColorDark,
                                    backgroundColor: 'rgba(41, 95, 45, 0.1)',
                                }
                            }}
                            variant="outlined"
                        >
                            Back to Categories
                        </Button>
                        <Grid container spacing={3} sx={{ zIndex: 2 }}>
                            {categoryProducts.map((product, index) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            width: '100%',
                                            paddingTop: '100%',
                                            margin: 'auto',
                                            overflow: 'hidden',
                                            borderRadius: '20px',
                                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                            // transform: initialLoad ? `rotate(${getRandomRotation()}deg)` : 'rotate(0deg)',
                                            opacity: 0,
                                            animation: 'fadeIn 0.5s forwards',
                                            animationDelay: `${index * 100}ms`,
                                            '@keyframes fadeIn': {
                                                from: { opacity: 0, transform: 'translateY(20px)' },
                                                to: { opacity: 1, transform: 'translateY(0)' }
                                            },
                                            '&:hover': {
                                                transform: 'rotate(0deg) scale(1.05)',
                                                boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
                                                '& .product-info': {
                                                    opacity: 1,
                                                    transform: 'translateY(0)',
                                                },
                                                '& .product-image': {
                                                    transform: 'scale(1.1)',
                                                }
                                            }
                                        }}
                                    >
                                        <LazyLoadImage
                                            className="product-image"
                                            src={product.productsImage}
                                            alt={product.productImageAltText}
                                            effect="blur"
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                            }}
                                        />
                                        <Box
                                            className="product-info"
                                            sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)',
                                                color: '#fff',
                                                p: 2,
                                                opacity: 0,
                                                transform: 'translateY(20px)',
                                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 1,
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle1"
                                                sx={{
                                                    fontWeight: 600,
                                                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                                }}
                                            >
                                                {product.productName}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontSize: '0.8rem',
                                                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                {product.productDescription}
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 10,
                                                right: 10,
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                backgroundColor: 'rgba(255,255,255,0.9)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.1)',
                                                    backgroundColor: '#fff',
                                                }
                                            }}
                                        >
                                            <ArrowForwardIcon sx={{ color: ColorHelper.appColorDark }} />
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                )}
            </Container>
        </Box>
    );
};

export default Products; 