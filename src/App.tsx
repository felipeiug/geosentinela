import { AppThemeProvider, KeyEventHandler, StartApi } from './context';
import { setClaritySesion, startPrototypes } from './core';
import { AppRoutes } from './router';


function App() {
    startPrototypes();
    setClaritySesion();

    return (
        <AppThemeProvider>
            <KeyEventHandler>
                <StartApi>
                    <AppRoutes />
                </StartApi>
            </KeyEventHandler>
        </AppThemeProvider>
    );
}

export default App;
