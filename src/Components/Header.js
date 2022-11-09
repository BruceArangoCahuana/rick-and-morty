import React,{Fragment} from "react";
import {Link} from "react-router-dom";
function Header(){

    return(
        <Fragment>
            <nav  className="bg-white py-2">
                <div className="flex flex-row justify-between items-center container mx-auto px-4">
                    <h1 className="font-extrabold text-2xl">API <span className="text-indigo-600">
                        Rick & Morty
                    </span></h1>
                    <ul className="flex flex-row justify-evenly space-x-2">
                        <li>
                            <Link to={"/"}
                                  className="font-semibold hover:text-indigo-600
                           ">Inicio</Link>
                        </li>
                        <li>
                            <Link to={"/espisodios"}
                            className="font-semibold hover:text-indigo-600
                           ">Episodios</Link>
                        </li>
                        <li>
                            <Link to={"/favoritos"}
                            className="font-semibold hover:text-indigo-600
                           ">Favoritos</Link>
                        </li>
                    </ul>
                </div>

            </nav>
            <header className="bg-white py-4">
                <h1 className="text-4xl text-indigo-500 font-extrabold text-center">App Rick and Morty</h1>
            </header>
        </Fragment>
    )
}

export  default  Header;