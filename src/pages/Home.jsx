import { FilmCard } from "../components/FilmCard";
import { peliculas } from "./data.js";

function Home() {
  return (
    <>
      <div>
        <h1>Peliculas de Studio Ghibli</h1>
      </div>

      <div className="info-container">
        <div>
          <h2>¿Qué es?</h2>
          <p>
            Studio Ghibli es un famoso estudio de animación japonés, reconocido
            mundialmente por sus películas animadas de alta calidad, tanto en
            lo visual como en lo narrativo. Fue fundado en 1985 por los
            directores Hayao Miyazaki y Isao Takahata, junto con el productor
            Toshio Suzuki.
          </p>
          <p>
            El nombre “Ghibli” viene de un apodo de avión italiano, y la idea
            era "revolucionar la animación como un viento cálido del desierto".
          </p>
        </div>
        <div>
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjBnMXptZnY1aXpqOGQyYzV3amlpejlmNGpreWR5amE1YzRrYW9pdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ASy3PKVFnk7ZK/giphy.gif"
            alt=""
          />
        </div>
      </div>

      <div className="film-list">
        {peliculas.map((pelicula, index) => (
          <FilmCard
            key={index}
            img={pelicula.img}
            titulo={pelicula.titulo}
            año={pelicula.año}
          />
        ))}
      </div>
    </>
  );
}

export { Home };
