import React,{Fragment} from "react";

function  Cardepisodio(props){

    const espisodios = props.getApi
    return(
        <Fragment>
            {
                espisodios.map(items =>(
                    <div className="w-full bg-white mt-3 py-2 px-3 space-y-3 rounded shadow" key={items.id}>
                            <p
                                className="font-bold bg-indigo-300 py-2 px-1 text-indigo-600
                                 border border-indigo-600 text-lg"
                            >{items.id}. {items.name}</p>
                            <p><span className="text-indigo-600 font-bold">Espisodio: </span>{items.episode}</p>
                            <p><span className="text-indigo-600 font-bold">Fecha de emision: </span>{items.air_date}</p>
                    </div>
                ))
            }

        </Fragment>
    )
}

export default  Cardepisodio;