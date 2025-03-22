import React, { useEffect } from "react";
import { Button, Typography, Box } from "@mui/material";
import infoImage from "../../../Assets/infoImage.jpg"
import { ColorHelper } from "../../../Helper/ColorHelper";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Info = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 }); // Initialize AOS
    }, []);

    const navigate = useNavigate()

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "70vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "white",
            }}
        >
            {/* Background Image */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${infoImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            {/* Black Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "black",
                    opacity: 0.75,
                }}
            />

            {/* Content */}
            <Box sx={{ position: "relative", zIndex: 10, px: { xs: "", md: '20rem' }, py: '5rem', border: { xs: "", md: '0.2px solid white' }, borderRadius: '20px' }} >
                <Typography variant="h5" sx={{ color: ColorHelper.appColorLight, mb: 2 }} data-aos="flip-down">
                    We Are Selling Quality Products
                </Typography>
                <Typography variant="h4" textTransform="uppercase" sx={{ color: ColorHelper.appColorLight, fontWeight: 'bold' }} data-aos="flip-down">
                    serving the glob
                </Typography>
                <Typography variant="h6" sx={{ mt: 2 }} data-aos="flip-down">
                    Looking After The Environment
                </Typography>
                <Button variant='contained'
                    onClick={() => navigate('/about')}
                    sx={{
                        mt: 5,
                        bgcolor: ColorHelper.appColorDark,
                        p: 2,
                        borderRadius: 0,
                        border: `2px solid ${ColorHelper.appColorLight}`,
                        '&:hover': {
                            bgcolor: ColorHelper.appColorLight,
                            color: ColorHelper.appColorDark,
                            border: `2px solid ${ColorHelper.appColorDark}`,
                            '& .icon-hover': { color: ColorHelper.appColorDark }
                        }
                    }}
                    endIcon={<Box component={Icon} icon="ant-design:double-right-outlined" className="icon-hover"
                        sx={{ color: ColorHelper.appColorLight, transition: 'color 0.3s ease-in-out' }} />}
                    data-aos="zoom-in"
                >
                    Read More
                </Button>
            </Box>
        </Box>
    );
};

export default Info;
