import React,{createContext, useState,useContext, useEffect} from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

  const [mode,setMode] = useState(localStorage.getItem("mode") || "light");
  
  const data = {
    mode,
    setMode
  }

  useEffect(() => {
    localStorage.setItem("mode",mode)
  }, [mode])

  return (
    <ThemeContext.Provider value={data} >
      {children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeProvider,
  ThemeContext,
  useContext,
} 