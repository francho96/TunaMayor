import styles from './historia.module.css'
import oldTuna from './assets/tuna-1992.png'

function App() {
    return (
        <> 
            <div 
                className={styles.titleBackground} 
                style={{ color: '#000000' }}
            >
            <h1>Nuestra Historia</h1>
                <h2>
                    Una breve reseña de 30 años de vida...
                </h2>
        
            </div>
            

            <div className="video-container">
                <iframe src="https://www.youtube.com/embed/b_Gy9115ZXc"
                    width="560"
                    height="315"></iframe>
               
            </div>
        
            <div className="first-block">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sed dolorem accusantium quod deserunt minus. 
                    Sapiente consequuntur magnam dicta atque a suscipit ratione, 
                    possimus facilis praesentium nam quo excepturi vitae alias!</p>
                

            </div>
        
        </>
    );
}
export default App;
