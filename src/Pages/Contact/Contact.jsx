import React, { useState } from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    Button,
    Paper,
    Fade,
    InputAdornment
} from '@mui/material';
import { ColorHelper } from '../../Helper/ColorHelper';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import SubjectIcon from '@mui/icons-material/Subject';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'phone') {
            // Only allow numbers and limit to 10 digits
            const numbersOnly = value.replace(/[^0-9]/g, '');
            setFormData({
                ...formData,
                [name]: numbersOnly.slice(0, 10)
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailSubject = encodeURIComponent(`Contact Inquiry: ${formData.subject}`);
        const emailBody = encodeURIComponent(
            `Dear Shivam Products Team,

Please find my contact inquiry details below:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}

I look forward to hearing from you soon.

Best regards,
${formData.name}`
        );

        window.location.href = `mailto:sales@shivamproducts.in?subject=${emailSubject}&body=${emailBody}`;
    };

    const contactDetails = [
        {
            icon: <LocationOnIcon sx={{ fontSize: 40, color: ColorHelper.appColorDark }} />,
            title: 'Address',
            content: 'Sahjanand Industrial Area, Street No-1, Nr. Kishan Gaushala, National Highway 27H, Rajkot-360003.',
            description: 'Our office location'
        },
        // {
        //     icon: <PhoneIcon sx={{ fontSize: 40, color: ColorHelper.appColorDark }} />,
        //     title: 'Phone',
        //     content: '+1 234 567 8900',
        //     description: 'Call us anytime'
        // },
        {
            icon: <EmailIcon sx={{ fontSize: 40, color: ColorHelper.appColorDark }} />,
            title: 'Email',
            content: 'sales@shivamproducts.in',
            description: 'Send us an email'
        },
        {
            icon: <AccessTimeIcon sx={{ fontSize: 40, color: ColorHelper.appColorDark }} />,
            title: 'Working Hours',
            content: 'Mon - Fri: 9:00 AM - 6:00 PM',
            description: 'Our business hours'
        }
    ];

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
                    Contact <span style={{ fontWeight: 300 }}>Us</span>
                </Typography>

                <Grid container spacing={4}>
                    {/* Contact Form */}
                    <Grid item xs={12} md={7}>
                        <Fade in timeout={1000} triggerOnce>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 4,
                                    borderRadius: '20px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    backdropFilter: 'blur(10px)',
                                }}
                            >
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Your Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <PersonIcon sx={{ color: ColorHelper.appColorDark }} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '&:hover fieldset': {
                                                            borderColor: ColorHelper.appColorDark,
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: ColorHelper.appColorDark,
                                                        }
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        '&.Mui-focused': {
                                                            color: ColorHelper.appColorDark,
                                                        }
                                                    }
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Email Address"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <EmailIcon sx={{ color: ColorHelper.appColorDark }} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '&:hover fieldset': {
                                                            borderColor: ColorHelper.appColorDark,
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: ColorHelper.appColorDark,
                                                        }
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        '&.Mui-focused': {
                                                            color: ColorHelper.appColorDark,
                                                        }
                                                    }
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Phone Number"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                inputProps={{
                                                    maxLength: 10,
                                                    pattern: '[0-9]*'
                                                }}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <PhoneIcon sx={{ color: ColorHelper.appColorDark }} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                helperText={formData.phone.length > 0 && formData.phone.length < 10 ? "Please enter 10 digits" : ""}
                                                error={formData.phone.length > 0 && formData.phone.length < 10}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '&:hover fieldset': {
                                                            borderColor: ColorHelper.appColorDark,
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: ColorHelper.appColorDark,
                                                        }
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        '&.Mui-focused': {
                                                            color: ColorHelper.appColorDark,
                                                        }
                                                    }
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <SubjectIcon sx={{ color: ColorHelper.appColorDark }} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '&:hover fieldset': {
                                                            borderColor: ColorHelper.appColorDark,
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: ColorHelper.appColorDark,
                                                        }
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        '&.Mui-focused': {
                                                            color: ColorHelper.appColorDark,
                                                        }
                                                    }
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Message"
                                                name="message"
                                                multiline
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '&:hover fieldset': {
                                                            borderColor: ColorHelper.appColorDark,
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: ColorHelper.appColorDark,
                                                        }
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        '&.Mui-focused': {
                                                            color: ColorHelper.appColorDark,
                                                        }
                                                    }
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                fullWidth
                                                size="large"
                                                endIcon={<SendIcon />}
                                                sx={{
                                                    backgroundColor: ColorHelper.appColorDark,
                                                    '&:hover': {
                                                        backgroundColor: ColorHelper.appColorDark,
                                                        opacity: 0.9,
                                                    },
                                                    py: 1.5,
                                                }}
                                            >
                                                Send Message
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        </Fade>
                    </Grid>

                    {/* Contact Details */}
                    <Grid item xs={12} md={5}>
                        <Grid container spacing={3}>
                            {contactDetails.map((detail, index) => (
                                <Grid item xs={12} key={index}>
                                    <Fade in timeout={1000} delay={index * 200} triggerOnce>
                                        <Paper
                                            elevation={2}
                                            sx={{
                                                p: 3,
                                                borderRadius: '15px',
                                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                backdropFilter: 'blur(10px)',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-5px)',
                                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                                }
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                                {detail.icon}
                                                <Box>
                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            color: ColorHelper.appColorDark,
                                                            fontWeight: 600,
                                                            mb: 0.5,
                                                        }}
                                                    >
                                                        {detail.title}
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            color: '#666',
                                                            mb: 0.5,
                                                        }}
                                                    >
                                                        {detail.content}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            color: '#999',
                                                        }}
                                                    >
                                                        {detail.description}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Fade>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact; 