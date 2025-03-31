import React from 'react';
import { Box, Typography, Card, Button, Zoom } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ColorHelper } from '../../Helper/ColorHelper';
import { productCategories } from '../../Constants/ProductImages';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const HomeProducts = () => {
    const navigate = useNavigate();
    const filteredProductCategories = productCategories.filter(product => product.is_publish);

    const handleCategoryClick = (category) => {
        navigate(`/products?category=${category}`);
    };

    return (
        <Box sx={{
            py: { xs: 5, md: 8 },
            backgroundColor: '#fff',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Decorative Elements */}
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

            {/* Section Title */}
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

            {/* Swiper */}
            <Box sx={{ px: { xs: 2, md: 4 } }}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    style={{
                        paddingBottom: '50px', // Space for pagination
                    }}
                >
                    {filteredProductCategories.map((product) => (
                        <SwiperSlide key={product.id}>
                            <Card
                                sx={{
                                    width: "100%",
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
                                        background: ColorHelper.appColorDark,
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
                                    <Zoom in timeout={500}>
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
};

export default HomeProducts; 