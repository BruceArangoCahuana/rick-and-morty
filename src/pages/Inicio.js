import React, { Fragment, useState, useEffect } from "react";
import Header from "../Components/Header";
import Card from "../Components/Card";
import Paginacion from "../Components/Paginacion";


function Inicio() {

    const [getApi, setGetapi] = useState([])
    const [getPaginacion, setGetpaginacion] = useState({})
    const [loaders, setLoader] = useState(true)


    const QueryApi = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json()
        setGetapi(data.results)
        setLoader(false)
        setGetpaginacion(data.info)
    }

    const onprevs = () => {
        QueryApi(getPaginacion.prev)
    }
    const onnexts = () => {
        QueryApi(getPaginacion.next)
    }

    const loader = () => {
        return (
            <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
            </div>
        )
    }


    useEffect(() => {
        QueryApi()
    }, [])

    return (
        <Fragment>
            <Header />

            <ul id="ul" className="flex flex-row justify-evenly flex-wrap  mb-3 mt-14">
                {
                    loaders ? loader() : <Card getApi={getApi} />
                }

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