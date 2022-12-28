import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// style import
import { PageContainer, FormContainer, Title, InputGroup, FirstInput, SecondInput, Button, ErrorMessage } from "./index.styled";

// context/store import
import { LanguageContext } from "../../contexts/LanguageContext";
import { useShoppingCart } from "../../store/cartStore";
import useInformation from "../../store/customerInformationStore";

const Checkout = () => {
 const { language, translations } = useContext(LanguageContext);
const { setCustomerInfo } = useInformation();

   const [phoneNumber, setPhoneNumber] = useState('');
   const [customerName,setCustomerName ] = useState("");
   const [customerSurname, setCustomerSurname] = useState("");


  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {removeAllItems } = useShoppingCart();

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleNameChange = (event) => {
    setCustomerName(event.target.value);
  };
    const handleSurnameChange = (event) => {
      setCustomerSurname(event.target.value);
    };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Vérifie si le numéro de téléphone est valide
    if (/^\d{10}$/.test(phoneNumber)) {
      // Si le numéro de téléphone est valide, on efface tout message d'erreur 
      setError('');
      navigate(`/cart/success/${Date.now()}-${Math.floor(Math.random() * 1000)}`);
     
      removeAllItems();
      setCustomerInfo(customerName + " " + customerSurname);
      
    } else {
      // Si le numéro de téléphone n'est pas valide, on affiche un message d'erreur
      setError(translations[language].invalidPhone);
    }
  };
  return (
    <PageContainer>
      <FormContainer>
        <Title>{translations[language].finalizeOrder}</Title>
        <InputGroup>
          <FirstInput type="text" placeholder={translations[language].name} onChange={handleNameChange} />
          <FirstInput
            type="text"
            placeholder={translations[language].surname}
            onChange={handleSurnameChange}
          />
        </InputGroup>
        <SecondInput type="text" placeholder={translations[language].address} />
        <SecondInput
          type="text"
          placeholder={translations[language].phoneNumber}
          value={phoneNumber}
          onChange={handlePhoneChange}
        />
        {error && (
          <ErrorMessage>{translations[language].invalidPhone}</ErrorMessage>
        )}
        <Button onClick={handleSubmit}>{translations[language].buy}</Button>
      </FormContainer>
    </PageContainer>
  );};

export default Checkout;
