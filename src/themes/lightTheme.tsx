import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#ff4081',
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
        },
    },
});