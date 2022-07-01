import { FooterContainer } from "../styles/FooterStyles";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      Copyright &copy; {currentYear}{" "}
      <a href="https://github.com/dylandbl" title="https://github.com/dylandbl">
        Dylan Blair
      </a>
      .
    </FooterContainer>
  );
};
