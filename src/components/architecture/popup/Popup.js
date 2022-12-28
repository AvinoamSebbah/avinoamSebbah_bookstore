import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// style import
import { PopupWrapper, PopupMessage, Button } from "./Popup.styled";

// context import
import { LanguageContext } from "../../../contexts/LanguageContext";
import { PopupContext } from "../../../contexts/PopupContext";

const Popup = () => {
  const navigate = useNavigate();
  const { message, setMessage } = useContext(PopupContext);
  const { language, translations } = useContext(LanguageContext);

  if (!message) {
    return null;
  }

  setTimeout(() => {
    setMessage("");
  }, 5000);

  return (
    <PopupWrapper>
      <PopupMessage>
        {message}
        <Button
          onClick={() => {
            navigate(`/cart`);
            setMessage("");
          }}
        >
          {translations[language].goToCart}
        </Button>
      </PopupMessage>
    </PopupWrapper>
  );
};

export default Popup;