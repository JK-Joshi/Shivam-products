import { Box, Typography, Button } from "@mui/material";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import { ColorHelper } from "../../../Helper/ColorHelper";
import { motion } from "framer-motion";
import image1 from '../../../Assets/Image1.png'
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AboutSection = ({ imageSrc, title, description }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
    const navigate = useNavigate()

    return (
        <Box ref={ref} sx={{
            width: '100dvw',
            height: "auto",
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: { xs: 3, sm: 4, md: 5 },
            gap: { xs: 4, sm: 3, md: 0 },
            px: { xs: 2, sm: 3, md: 0 }
        }}>

            <Box sx={{
                width: { xs: "95%", sm: "90%", md: "50%" },
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                >
                    <Box
                        component={'img'}
                        src={image1}
                        sx={{
                            width: { xs: '90%', sm: '80%', md: '70%' },
                            maxWidth: '500px'
                        }}
                    />
                </motion.div>
            </Box>

            <Box sx={{
                width: { xs: "95%", sm: "90%", md: "50%" },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                px: { xs: 2, sm: 3, md: 4, lg: 5 },
            }}>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    style={{ width: '100%' }}
                >
                    <Typography
                        component={'h1'}
                        sx={{
                            textAlign: { xs: 'center', md: 'left' },
                            fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.8rem', lg: '2rem' },
                            fontWeight: 800,
                            color: ColorHelper.appColorDark
                        }}
                    >
                        <span style={{ fontWeight: 200 }}>About</span> SHIVAM PRODUCTS
                    </Typography>
                    <Typography sx={{
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem', lg: '1.3rem' },
                        fontWeight: 500,
                        color: '#666',
                        mt: { xs: 2, sm: 2.5, md: 3 },
                        textAlign: { xs: 'center', md: 'left' }
                    }}>
                        At Shivam Products, we specialize in <strong style={{ color: ColorHelper.appColorDark, fontWeight: 600 }}>high-quality Zinc die-casting manufacturing</strong>, delivering precision-engineered components for various industries. Equipped with state-of-the-art machinery, our production facility ensures superior craftsmanship and durability in every product we create.
                    </Typography>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: { xs: 'center', md: 'flex-start' },
                        mt: { xs: 3, sm: 4, md: 5 }
                    }}
                        onClick={() => navigate('/about')}
                    >
                        <Button
                            variant='contained'
                            sx={{
                                bgcolor: ColorHelper.appColorDark,
                                p: { xs: 1.5, sm: 1.8, md: 2 },
                                borderRadius: 0,
                                border: `2px solid ${ColorHelper.appColorLight}`,
                                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                                '&:hover': {
                                    bgcolor: ColorHelper.appColorLight,
                                    color: ColorHelper.appColorDark,
                                    border: `2px solid ${ColorHelper.appColorDark}`,
                                    '& .icon-hover': { color: ColorHelper.appColorDark }
                                }
                            }}
                            endIcon={
                                <Box
                                    component={Icon}
                                    icon="ant-design:double-right-outlined"
                                    className="icon-hover"
                                    sx={{
                                        color: ColorHelper.appColorLight,
                                        transition: 'color 0.3s ease-in-out',
                                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }
                                    }}
                                />
                            }
                        >
                            Read More
                        </Button>
                    </Box>
                </motion.div>
            </Box>
        </Box>
    );
};

AboutSection.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ColorHelper: PropTypes.object.isRequired,
};

export default AboutSection;
