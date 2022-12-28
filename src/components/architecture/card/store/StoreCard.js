import React from "react";
import { useNavigate } from "react-router-dom";

// style import
import {
  SquareWrapper,
  StoreImage,
  StoreName,
  StoreAddress,
} from "./StoreCard.styled";

// context imports
import useInformation from "../../../../store/customerInformationStore";
import {storeImages} from "../../../../store/storeImagesStore";

const StoreCard = ({ data }) => {
  const navigate = useNavigate();
const { setStoreName } = useInformation();

const handleClick = () => {
  setStoreName(data.name);
  navigate(`/store/${data.id}`);
};

return (
  <SquareWrapper onClick={() => {handleClick()}}>
    <StoreImage src={storeImages[data.name]} alt={data.name} />
    <StoreName>{data.name}</StoreName>
    <StoreAddress>{data.address}</StoreAddress>
  </SquareWrapper>
);
};

export default StoreCard;
