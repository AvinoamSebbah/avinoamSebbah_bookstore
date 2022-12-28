import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TableStyle = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const Th = styled.th`
  padding: 8px;
  background-color: #ddd;
`;

export const Td = styled.td`
  padding: 8px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
`;

export const NameText = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  padding-left: 5px;
`;

export const DescriptionText = styled.p`
  font-size: 16px;
  text-align: left;
  padding-left: 5px;
  max-height: 150px;
  overflow-y: auto;
`;
export const TrashIcon = styled(FontAwesomeIcon)`
  font-size: 1.2em;
  margin-right: 10px;
  cursor: pointer;
  color: red;
`;
export const StyledQuantityButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 1.2rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #f2f2f2;
  }
`;