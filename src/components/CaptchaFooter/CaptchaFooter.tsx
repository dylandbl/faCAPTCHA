import { FooterButtonsContainer, FooterContainer } from './CaptchaFooterStyles';
import { InfoSvg, RefreshSvg } from '../SvgComponent/SvgComponent';
import { SvgButton } from '../SvgButton/SvgButton';

interface CaptchaFooterProps {
  children: JSX.Element;
  onRefresh: () => void;
  onInfo: () => void;
}
export const CaptchaFooter = (props: CaptchaFooterProps) => {
  const { children, onRefresh, onInfo } = props;

  return (
    <FooterContainer>
      <FooterButtonsContainer>
        <SvgButton onClick={onRefresh}>
          <RefreshSvg size={24} />
        </SvgButton>
        <SvgButton onClick={onInfo}>
          <InfoSvg size={24} />
        </SvgButton>
      </FooterButtonsContainer>
      {children}
    </FooterContainer>
  );
};
