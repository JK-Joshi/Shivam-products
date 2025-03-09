import React from 'react';
import { Box, Button, Typography, Card, Zoom } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon } from '@iconify/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ColorHelper } from '../../../Helper/ColorHelper';
import bgImage from '../../../Assets/background.avif';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { productCategories } from '../../../Constants/ProductImages';

const OurProducts = () => {
    const navigate = useNavigate();
    const filteredProducts = productCategories.filter(product => product.is_publish);

    const handleHover = () => {
        return ColorHelper.appColorDark;
    };

    const handleProductClick = (category) => {
        navigate(`/products?category=${category}`);
    };

    return (
        <Box sx={{
            width: '100%',
            minHeight: { xs: '90dvh', sm: '85dvh', md: '80dvh' },
            position: 'relative',
            mt: { xs: 15, sm: 12, md: 10 },
            overflow: 'hidden',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {/* Background Image with Gradient */}
            <Box
                sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundImage: `linear-gradient(to bottom, rgba(41, 95, 45, 0.1), rgba(255, 255, 255, 1)), url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.3,
                    zIndex: 1,
                }}
            />

            {/* Title */}
            <Typography
                variant="h3"
                sx={{
                    position: 'relative',
                    color: ColorHelper.appColorDark,
                    fontWeight: 'bold',
                    zIndex: 3,
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    textAlign: 'center',
                    mb: { xs: 5, sm: 6, md: 8 },
                    mt: { xs: 2, sm: 3, md: 4 }
                }}
            >
                <span style={{ fontWeight: 300 }}>Our</span> Products
            </Typography>

            {/* Product Slider Container */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '1400px',
                    zIndex: 3,
                    px: { xs: 2, sm: 4, md: 6 },
                    pb: { xs: 4, sm: 5, md: 6 },
                }}
            >
                {/* Custom Navigation Buttons */}
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: { xs: '0.5rem', sm: '1rem', md: '2rem' },
                    transform: 'translateY(-50%)',
                    zIndex: 5
                }}>
                    <Button
                        className="custom-swiper-button-prev"
                        sx={{
                            minWidth: { xs: '35px', sm: '40px', md: '45px' },
                            width: { xs: '35px', sm: '40px', md: '45px' },
                            height: { xs: '35px', sm: '40px', md: '45px' },
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            border: `2px solid ${ColorHelper.appColorDark}`,
                            color: ColorHelper.appColorDark,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            '&:hover': {
                                backgroundColor: ColorHelper.appColorDark,
                                color: 'white'
                            },
                            '&.swiper-button-disabled': {
                                opacity: 0.5,
                                cursor: 'not-allowed'
                            }
                        }}
                    >
                        <Icon icon="mdi:chevron-left" fontSize="1.5rem" />
                    </Button>
                </Box>

                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    right: { xs: '0.5rem', sm: '1rem', md: '2rem' },
                    transform: 'translateY(-50%)',
                    zIndex: 5
                }}>
                    <Button
                        className="custom-swiper-button-next"
                        sx={{
                            minWidth: { xs: '35px', sm: '40px', md: '45px' },
                            width: { xs: '35px', sm: '40px', md: '45px' },
                            height: { xs: '35px', sm: '40px', md: '45px' },
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            border: `2px solid ${ColorHelper.appColorDark}`,
                            color: ColorHelper.appColorDark,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            '&:hover': {
                                backgroundColor: ColorHelper.appColorDark,
                                color: 'white'
                            },
                            '&.swiper-button-disabled': {
                                opacity: 0.5,
                                cursor: 'not-allowed'
                            }
                        }}
                    >
                        <Icon icon="mdi:chevron-right" fontSize="1.5rem" />
                    </Button>
                </Box>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    navigation={{
                        nextEl: '.custom-swiper-button-next',
                        prevEl: '.custom-swiper-button-prev',
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 25
                        },
                        900: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        },
                    }}
                    style={{
                        padding: '20px 10px 60px',
                        '--swiper-pagination-color': ColorHelper.appColorDark,
                        '--swiper-pagination-bullet-inactive-color': ColorHelper.appColorLight,
                        '--swiper-pagination-bullet-inactive-opacity': '0.5',
                        '--swiper-pagination-bullet-size': '10px',
                        '--swiper-pagination-bullet-horizontal-gap': '6px'
                    }}
                >
                    {filteredProducts.map((product) => (
                        <SwiperSlide key={product.id} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Card
                                onClick={() => handleProductClick(product.category)}
                                sx={{
                                    width: { xs: "90%", sm: "18rem" },
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
                                    mx: 'auto',
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
                                        <Box
                                            component="img"
                                            src={product.image}
                                            alt={product.name}
                                            sx={{
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
                                        {product.name}
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
                                        {product.description}
                                    </Typography>
                                    <Zoom in timeout={500}>
                                        <Button
                                            size="large"
                                            variant="outlined"
                                            endIcon={<ArrowForwardIcon />}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleProductClick(product.category);
                                            }}
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

export default OurProducts;
