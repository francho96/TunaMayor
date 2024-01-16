import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./layout/GeneralLayout'));
const Historia = lazy(() => import('./views/historia/Historia'));

function App() {
    return (
        <>
            <BrowserRouter>
                <Suspense fallback={<>Cargando </>}>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route
                                path="historia"
                                element={<Historia />}
                            ></Route>
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    );
}

export default App;
