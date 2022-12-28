import React, { useState } from "react";

// component import
import Popup from "../components/architecture/popup/Popup";

const PopupContext = React.createContext();

const PopupProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  return (
    <PopupContext.Provider value={{ message, setMessage }}>
      {children}
      <Popup />
    </PopupContext.Provider>
  );
};

export { PopupContext, PopupProvider };
