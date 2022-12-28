import styled from "styled-components";

export const CartWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;
const Column = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  vertical-align: top;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 2rem;
  padding: 20px;
  @media (max-width: 767px) {
    width: 80%;
    height: auto;
    margin-bottom: 0;
    padding-bottom: 15px;
  }
`;

export const LeftColumn = styled(Column)`
  width: 90%;
  overflow-y: scroll;
`;
export const RightColumn = styled(Column)`
  width: 10%;
  top: 0;
  margin: 30;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 80%;
  @media (max-width: 767px) {
    width: 80%;
    height: 25%;
    margin-bottom: 15px;
    margin-top: 0px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#4caf50")};
  color: white;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#3e8e41")};
  }
`;