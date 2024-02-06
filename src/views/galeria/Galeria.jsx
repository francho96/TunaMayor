import styles from './galeria.module.css'

function Galeria() {
    return (
        <>
            <div 
                className={styles.titleBackground} 
                style={{ color: '#000000' }}
            >
                <h1 className={styles.title}>Nosotros, los reales</h1>
                <h2 className={styles.subtitle}>
                    Una exploración por los distintos momentos...
                </h2>
            </div>

        </>
    );
}

export default Galeria;