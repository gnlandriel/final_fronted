import React from "react";
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {

  const {addFav} = useContext(ContextGlobal);

  const agregarFav = () => {
    alert("Medico agregado a favoritos")
    addFav(name, username, id)
  }
  

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <div>
        
        <img src="../images/doctor.jpg" alt="doctor" width= {200}/>
        <h2><Link to = {`/detail/${id}`}> {name}</Link> </h2>
          <h3>{username}</h3>
          </div>
        
          <button onClick={agregarFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
