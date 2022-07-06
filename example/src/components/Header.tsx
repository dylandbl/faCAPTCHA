import {
  HeaderDiv,
  RightSideContainer,
  TitleDiv,
} from "../styles/HeaderStyles";
import { GitHubLogoSvg } from "./GitHubLogoSvg";
import { NpmLogoSvg } from "./npmLogoSvg";

export const Header = () => {
  return (
    <HeaderDiv>
      <TitleDiv>faCAPTCHA</TitleDiv>

      <RightSideContainer>
        <a
          href="https://github.com/dylandbl/faCAPTCHA/"
          title="View the repo on GitHub"
        >
          <GitHubLogoSvg />
        </a>
        <a href="https://www.npmjs.com/package/facaptcha" title="View on npm">
          <NpmLogoSvg />
        </a>
      </RightSideContainer>
    </HeaderDiv>
  );
};
