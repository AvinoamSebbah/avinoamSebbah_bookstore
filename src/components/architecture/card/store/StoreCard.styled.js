import styled from "styled-components";

export const SquareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15rem;
  margin: 1rem;
  text-align: center;
  box-sizing: border-box;
  padding: 20px;
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

export const StoreImage = styled.img`
  width: 100%;
  height: 13rem;
  object-fit: cover;
`;

export const StoreName = styled.p`
  margin: 1rem 0 0;
  text-overflow: ellipsis;
  white-space: wrap;
  overflow: hidden;
  font-size: 1rem;
  font-weight: bold;
`;
export const StoreAddress = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  color: gray;
`;