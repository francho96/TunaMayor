import styles from './TopBar.module.css';
import { useState } from 'react';
import logoTuna from './assets/logo-tuna_bn.png';
import { Link } from 'react-router-dom';

const botonesTopbar = [
    { name: 'Inicio', link: '/' },
    { name: '¿Qué somos?', link: '/' },
    { name: 'Historia', link: 'historia' },
    { name: 'Noticias', link: '/' },
    { name: 'Integrantes', link: '/' },
    { name: 'Disco', link: '/' },
    { name: 'Contactos', link: '/' },
];

function Topbar() {
    const [menu, setMenu] = useState(false);

    function redirect() {
        window.location.replace('/');
    }
    return (
        <>
            <div className={styles.topbarContainer}>
                <div className={styles.logoContainer}>
                    <img src={logoTuna} onClick={redirect} height="80px"></img>
                </div>
                <div className={styles.botonesContainer}>
                    {botonesTopbar.map((data) => (
                        <>
                            <Link to={data.link} className={styles.button}>
                                {data.name}
                            </Link>
                        </>
                    ))}
                </div>
                <div
                    className={styles.botonCelular}
                    onClick={() => setMenu(!menu)}
                >
                    |||
                </div>
            </div>
            <div className={styles.menuContainer}>
                <div className={menu ? styles.menuOpen : styles.menuClosed}>
                    {botonesTopbar.map((data) => (
                        <>
                            <div className={styles.menuText}>
                                <Link
                                    to={data.link}
                                    className={styles.button}
                                    onClick={() => {
                                        setMenu(false);
                                    }}
                                >
                                    {data.name}
                                </Link>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Topbar;
