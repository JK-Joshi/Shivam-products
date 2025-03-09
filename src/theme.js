import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import '@fontsource/montserrat'; // Import Montserrat font

const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat, sans-serif', // Apply Montserrat globally
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    fontFamily: 'Montserrat, sans-serif', // Ensures all elements use Montserrat
                },
                '*': {
                    fontFamily: 'Montserrat, sans-serif', // Apply to all elements
                },
                '*::before': {
                    fontFamily: 'Montserrat, sans-serif',
                },
                '*::after': {
                    fontFamily: 'Montserrat, sans-serif',
                }
            },
        },
    },
});

const ThemeWrapper = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline /> {/* Ensures global styles apply */}
            {children}
        </ThemeProvider>
    );
};

export default ThemeWrapper;
