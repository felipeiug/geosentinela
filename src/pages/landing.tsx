import { AppBar, Box, Button, Icon, IconButton, Toolbar, Typography } from "@mui/material";

export const LandingPage: React.FC = () => {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Icon>menu</Icon>
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Meu App de Queimadas
                    </Typography>
                    <Button color="inherit">Contato</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
