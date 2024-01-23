import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';

import logoTuna from './assets/logo-tuna_bn.png';
import lamericanaBorder from './assets/LamericanaBorder.png';

const Layout = lazy(() => import('./layout/GeneralLayout'));
const Historia = lazy(() => import('./views/historia/Historia'));
const Integrantes = lazy(() => import('./views/integrantes/Integrantes'));
function Loading() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const delay = 3000;
        const timer = setTimeout(() => {
            setLoading(false);
        }, delay);

        return () => clearTimeout(timer);
    }, []);

    return loading ? (
        <div className={styles.loadingLetterLoading}>
            <img
                width="300px"
                className={styles.rotateBorder}
                src={lamericanaBorder}
            ></img>
            <img
                width="130px"
                className={styles.lamericanaLetter}
                src={logoTuna}
            ></img>
        </div>
    ) : (
        <Layout />
    );
}

function App() {
    return (
        <>
            <BrowserRouter>
                <Suspense fallback={<></>}>
                    <Routes>
                        <Route path="/" element={<Loading />}>
                            <Route
                                path="historia"
                                element={<Historia />}
                            ></Route>
                            <Route
                                path="integrantes"
                                element={<Integrantes />}
                            ></Route>
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    );
}

export default App;
