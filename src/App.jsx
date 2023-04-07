
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { ContextGlobal } from "./Components/utils/global.context";
import Layout from "./Components/Layout";

export const themes = {
  light: {
    font: "black",
    background: "white",
  },
  dark: {
    font: "white",
    background: "black",
  },
};



function App() {

  const localValue = JSON.parse(localStorage.getItem("theme"));

  const [theme, setTheme] = useState(localValue ?? themes.light);
 
  const handleChangeTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const {dispatch} = useContext(ContextGlobal)

  const addFav = (name, username, id) => {
    dispatch({type:"add_fav" , payload:{name, username, id} })
  }

  return (
      <div className="App">
        <ContextGlobal.Provider value={{ theme, handleChangeTheme, addFav }}>
          <Layout>
          <Navbar/>
          <Outlet/>
          <Footer/>
          </Layout>
        </ContextGlobal.Provider>
      </div>
  );
}

export default App;
