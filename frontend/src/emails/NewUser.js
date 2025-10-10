import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = "https://modarquitectura.com";

export const NewUser = ({ userName, userEmail, userPhone, userMessage }) => (
  <Html>
    <Head />
    <Preview>¡Nuevo cliente se ha contactado!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/logo_mod.jpg`}
          width="200"
          alt="Logo"
          style={logo}
        />
        <Text style={paragraph}>
          ¡Un nuevo cliente ha enviado el formulario desde el sitio web y quiere
          ponerse en contacto contigo!
        </Text>
        <Text style={paragraph}>
          <strong>Nombre del cliente:</strong> {userName},
        </Text>
        <Text style={paragraph}>
          <strong>Correo electrónico del cliente:</strong> {userEmail}
        </Text>
        <Text style={paragraph}>
          <strong>Teléfono del cliente:</strong> {userPhone}
        </Text>
        <Text style={paragraph}>
          <strong>Mensaje del cliente:</strong> {userMessage}
        </Text>
        <Text style={paragraph}>
          Ponte en contacto con el cliente lo antes posible
        </Text>
        <Hr style={hr} />
        <Text style={footer}>MOD ARQUITECTURA</Text>
      </Container>
    </Body>
  </Html>
);

export default NewUser;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
