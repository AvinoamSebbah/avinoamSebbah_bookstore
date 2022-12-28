import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 96%;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 400px;
  box-shadow: 0 0 10px #ccc;
  border-radius: 5px;
  background-color: #fff;
  padding: 2em;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  margin: 0;
`;

export const OrderId = styled.p`
  font-size: 16px;
  margin: 0.5em 0;
`;

export const StoreName = styled.p`
  font-size: 16px;
  margin: 0.5em 0;
  font-weight: bold;
`;

export const ThankYou = styled.p`
  font-size: 16px;
  margin: 0.5em 0;
  color: #28a745;
`;