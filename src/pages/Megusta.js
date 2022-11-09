import React, { Fragment,useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'

function Megusta() {
    const[megusta,setMegusta]= useState([])
    const [loaders, setLoader] = useState(true)

    const getMegusta = async () =>{
        let personajes = await JSON.parse(localStorage.getItem('megusta'))
        setMegusta(personajes)
        setLoader(false)
    }
    console.log(megusta)
    //setMegusta(perfil)

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

    const renderListFavorito = () => {
        return (
            <ul id="ul" className="flex flex-row justify-evenly flex-wrap  mb-3 mt-14">
                {
                 loaders? loader():megusta.map(items => (
                        <li className="w-full sm:w-1/3 md:w-1/4 shadow h-auto ml-1 mb-3 rounded w__full p-2 md:p-0" key={items.id}>
                            <img src={items.image}
                                 alt="imgen-1" className="h-auto w-full" />
                            <div className="bg-white py-2 px-3 space-y-4">
                                <h2 className="text-center font-bold capitalize text-indigo-600">{items.name}</h2>
                                <p className="font-semibold">Estado:
                                    <span
                                        className={items.status === "Dead"
                                            ? 'bg-red-200 text-red-700 border-red-700 py-1 px-2 border rounded'
                                            : 'bg-green-200 text-green-700 border-green-700 py-1 ' +
                                            'px-2 border rounded'
                                        }>
                                        {items.status}</span></p>
                                <p className="font-semibold">Visto en: <span
                                    className="font-normal">{items.location.name}</span></p>

                                <Link to="#" className="bg-indigo-500 text-white
                                py-2 w-full block text-center font-bold"
                                >Ver detalle</Link>
                            </div>
                        </li>
                    ))
                }
            </ul>
        )
    }

    useEffect(() => {
        getMegusta();
    }, [])
    
    return (
        <Fragment>
            <Header />
            {
                megusta?renderListFavorito():<div className="container mx-auto flex justify-center h-screen">
                    <h2 className="text-center text-white font-bold text-3xl capitalize mt-10">No hay favoritos</h2>
                </div>
            }
        </Fragment>
    )
}

export default Megusta