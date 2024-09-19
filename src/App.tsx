import { StartApi } from './context';
import { setClaritySesion, startPrototypes } from './core';
import { AppRoutes } from './router';


function App() {
    startPrototypes();
    setClaritySesion();

    return (
        <StartApi>
            <AppRoutes />
        </StartApi>
    );
}

export default App;
