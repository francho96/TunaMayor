import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

const TopBar = lazy(() => import('../components/topbar/TopBar'));

function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TopBar />
            <div style={{ marginTop: '-100px' }}>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
