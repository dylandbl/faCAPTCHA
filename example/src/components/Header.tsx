import {
  HeaderDiv,
  RightSideContainer,
  TitleDiv,
} from "../styles/HeaderStyles";
import { GitHubLogoSvg } from "./GitHubLogoSvg";
import { UserIcon } from "./UserIcon";

export const Header = ({ screenWidth }: { screenWidth: number }) => {
  return (
    <HeaderDiv>
      <TitleDiv>faCAPTCHA</TitleDiv>

      <RightSideContainer>
        <a
          href="https://github.com/dylandbl/faCAPTCHA/"
          title="View the repo on GitHub"
        >
          <GitHubLogoSvg widthHeight={26} />
        </a>
        <a href="https://github.com/dylandbl" title="Visit dylandbl on GitHub">
          <UserIcon />
        </a>
      </RightSideContainer>
    </HeaderDiv>
  );
};
