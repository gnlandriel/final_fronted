import { createContext } from "react";
import { useReducer } from "react";

export const ContextGlobal = createContext(undefined);

const getFavsFromStorage = () => {
  const localData = localStorage.getItem("favs");
  return localData ? JSON.parse(localData) : [];
};

const saveFavsFromStorage = (fav) => {
  localStorage.setItem("favs", JSON.stringify(fav));
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add_fav":
      saveFavsFromStorage([...state, action.payload]);
      return [...state, action.payload];
    default:
      return;
  }
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, {}, getFavsFromStorage); 
  

  
  return (
    <ContextGlobal.Provider value={{state , dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
