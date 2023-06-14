import Header from "../components/Header";
import MovieArticle from "../components/MovieArticle";
import dataBase from "../components/movieDatabase"
import { useEffect, useState } from "react";
const List = () => {
    const [sort, setSort] = useState("")
    const [dataBaseSorted,setDataBaseSorted] = useState([]);
    const [lastActive,setLastActive] = useState("x");
    const [search,setSearch] = useState("")

    {useEffect(() => {
        let sorted = dataBase;
        switch(sort){
            case "Sort Date Ascending": sorted = [...dataBase].sort((a, b) => a.year - b.year);break;
            case "Sort Date Descanding": sorted = [...dataBase].sort((a, b) => b.year - a.year);break;
            case "Best Rate": sorted = [...dataBase].sort((a, b) => b.rate - a.rate); break;
            case "A-Z": sorted = [...dataBase].sort((a, b) => a.title.localeCompare(b.title));break;
            case "Z-A": sorted = [...dataBase].sort((a, b) => b.title.localeCompare(a.title));break;
            case "War": sorted = [...dataBase].filter(movie => movie.genre.includes("War"));break;
            case "Action": sorted = [...dataBase].filter(movie => movie.genre.includes("Action"));break;
            case "Adventure": sorted = [...dataBase].filter(movie => movie.genre.includes("Adventure"));break;
            case "Comedy": sorted = [...dataBase].filter(movie => movie.genre.includes("Comedy"));break;
            case "Western": sorted = [...dataBase].filter(movie => movie.genre.includes("Western"));break;
            case "Thriller": sorted = [...dataBase].filter(movie => movie.genre.includes("Thriller"));break;
            default:break;
        }
        setDataBaseSorted(sorted)
    }, [sort])  
    }

/*
    {
        for(let j = 0; j< [...dataBase].length; j++){
            for (let i = 0; i < [...dataBase][j].genre.length; i++) {
                if ([...dataBase].genre[i] === "War") {
                  console.log([...dataBase][j].title);
                }
            }
        }
    } */

    const changeSortType = (event) => {
        if(lastActive != "x"){
            lastActive.className = "";
        }
        if(event.target == lastActive){
            setSort("");
            setLastActive("x");
            return
        }
        event.target.className = "active"
        setLastActive(event.target);
        setSort(event.target.text) 
    }

     const searchMovie = (e) => {
        setSearch(e.target.value)
     }

    return ( 
        <>
        <Header/>
        <section>
            <h2>LISTE</h2>
            <div className="sortButtons">
                <div>
                    <label htmlFor="search">SEARCH</label>
                    <input onChange={searchMovie} id="search" name="search" type="text" />
                </div>
                <a  onClick={changeSortType}>Sort Date Ascending</a>
                <a  onClick={changeSortType}>Sort Date Descanding</a>
                <a  onClick={changeSortType}>Best Rate</a>
                <a  onClick={changeSortType}>A-Z</a>
                <a  onClick={changeSortType}>Z-A</a>
                <div className="genreButtons">
                    <a  onClick={changeSortType}>Action</a>
                    <a  onClick={changeSortType}>Adventure</a>
                    <a  onClick={changeSortType}>Comedy</a>
                    <a  onClick={changeSortType}>War</a>
                    <a  onClick={changeSortType}>Western</a>
                    <a  onClick={changeSortType}>Thriller</a>
                </div>
            </div>
                <div className="movieList">
                    {dataBaseSorted.filter((name) => name.title.toLowerCase().includes(search.toLowerCase())).map((movie, index) => {
                            return <MovieArticle data={movie} key={index} index={index}/>       
                    })}


                </div>
        </section>
        </>
     );
}
 
export default List;