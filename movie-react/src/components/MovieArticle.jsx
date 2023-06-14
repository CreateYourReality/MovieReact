import { Link } from "react-router-dom";
const MovieArticle = (probs) => {
    return (  
        <article className="movie-item">
            <h4>{probs.data.title}</h4>
            <p>{probs.data.year}</p>
            <p>{probs.data.director}</p>
            <p>{probs.data.duration}</p>
            <p>{probs.data.rate}</p>
            {probs.data.genre.map((genre, index) => (
                <p key={index}>{genre}</p>
            ))}
            <Link to={`/detail/${probs.index}`}>Detail</Link>
        </article>
    );
}
 
export default MovieArticle;