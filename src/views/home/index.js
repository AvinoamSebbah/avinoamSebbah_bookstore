import React from "react";

// style import
import { StoresWrapper } from "./index.styled";

// hook import
import { useGraphSql } from "../../hooks/useGraphSql";

// component import
import StoreCard from "../../components/architecture/card/store/StoreCard";
import Loading from "../../components/loading/Loading";

const HomePage = () => {
  const { data, isLoading, isError } = useGraphSql(`query{stores{name,address,id}}`, "stores");

  if (isLoading) {
    return <Loading/>;
  }

  else if (isError) {
    return <p>An error occurred</p>;
  }
else {
  return (
    <StoresWrapper>
      {data.stores.map((item) => (
        <StoreCard key={item.id} data={item} />
      ))}
    </StoresWrapper>
  );}
};

export default HomePage;
