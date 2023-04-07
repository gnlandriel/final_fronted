import React from "react";
import Card from "../Components/Card";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {

  //const {state} = useContext(ContextGlobal);

  const getFavsFromStorage = () => {
    const localData = localStorage.getItem("favs");
    return localData ? JSON.parse(localData) : [];
  };

  const favoritos = getFavsFromStorage()

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favoritos?.map((s)  => (
          <Card key={s.id} name={s.name} username={s.username} id={s.id}/>
        ))}
      </div>
    </>
  );
};

export default Favs;
