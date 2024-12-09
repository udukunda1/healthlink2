import { createContext, useState } from "react";


export const authContext = createContext({
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
    changer: 0
})

function ContextProvider({children}){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [changer, setChanger] = useState(false);

  function toggleChanger(){
    setChanger(prevChanger => !prevChanger);
  }

  function login(obj){
    setIsLoggedIn(obj);
  }
  function logout(){
    setIsLoggedIn(false);
  }

  return (
    <authContext.Provider value={{isLoggedIn, login, logout, changer, toggleChanger}}>
        {children}
    </authContext.Provider>
  )
}

export default ContextProvider;