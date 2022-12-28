import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PopupWrapper = styled.div`
  position: fixed;
  top: 40;
  left: 10;
  right: 10px;
  bottom: 80px;
  width: 300px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  z-index: 100;
`;

export const PopupMessage = styled.div`
  background-color: green;
  color: white;
  padding: 20px;
  border-radius: 5px;
  font-size: 18px;
  width: 300px;
  height: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Button = styled.button`
  background-color: #024e02;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  height: auto;
  min-height: 30px;
  &:hover {
    background-color: #6e8b66;
  }
`;