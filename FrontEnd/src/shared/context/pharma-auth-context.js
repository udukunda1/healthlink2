import { createContext, useState } from "react";


export const pharmaAuthContext = createContext({
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
    changer: 0
})

function PharmaContextProvider({children}){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login(obj){
    setIsLoggedIn(obj);
  }
  function logout(){
    setIsLoggedIn(false);
  }

  return (
    <pharmaAuthContext.Provider value={{ isLoggedIn, login, logout }}>
        {children}
    </pharmaAuthContext.Provider>
  )
}

export default PharmaContextProvider;