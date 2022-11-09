import React,{Fragment} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Inicio from "./pages/Inicio";
import Episodios from "./pages/Episodios";
import Megusta from "./pages/Megusta";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Inicio />}/>
            <Route path={"/espisodios"} element={<Episodios />}/>
            <Route path={"/favoritos"} element={<Megusta />}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
