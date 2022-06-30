import { FooterContainer } from "./CaptchaFooterStyles";
import { InfoSvg, RefreshSvg } from "../SvgComponent/SvgComponent";

interface CaptchaFooterProps {
  children: JSX.Element;
  onRefresh: () => void;
  onInfo: () => void;
}
export const CaptchaFooter = (props: CaptchaFooterProps) => {
  const { children, onRefresh, onInfo } = props;

  return (
    <FooterContainer>
      <div>
        <RefreshSvg size={24} onClick={onRefresh} />
        <InfoSvg size={24} onClick={onInfo} />
      </div>
      {children}
    </FooterContainer>
  );
};
