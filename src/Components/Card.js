import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Card(props) {


    const data = props.getApi

    const favoritos = (data) => {

        //creamos un array para almacenar nuestros personaje favoritos
        let arrayFavoritos = []
        //validar que haiga datos existentes para concatenarlos
        if (localStorage.getItem("megusta")) {
            //validar que haiga datos existentes para concatenarlos
            arrayFavoritos = JSON.parse(localStorage.getItem("megusta"))
            //declaramo uns instancia de menos uno para indocar que no hay nada en el array
            let favorito = -1
            //recorrer nuestro arreglo y filtar buscando lo id del []  y de la data
            for (let i = 0; i < arrayFavoritos.length; i++) {
                let items = arrayFavoritos[i]
                if (items.id === data.id) {
                    favorito = i
                }
            }
            // si en caso haiga algun elemento en la posicion  -1 se agregara uno nuevo
            if (favorito === -1) {
                arrayFavoritos.push(data)
                localStorage.setItem("megusta", JSON.stringify(arrayFavoritos))
                Swal.fire(
                    'Excelente!',
                    'Se añadio el personaje a tus favoritos!',
                    'success'
                )
            }

        } else {
            arrayFavoritos.push(data)
            localStorage.setItem("megusta", JSON.stringify(arrayFavoritos))
            Swal.fire(
                'Excelente!',
                'Se añadio el personaje a tus favoritos!',
                'success'
            )
        }

    }

    return (
        <Fragment>
            {
                data.map(items => (
                    <li className="sm:w-1/3 md:w-1/4 w-full shadow h-auto ml-1 mb-3 rounded p-2" key={items.id}>
                        <img src={items.image}
                            alt="imgen-1" className="h-auto w-full" />
                        <div className="bg-white py-2 px-3 space-y-4">
                            <h2 className="text-center font-bold capitalize text-indigo-600">{items.name}</h2>
                            <p className="font-semibold">Estado:
                                <span
                                    className={items.status === "Dead"
                                        ? 'bg-red-200 text-red-700 border-red-700 py-1 px-2 border rounded'
                                        : 'bg-green-200 text-green-700 border-green-700 py-1 px-2 border rounded'
                                    }>perfil
                                    {items.status}</span></p>
                            <p className="font-semibold">Visto en: <span
                                className="font-normal">{items.location.name}</span></p>
                            <span>me gusta: <i id={"megusta-" + items.id} className={data.id ? "fa-solid fa-heart text-red-500" : "fa-solid fa-heart"}
                                onClick={() => favoritos(items)}
                                style={{ cursor: "pointer" }}
                            ></i>
                            </span>
                            <Link to="#" className="bg-indigo-500 text-white py-2 w-full block text-center font-bold"
                            >Ver detalle</Link>
                        </div>
                    </li>
                ))
            }

        </Fragment>
    )
}

export default Card;