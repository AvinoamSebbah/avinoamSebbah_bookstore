import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// style import
import { CartWrapper, LeftColumn, RightColumn, Button } from "./index.styled";

// context/store import
import { LanguageContext } from "../../contexts/LanguageContext";
import { useShoppingCart } from "../../store/cartStore";

// component import
import Table from "../../components/architecture/table/CartTable";

const Cart = () => {
    const navigate = useNavigate();
 const { language, translations } = useContext(LanguageContext);
  const { getTotal } = useShoppingCart();

    const handleClick = () => {
      navigate(`/cart/checkout`);
    };
  return (
    <CartWrapper>
      <LeftColumn>
        <Table />
      </LeftColumn>
      <RightColumn>
        <Button
        disabled={getTotal()===0}
          onClick={() => {
            handleClick();
          }}
        >
          {translations[language].next}
        </Button>
      </RightColumn>
    </CartWrapper>
  );
};

export default Cart;   
