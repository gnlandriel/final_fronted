import React from "react";
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {

  const {addFav} = useContext(ContextGlobal);

  const agregarFav = () => {
    addFav(name, username, id)
  }
  

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link to={`/detail/${id}`}><div>
          <h1>{id} - {name}</h1>
          <img src="../images/doctor.jpg" alt="doctor" width="100px" height="100px"/>
          <h2>{username}</h2>
          </div>
          </Link>
        <button onClick={agregarFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
