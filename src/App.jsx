import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./layout/GeneralLayout'));
const Historia = lazy(() => import('./views/historia/Historia'));

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="historia" element={<Historia />}>
                            {' '}
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
