import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

const TopBar = lazy(() => import('../components/topbar/TopBar'));

function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TopBar />
            <Outlet />
        </div>
    );
}

export default App;
