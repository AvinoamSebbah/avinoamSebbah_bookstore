import React from "react";
import { ClipLoader } from "react-spinners";

// style import
import { LoadingWrapper } from "./Loading.styled";

const Loading = () => (
  <LoadingWrapper>
    <ClipLoader size={120} color="#333" />
  </LoadingWrapper>
);

export default Loading;
