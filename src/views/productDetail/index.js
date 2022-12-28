import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

// style import
import {
  BookDetailsWrapper,
  LeftColumn,
  RightColumn,
  Title,
  Author,
  Rating,
  Summary,
  ProductDetailsTitle,
  Publisher,
  Language,
  Paperback,
  PriceWrapper,
  PriceValue,
  PriceInfo,
  AddToCartButton,
  GoToCartButton,
} from "./index.styled";

// hook import
import { useGraphSql } from "../../hooks/useGraphSql";

// component import
import Loading from "../../components/loading/Loading";

// context/store import
import { useShoppingCart } from "../../store/cartStore";
import { LanguageContext } from "../../contexts/LanguageContext";
import { PopupContext } from "../../contexts/PopupContext";

const ProductDetail = () => {
  const { bookId } = useParams();
  const { addItem } = useShoppingCart();
  const { setMessage } = useContext(PopupContext);
  const navigate = useNavigate();

  const { language, translations } = useContext(LanguageContext);

  const { data, isLoading, isError } = useGraphSql(
    `
      query {
        books(where: { id: { _eq: "${bookId}" } }) {
          name
          author
          type
          price
          id
          ratings
          description
          publisher
          language
          paperback
        }
      }
    `,
    `"${bookId}"`
  );

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <p>An error occurred</p>;
  } else {
    return (
      <BookDetailsWrapper>
        <LeftColumn>
          <Title>{data.books[0].name}</Title>
          <Author>{data.books[0].author}</Author>
          <Rating>
            <Rater
              total={5}
              rating={Math.round((data.books[0].ratings / 4000) * 5)}
            />{" "}
            ({data.books[0].ratings} {translations[language].ratings})
          </Rating>
          <Summary>{data.books[0].description}</Summary>
          <ProductDetailsTitle>
            {translations[language].productDetails}
          </ProductDetailsTitle>
          <Publisher>
            {translations[language].publisher}: {data.books[0].publisher}
          </Publisher>
          <Language>
            {translations[language].language}: {data.books[0].language}
          </Language>
          <Paperback>
            {translations[language].paperback}: {data.books[0].paperback}
          </Paperback>
        </LeftColumn>
        <RightColumn>
          <PriceWrapper>
            {translations[language].buy} :
            <PriceValue>${data.books[0].price}</PriceValue>
          </PriceWrapper>
          <PriceInfo>{translations[language].informationBook}</PriceInfo>
          <AddToCartButton
            onClick={() => {
              addItem({
                id: data.books[0].id,
                name: data.books[0].name,
                description: data.books[0].description,
                price: data.books[0].price,
                quantity: 1,
              });
              setMessage(translations[language].addedWithSuccess);
            }}
          >
            {translations[language].addToCart}
          </AddToCartButton>
          <GoToCartButton
            onClick={() => {
              addItem({
                id: data.books[0].id,
                name: data.books[0].name,
                description: data.books[0].description,
                price: data.books[0].price,
                quantity: 1,
              });
              navigate(`/cart`);
            }}
          >
            {translations[language].addAndGoToCart}
          </GoToCartButton>
        </RightColumn>
      </BookDetailsWrapper>
    );
  }
};

export default ProductDetail;
