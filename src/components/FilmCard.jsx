function FilmCard({img, titulo,año}){
    return(
        <div className="FilmCard">
            <img src={img} alt={titulo} className="img-film"/>
            <h3 className="titulo-film">{titulo}</h3>
            <p className="año-film">{año}</p>
        </div>
    )
}

export {FilmCard}