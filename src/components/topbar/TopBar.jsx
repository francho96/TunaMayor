import styles from './TopBar.module.css';
import logoTuna from './assets/logo-tuna_bn.png';

const botonesTopbar = [
    { name: 'Inicio', link: '/' },
    { name: '¿Qué somos?', link: '/' },
    { name: 'Historia', link: '/historia' },
    { name: 'Noticias', link: '/' },
    { name: 'Integrantes', link: '/' },
    { name: 'Disco', link: '/' },
    { name: 'Contactos', link: '/' },
];

function Topbar() {
    return (
        <>
            <div className={styles.topbarContainer}>
                <div className={styles.logoContainer}>
                    <img src={logoTuna} height="80px"></img>
                </div>
                <div className={styles.botonesContainer}>
                    {botonesTopbar.map((data) => (
                        <>
                            <div className={styles.button}>
                                <a to={data.link}>{data.name}</a>
                            </div>
                        </>
                    ))}
                </div>
                <div className={styles.botonCelular}>|||</div>
            </div>
        </>
    );
}

export default Topbar;