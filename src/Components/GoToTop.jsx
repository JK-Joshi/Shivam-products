import React, { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ColorHelper } from '../Helper/ColorHelper';

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Zoom in={isVisible}>
            <Fab
                color="primary"
                size="medium"
                aria-label="scroll back to top"
                onClick={scrollToTop}
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                    bgcolor: ColorHelper.appColorDark,
                    '&:hover': {
                        bgcolor: ColorHelper.appColorLight,
                        '& .MuiSvgIcon-root': {
                            color: ColorHelper.appColorDark
                        }
                    },
                    zIndex: 1000,
                }}
            >
                <KeyboardArrowUpIcon sx={{ 
                    color: '#fff',
                    transition: 'color 0.3s ease'
                }} />
            </Fab>
        </Zoom>
    );
};

export default GoToTop; 