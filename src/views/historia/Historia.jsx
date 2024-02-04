import styles from './historia.module.css'
import oldTuna from './assets/tuna-1992.png'
import tunaSong from './assets/tuna-song.png'
import tunaClub from './assets/tuna-club.png'

function App() {
    return (
        <> 
            <div 
                className={styles.titleBackground} 
                style={{ color: '#000000' }}
            >
                <h1 className={styles.title}>Nuestra Historia</h1>
                <h2 className={styles.subtitle}>
                    Una breve reseña de 30 años de vida...
                </h2>
            </div>
            

            <div className={styles.videoContainer}>

                <iframe 
                    className={styles.videoFrame}
                    src="https://www.youtube.com/embed/b_Gy9115ZXc"
                    width="560"
                    height="315"></iframe>
               
            </div>
        
            <div className={styles.firstBlock}>
                <div>
                    <img    
                        width="480"
                        height="400"
                        className={styles.imgFrameFirstBlock} 
                        src={oldTuna}/>
                </div>
                <div className={styles.firstParagraph}>
                    <p>Érase un día de Agosto del año 1992 cuando al Rector 
                        de la Universidad de Santiago de Chile de esa época 
                        se le ocurrió la genial idea de que en esta casa de 
                        estudios hubiera una "Estudiantina". </p>
                    <br />
                    <p>
                        Esto fue el inicio de todo. El inicio de 26 años de estar 
                        rondando por la Universidad, de estar rondando por las 
                        calles de nuestra capital y distintas ciudades de Chile, 
                        de viajar por distintos países de este continente. De enamorar 
                        a un sinfín de mujeres a nuestro paso, de compartir y mantener 
                        esta tradición llamada "Tuna".
                    </p>
                </div>
            </div>

            <div className={styles.secondBlock}>

                <p className={styles.secondParagraph}>
                    Aunque mal llamados Estudiantina (sin desmerecer a nadie, por mera 
                    ignorancia de la gente de esa época), se comenzó a forjar una 
                    agrupación a modo de taller que prometía y que llevaba a su propio 
                    modo la tradición. Dirigida por el Maestro J. Genaro Arias desde su 
                    inicio el 13 de Agosto de 1993 (la primera aparición en escenario), 
                    fue haciéndose un renombre en la Universidad. No pasó tiempo para que 
                    se empezaran a dar cuenta de que este "taller" era algo que iba mucho 
                    más allá, y en el año 1994 la agrupación de músicos profesionales y 
                    profesores, la Estudiantina Filarmónica Cal y Canto apadrinó a la 
                    agrupación, encauzándolos hacia otro norte, donde la denominación 
                    de taller era muy pequeña para describirla.

                </p>
            </div>

            <div className={styles.firstBlock}>
                <div className={styles.thirdParagraph}>
                    <p>
                        La Tuna siguió su camino, y después de muchos años 
                        de aprendizaje, éxito, y varias generaciones de 
                        discípulos, toma el manto de Director de la agrupación 
                        el Maestro Vicente Fuentealba, a su vez Tuno de la Estudiantina 
                        Filarmónica Cal y Canto, en el año 2006. Es entonces cuando 
                        la agrupación empieza a viajar y a darse a conocer por Santiago 
                        y por diferentes lugares de nuestro escarpado territorio 
                        nacional, siendo uno de sus primeros grandes encuentros el 
                        encuentro de Tunas y Estudiantinas en Angol del año 2008. 
                        También empieza a ampliar su repertorio, añadiendo postimetrías 
                        del período Renacentista, a modo de homenaje a los primeros Tunos
                         que vieron su nacimiento (quizás algo discutible) en esta 
                         época en particular.
                    </p>
                </div>
                <div>
                    <img    
                        width="400"
                        height="270"
                        className={styles.imgFrameThirdBlock} 
                        src={tunaSong}/>
                </div>
            </div>


            <div className={styles.secondBlock}>

                <p className={styles.secondParagraph}>
                Después de mucho trabajo y dedicación el grupo adquiere otros aires,
                 ya de una Tuna Universitaria como tal. Al finalizar la relación laboral 
                 de nuestro entonces Director con el Departamento de Cultura de la 
                 Universidad, la Tuna se traslada al alero de la Facultad de Ciencia
                  (cambiando su nombre, por una mera formalidad) pero siendo el mismo 
                  conjunto, en el año 2010. Desde ese día la Tuna deja de llamarse 
                  "Estudiantina", y se inicia la grabación de nuestro primer Disco 
                  Compacto, el que reune la mayoría del trabajo realizado hasta la fecha.
                   Desde el año 2013 la agrupación se hermana con la gallardísima 
                   Estudiantina Magisterio de San Bernardo, siendo grandes amigos de la 
                   agrupación e invitados regulares en todas las galas de aniversario 
                   realizadas desde entonces.

                </p>
            </div>
            

            <div className={styles.firstBlock}>
                <div>
                    <img    
                        width="480"
                        height="400"
                        className={styles.imgFrameFirstBlock} 
                        src={tunaClub}/>
                </div>
                <div className={styles.firstParagraph}>
                    <p>Con muchos grandes encuentros en nuestro país es 
                        en el año 2015 cuando la Tuna logra hacer realidad 
                        un sueño: el primer viaje al extranjero, al ser invitados
                         al XXV Ecuentro Internacional de Tunas de Arequipa, 
                         Perú, demostrando el trabajo y el aprendizaje obtenidos 
                         después de tantos años de esfuerzo y sacrificio. 
                         En el día de hoy y desde el año 2016 es Nicolás Ojeda el 
                         Director musical, y con mucho cariño nos esforzamos a 
                         diario para mantener la agrupación, así como siempre asegurar
                          un espectáculo y show de calidad, sea donde sea que seamos 
                          llamados. </p>
                    
                </div>
            </div>


            <div className={styles.secondBlock} >

                <p className={styles.secondParagraph}>
                    Con mucho éxito, viajamos al XXVI Encuentro de Tunas Monseñor 
                    Reyes Fonseca, en Cota, Colombia, en Noviembre de 2016, siendo 
                    una experiencia inolvidable a la cual regresaremos, en un futuro 
                    próximo.
                    En el presente somos una cofradía de verdad, donde la amistad y 
                    las ganas de pasarlo bien son lo que más nos representa y anima 
                    a seguir compartiendo esta noble tradición.
                </p>
            </div>
                    

        </>
    );
}
export default App;
