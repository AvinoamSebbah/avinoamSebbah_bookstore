import React, { useContext } from "react";
import { useParams } from "react-router-dom";

// style import
import { PageContainer, Container, Title, OrderId, StoreName, ThankYou } from "./index.styled";

// context/store import
import { LanguageContext } from "../../contexts/LanguageContext";
import useInformation from "../../store/customerInformationStore";

const OrderConfirmation = () => {
   const { orderId } = useParams();
 const { language, translations } = useContext(LanguageContext);
const { storeName, customerName } = useInformation();

  return (
    <PageContainer>
      <Container>
        <Title>
          {translations[language].congratulations} {customerName}!
        </Title>
        <OrderId>Order ID: {orderId}</OrderId>
        <StoreName>
          {storeName} {translations[language].store}
        </StoreName>
        <ThankYou>{translations[language].thankOrder}</ThankYou>
      </Container>
    </PageContainer>
  );
};

export default OrderConfirmation;
