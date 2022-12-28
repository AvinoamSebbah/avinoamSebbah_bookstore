import { useContext } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// style import
import { TableStyle, Tr, Td, Th, NameText, DescriptionText, TrashIcon, StyledQuantityButton } from "./CartTable.styled";

// context imports
import { LanguageContext } from "../../../contexts/LanguageContext";
import { useShoppingCart } from "../../../store/cartStore";

const CartTable = () => {
  const { language, translations } = useContext(LanguageContext);
  const { items, addItem, removeItem, removeAllItem, getTotal } = useShoppingCart();
  return (
    <TableStyle>
      <tbody>
        <Tr>
          <Th>{translations[language].name}</Th>
          <Th>{translations[language].quantity}</Th>
          <Th>{translations[language].price}</Th>
          <Th></Th>
        </Tr>
        {items.map((item) => (
          <Tr key={item.id}>
            <Td>
              <NameText>{item.name}</NameText>
              <DescriptionText>{item.description}</DescriptionText>
            </Td>
            <td>
              <StyledQuantityButton onClick={() => removeItem(item)}>
                -
              </StyledQuantityButton>{" "}
              {item.quantity}{" "}
              <StyledQuantityButton onClick={() => addItem(item)}>
                +
              </StyledQuantityButton>
            </td>
            <Td>{parseFloat(item.quantity * item.price).toFixed(2)}$</Td>
            <Td>
              <TrashIcon icon={faTrash} onClick={() => removeAllItem(item)} />
            </Td>
          </Tr>
        ))}
        <Tr>
          <Td></Td>
          <Td></Td>
          <Td>
            {translations[language].total} : {getTotal()}$
          </Td>
          <Td></Td>
        </Tr>
      </tbody>
    </TableStyle>
  );
};

export default CartTable;
