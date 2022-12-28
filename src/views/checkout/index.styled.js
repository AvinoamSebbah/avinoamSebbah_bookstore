import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 96%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 60%;
  box-shadow: 0 0 10px #ccc;
`;

export const Title = styled.h1`
  text-align: center;
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Input = styled.input`
  margin: 0.5em;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fafafa;
  font-size: 18px;
  height: 30px;
  width: 80%;
  &:focus {
    outline: none;
    border-color: #999;
  }
`;

export const FirstInput = styled(Input)`
  width: 100%;
`;
export const SecondInput = styled(Input)``;

export const Button = styled.button`
  margin: 0.5em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 3px;
  background-color: #28a745;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }

  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.div`
  margin: 0.5em 0;
  padding: 0.5em;
  border: 1px solid #dc3545;
  border-radius: 3px;
  background-color: #f8d7da;
  color: #dc3545;
  font-size: 14px;
`;