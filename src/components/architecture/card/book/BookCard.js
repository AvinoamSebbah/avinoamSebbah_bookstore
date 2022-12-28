import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// style import
import {
  AddToCartButton,
  CartIcon,
  BookPrice,
  BookImage,
  BookAuthor,
  BookTitle,
  BookText,
  BookInfo,
  BookSquare,
  BookActions,
  BookGenre
} from "./BookCard.styled";

// context imports
import { bookImages } from "../../../../store/bookImagesStore";
import { useShoppingCart } from "../../../../store/cartStore";
import { PopupContext } from "../../../../contexts/PopupContext";
import { LanguageContext } from "../../../../contexts/LanguageContext";


const BookCard = ({ book }) => {
  const navigate = useNavigate();
  const { addItem } = useShoppingCart();
  const { setMessage } = useContext(PopupContext);
  const { language, translations } = useContext(LanguageContext);

  const handleClickBookDetail = () => {
    navigate(`/book/${book.id}`);
  };

  const handleClickAddToCart = () => {
    addItem({
      id: book.id,
      name: book.name,
      description: book.description,
      price: book.price,
      quantity: 1,
    });
  };

  return (
    <BookSquare>
      <BookInfo
        onClick={() => {
          handleClickBookDetail();
        }}
      >
        <BookImage src={bookImages[book.type]} alt={book.name} />
        <BookText>
          <BookTitle>{book.name}</BookTitle>
          <BookAuthor>{book.author}</BookAuthor>
          <BookGenre>{book.type}</BookGenre>
        </BookText>
      </BookInfo>

      <BookActions>
        <AddToCartButton
          onClick={() => {
            handleClickAddToCart();
            setMessage(translations[language].addedWithSuccess);
          }}
        >
          <CartIcon icon={faShoppingCart} />
        </AddToCartButton>
        <BookPrice>{book.price} €</BookPrice>
      </BookActions>
    </BookSquare>
  );
};
export default BookCard;
