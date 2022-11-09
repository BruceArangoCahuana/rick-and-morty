import React,{Fragment} from "react";

function Paginacion ({next,prev,onprevs,onnexts}){

    const clickprev = () =>{
        onprevs();
    }

    const clicknext = () =>{
        onnexts();
    }
    return(
        <Fragment>
            <div className="w-1/2 m-auto mb-4">
                <ul id="paginacion" className="flex flex-row justify-evenly">

                    <li>
                        {
                            prev?
                                <button
                                    className="py-2 px-3 bg-white rounded"
                                    onClick={clickprev}
                                >Anterior</button>
                                :
                                null
                        }

                    </li>
                    <li>
                        {
                            next?
                                <button
                                    className="py-2 px-3 bg-white rounded"
                                    onClick={clicknext}>Siguiente</button>
                                :
                                null
                        }
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

export  default  Paginacion;