import Header from "../components/Header";
import { useParams } from "react-router-dom";
import dataBase from "../components/movieDatabase"

const Detail = () => {
    const param = useParams();
    return (  
        <section>
            <Header/>
                <article>
                    <h4>{dataBase[Number(param.movID)].title}</h4>
                    <p>{dataBase[Number(param.movID)].year}</p>
                    <p>{dataBase[Number(param.movID)].director}</p>
                    <p>{dataBase[Number(param.movID)].duration}</p>
                    <p>{dataBase[Number(param.movID)].rate}</p>
                    {dataBase[Number(param.movID)].genre.map((genre, index) => (
                        <p key={index}>{genre}</p>
                    ))}
                </article>
        </section>
    );
}
 
export default Detail;