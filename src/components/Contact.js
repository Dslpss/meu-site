import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  padding: 2rem;
  color: #00ff00;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 2rem auto;
`;

const Input = styled.input`
  padding: 0.5rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid #00ff00;
  color: #00ff00;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid #00ff00;
  color: #00ff00;
  border-radius: 4px;
  min-height: 150px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #00ff00;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #00dd00;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contato</h2>
      <ContactForm>
        <Input type="text" placeholder="Nome" />
        <Input type="email" placeholder="Email" />
        <TextArea placeholder="Mensagem" />
        <Button type="submit">Enviar</Button>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
