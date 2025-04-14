import { FilmCard} from "../components/FilmCard"
function Home(){
    
    return (
        <>
        <div>
        <h1>Peliculas de Studio Ghibli</h1>
        </div>
        <div className="info-container">
            <div>
                <h2>¿Qué es?</h2>
                <p>Studio Ghibli es un famoso estudio de animación japonés, reconocido mundialmente por sus películas animadas de alta calidad, tanto en lo visual como en lo narrativo. Fue fundado en 1985 por los directores Hayao Miyazaki y Isao Takahata, junto con el productor Toshio Suzuki.</p>
                <p>El nombre “Ghibli” viene de un apodo de avión italiano, y la idea era "revolucionar la animación como un viento cálido del desierto".

</p>
            </div>
            <div>
                <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjBnMXptZnY1aXpqOGQyYzV3amlpejlmNGpreWR5amE1YzRrYW9pdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ASy3PKVFnk7ZK/giphy.gif" alt="" />
            </div>
        </div>
        <div className="film-list">
    
    <FilmCard 
        img="https://i.pinimg.com/736x/7f/e2/cd/7fe2cd5f0ba6f5d4f50becb9e461a0d9.jpg" 
        titulo="Mi vecino Totoro"
        año="1988"
        
    />
    
    <FilmCard 
        img="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/05/tumba-luciernagas-3310393.jpg" 
        titulo="La tumba de las luciérnagas"
        año="1988"
        
    />
    
    <FilmCard 
        img="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/05/castillo-ambulante-3310382.jpg" 
        titulo="El Castillo ambulante"
        año="2004"
        
    />
    
    <FilmCard 
        img="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/05/viaje-chihiro-3310384.jpg" 
        titulo="El viaje de Chihiro"
        año="2001"
        
    />
    
    <FilmCard 
        img="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/05/recuerdo-marnie-3310375.jpg" 
        titulo="El recuerdo de Marnie"
        año="2014"
        
    />
    
    <FilmCard 
        img="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/05/chico-garza-3310373.jpg" 
        titulo="El chico y la garza"
        año="2023"
       
    />
    
    
    <FilmCard 
        img="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/05/princesa-mononoke-3310386.jpg?tf=828x" 
        titulo="Princesa Mononoke"
        año="1997"
        
    />
    
    <FilmCard 
        img="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/05/nausicaa-valle-viento-3310396.jpg?tf=828x" 
        titulo="Nausicaä del Valle del Viento"
        año="1984"
        
    />
    
    <FilmCard 
        img="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/05/ponyo-acantilado-3310380.jpg?tf=828x"
        titulo="Ponyo en el acantilado"
        año="2008"
       
    />
    
    <FilmCard 
        img="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/05/cuento-princesa-kaguya-3310377.jpg?tf=828x" 
        titulo="El cuento de la princesa Kaguya"
        año="2013"
        
    />
    
    <FilmCard 
        img="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/05/susurros-corazon-3310387.jpg?tf=828x" 
        titulo="Susurros del corazón"
        año="1995"
        
    />
    
    <FilmCard 
        img="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/05/arrietty-mundo-diminutos-3310379.jpg?tf=828x" 
        titulo="Arrietty y el mundo de los diminutos"
        año="2010"
       
    />
    <FilmCard 
        img="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/05/colina-amapolas-3310378.jpg?tf=828x" 
        titulo="Colina de Amapolas"
        año="2011 "
        
    />
        <FilmCard 
        img="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/05/haru-reino-gatos-3310383.jpg?tf=828x" 
        titulo="Haru en el reino de los gatos"
        año="2002"
        
    />
    
        <FilmCard 
        img="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/05/nicky-aprendiz-bruja-3310392.jpg?tf=828x" 
        titulo="Kiki: Entregas a domicilio"
        año="1989"
        
    />
     <FilmCard 
        img="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/05/porco-rosso-3310390.jpg?tf=828x" 
        titulo="Porco Rosso
"
        año="1992"
        
    />
    
    
</div>

        </>
    )
}
export {Home}