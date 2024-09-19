import { AppBar, Box, Button, Icon, IconButton, Toolbar, Typography } from "@mui/material";
import { DrawerData } from "../components";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const LandingPage: React.FC = () => {
    const position: LatLngExpression = [51.505, -0.09];

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


            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                height: '100%',
                flex: 1,
            }}>
                <MapContainer
                    center={position}
                    zoom={13}
                    style={{ height: "100%", width: "100%" }}
                >
                    {/* Camada de Mapa (Tile Layer) */}
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    />

                    {/* Marcador com Popup */}
                    <Marker position={position}>
                        <Popup>
                            <Icon>map</Icon>
                            <Typography fontWeight={"bold"}>
                                Um marcador no mapa.
                            </Typography>
                        </Popup>
                    </Marker>
                </MapContainer>
                <DrawerData />
            </Box>
        </Box>
    );
};
