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

export const WelcomeEmail = ({ userName }) => (
  <Html>
    <Head />
    <Preview>
      MOD ARQUITECTURA se pondrá en contacto contigo lo antes posible.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/logo_mod.jpg`}
          width="200"
          alt="Logo"
          style={logo}
        />
        <Text style={paragraph}>Hola {userName},</Text>
        <Text style={paragraph}>
          Gracias por contactar a MOD ARQUITECTURA. Estamos comprometidos en
          brindarte un servicio excepcional. Nos pondremos en contacto contigo
          lo antes posible.
        </Text>
        <Hr style={hr} />
        <Text style={footer}>MOD ARQUITECTURA</Text>
        <Text style={footer}>modarquitectura1@gmail.com</Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

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
