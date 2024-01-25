import styles from './integrantes.module.css';
import nordic from './assets/nordic.png';
import nico from './assets/nico.jpg';
import wasocu from './assets/wasocu.png';
import pudancul from './assets/pudancul.png';

const IntegrantesList = [
    {
        name: "Tuno D'Artagnan",
        title: 'Director/Acordeón/Percusiones/Flauta Traversa',
        description:
            '"Nuestro actual director, es el ser más brillante que jamás exisitió sobre la tierra", frase acuñada por la Orquesta Filarmónica de Berlín, en el año 1978, refiriéndose a Herbert von Karajan. Es el sujeto más en forma de la agrupación... Si contamos que una circunferencia es una forma. ',
        picture: nico,
    },
    {
        name: 'Tuno Wasocu',
        title: 'Guitarra/Percusiones/Laúd',
        description:
            'Dueño de un (no)refinado gusto y de una peculiar inoperancia con todo lo digital, nuestro Tuno Wasocu es un Caballero enchapado a la antigua, tanto así que no entiende el español moderno (y de paso ningún otro idioma o forma de comunicación). Dueño de una plasticidad y agilidad para bailar que te sorprenderán. Porque son inexistentes.',
        picture: wasocu,
    },
    {
        name: 'Tuno Pudancul',
        title: 'Guitarra - Voz Solista',
        description:
            'Nuestro Tuno más reciente (a lo que hemos llegado, Dios mío), es una persona pura, casta, de buenos modales, casta y sobre todo casta. Es tan inocente que aún cree en el viejito pascuero, en el ratón de los dientes, en que Dios existe, etc. Un diamante muy (en) bruto, es nuestra promesa para solista de esta noble Institución.',
        picture: pudancul,
    },
    {
        name: 'Pardillo Nordico',
        title: 'Laúd/Guitarra/Charango',
        description:
            'Venido desde tierras nórdicas (bien, bien al norte de Iquique), Thor es una alpargata al lado de él. Dueño de un corazón gigante, te aseguramos que encontrará un espacio para tí en él. Y para 1000 más. Un As de la supervivencia, Bear Grills no es nadie, irá a carretear con Luca, tomará, comerá, conquistará, y volverá a su casa en taxi. Y con 2 Lucas.',
        picture: nordic,
    },
];

function App() {
    return (
        <>
            <div
                className={styles.titleBackground}
                style={{ color: '#000000' }}
            >
                <h1>Sobre los integrantes...</h1>
                <h2>
                    He aquí una breve reseña de los d̶e̶p̶r̶e̶d̶a̶d̶o̶r̶e̶s̶ buenos mozos
                    que integran esta cofradía
                </h2>
            </div>
            <div className={styles.integrantesContainer}>
                {IntegrantesList.map((data) => (
                    <>
                        <div className={styles.integrante}>
                            <div className={styles.integrantePicture2}>
                                <img
                                    src={data.picture}
                                    name={data.name}
                                    className={styles.integrantePicture}
                                    height={'100px'}
                                    width={'100px'}
                                ></img>
                            </div>
                            <div>
                                <div className={styles.name}>{data.name}</div>
                                <div className={styles.tittle2}>
                                    {data.title}
                                </div>
                                <div className={styles.description}>
                                    {data.description}
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
}
export default App;
