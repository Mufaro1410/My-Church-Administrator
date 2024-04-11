import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState("");

  return (
    <GlobalContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
