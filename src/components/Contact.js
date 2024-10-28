import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  font-family: '29LT Riwaya', sans-serif;
  padding: 20px;
  direction: rtl;
  background-color: #f1ede1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    padding: 40px;
  }
`;

const Title = styled.h2`
  color: #3b1112;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

const Form = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 1024px) {
    padding: 30px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
`;

const ContactText = styled.p`
  color: #3b1112;
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
`;

const CallButton = styled.a`
  background-color: #3b1112;
  color: #f1ede1;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #986c4a;
  }
`;

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic for submitting the email data to the server
    console.log(email);
    alert('تم إرسال البريد الإلكتروني بنجاح!');
    setEmail('');
  };

  return (
    <ContactContainer>
      <Title>تواصل معنا</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="بريدك الإلكتروني"
          value={email}
          onChange={handleChange}
          required
        />
        <ContactText>
          للوصول إلى مركز الاتصال، نأمل منك الاتصال على 800 118 9999
        </ContactText>
        <CallButton href="tel:8001189999">الاتصال</CallButton>
      </Form>
    </ContactContainer>
  );
};

export default Contact;