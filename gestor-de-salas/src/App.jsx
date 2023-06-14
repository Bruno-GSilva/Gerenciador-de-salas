import { createContext } from "react";
import { Ways } from "./routes";
import { useState } from "react";
import { useEffect } from "react";

export const LoginContext = createContext(null)


const App = () => {

  const [logado, setLogado] = useState(false)

  useEffect(()=>{
    const logado = JSON.parse(localStorage.getItem('logado')) || false
    setLogado(logado)
  },[])

  return (
    <LoginContext.Provider value={{ logado, setLogado }}>
      <Ways />
    </LoginContext.Provider>
  );
}

export default App;