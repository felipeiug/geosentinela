import { setClaritySesion, startPrototypes } from './core';
import { AppRoutes } from './router';


function App() {
    startPrototypes();
    setClaritySesion();

    return (
        <AppRoutes />
    );
}

export default App;
