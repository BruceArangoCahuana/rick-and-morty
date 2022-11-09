import React, { Fragment, useState, useEffect } from "react";
import Header from "../Components/Header";
import Card from "../Components/Card";
import Paginacion from "../Components/Paginacion";


function Inicio() {

    const [getApi, setGetapi] = useState([])
    const [getPaginacion, setGetpaginacion] = useState({})
   // const [loaders, setLoader] = useState(true)

    let url = "https://rickandmortyapi.com/api/character"
    const QueryApi = (urliapi) => {
        fetch(urliapi)
        .then(response => response.json())
        .then(data =>{
            setGetapi(data.results)
            console.log(data.results)
            setGetpaginacion(data.info)
        })
        .catch(e=>console.log(e))
    }

    const onprevs = () => {
        QueryApi(getPaginacion.prev)
    }
    const onnexts = () => {
        QueryApi(getPaginacion.next)
    }

    

    useEffect(() => {
        QueryApi(url)
    }, [url])

    return (
        <Fragment>
            <Header />

            <ul id="ul" className="flex flex-row justify-evenly flex-wrap  mb-3 mt-14">
                <Card getApi={getApi} />
             </ul>
            <Paginacion
                next={getPaginacion.next}
                prev={getPaginacion.prev}
                onprevs={onprevs}
                onnexts={onnexts}
            />
        </Fragment>
    )

}

export default Inicio;