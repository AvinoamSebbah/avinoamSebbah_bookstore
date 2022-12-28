import styled from "styled-components";

export const BookDetailsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Column = styled.div`
  width: 70%;
  display: inline-block;
  vertical-align: top;
  flex-direction: column;
  margin: 2rem;
  padding: 20px;
  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 0;
    padding-bottom: 15px;
  }
`;

export const LeftColumn = styled(Column)``;
export const RightColumn = styled(Column)`
  width: 30%;
  border: 2px solid black;
  box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.75);
  top: 0;
  margin: 30;
  display: flex;
  align-items: center;
  height: 70%;
  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 15px;
    margin-top: 0px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  margin: 20px 0;
  text-align: center;
`;

export const Author = styled.p`
  font-size: 18px;
  margin: 10px 0;
  text-align: center;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin: 10px 0;
  display: flex;
  justify-content: center;
`;

export const Summary = styled.p`
  font-size: 18px;
  margin: 20px 0;
`;

export const ProductDetailsTitle = styled.h2`
  font-size: 24px;
  margin-top: 60px;
`;

export const Publisher = styled.p`
  font-size: 18px;
  margin: 10px 10px;
`;
export const Language = styled.p`
  font-size: 18px;
  margin: 10px 10px;
`;
export const Paperback = styled.p`
  font-size: 18px;
  margin: 10px 10px;
`;
export const PriceWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 12x;
  }
`;

export const PriceValue = styled.span`
  margin-left: 10px;
`;
export const PriceInfo = styled.span`
  margin-right: 10px;
  margin: 30px;
`;
export const AddToCartButton = styled.button`
  display: block;
  width: 60%;
  padding: 10px;
  background-color: #f7b733;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #f7d583;
  }
  text-align: center;
  bottom: 0;
  margin: 30px;
  margin-bottom: 0px;
`;
export const GoToCartButton = styled.button`
  display: block;
  width: 60%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;
  text-align: center;
  background-color: #f5f5f5;
  &:hover {
  font-weight: bold;
  }
  text-align: center;
  bottom: 0;
  margin: 0px;
`;