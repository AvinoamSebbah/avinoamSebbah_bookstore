import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BookSquare = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 15rem;
  margin: 1rem;
  text-align: center;
  box-sizing: border-box;
  padding: 20px;
  padding-bottom: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: auto;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @media (max-width: 768px) {
    width: calc(50% - 2rem);
  }
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 6rem;
`;

export const BookImage = styled.img`
  width: 40%;
`;

export const BookText = styled.div`
  width: 60%;
  overflow-y: hidden;
  overflow-x: clip;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  @media (max-width: 768px) {
    overflow: scroll;
  }
`;

export const BookTitle = styled.h3`
  text-align: left;
  margin: 0;
  font-size: 0.8rem;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const BookAuthor = styled.p`
  text-align: left;
  margin: 0;
  font-size: 0.7rem;
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

export const BookGenre = styled.p`
  text-align: left;
  margin: 0;
  font-size: 0.6rem;
  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

export const BookActions = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin: 10px 0;
`;

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: blue;
  }
`;
export const CartIcon = styled(FontAwesomeIcon)`
  font-size: 1.2em;
  margin-right: 10px;
  cursor: pointer;
  color: "black";
`;
export const BookPrice = styled.p`
  margin: 0;
`;