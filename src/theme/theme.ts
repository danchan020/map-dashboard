import { createTheme } from '@mui/material/styles';

// Theme: text color + typography and some component style overrides
const theme = createTheme({
    palette: {
        text: {
            primary: '#212121',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: { fontSize: '48px', marginBottom: '24px' },
        h2: { fontSize: '36px', fontWeight: 700, marginBottom: '16px' },
        h3: { fontSize: '26px', fontWeight: 300, marginBottom: '12px' },
        h4: { fontSize: '22px', fontWeight: 700, marginBottom: '12px' },
        h5: { fontSize: '18px', marginBottom: '8px' },
        h6: { fontSize: '16px', fontWeight: 300, marginBottom: '8px' },
        body1: { fontSize: '16px' },
        body2: { fontSize: '14px' },
    },
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: '16px',
                    color: '#757575',
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    fontSize: '16px',
                    color: '#01579B',
                    textDecoration: 'none',
                    '&:hover': {
                        textDecoration: 'underline',
                    },
                },
            },
        },
    },
});

export default theme;
