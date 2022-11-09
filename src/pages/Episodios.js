import React,{Fragment,useState,useEffect} from "react";
import Header from "../Components/Header";
import Cardepisodio from "../Components/Cardepisodio";
function Episodios(){
    const[getApi,setEpisodios] = useState([])

    const urlespisodios = "https://rickandmortyapi.com/api/episode"

    const queryApi = (url) =>{
        fetch(url)
            .then(response => response.json())
            .then(data => setEpisodios(data.results))
    }

    useEffect(() => {
        queryApi(urlespisodios)
    }, []);

    return(
        <Fragment>
            <Header />
            <div className="container mx-auto px-4 mb-3">
                <Cardepisodio
                    getApi={getApi}
                />
            </div>
        </Fragment>
    )
}

export  default  Episodios;