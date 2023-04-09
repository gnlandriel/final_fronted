import React from 'react'
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentista, setDentista] = useState([]);
  const params = useParams();

  const param = parseInt(params.id)

  const getDentists = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${param}`);
    const data = await res.json();
    setDentista(data)
  };
  
  useEffect(() => {
    getDentists();
  }, [param])

  return (
    <>
      <h1>Detail Dentist {dentista.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentista.name}</td>
            <td>{dentista.email}</td>
            <td>{dentista.phone}</td>
            <td>{dentista.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Detail