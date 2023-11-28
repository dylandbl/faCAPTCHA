import { ReactNode } from 'react';
import { FooterButtonsContainer, FooterContainer } from './CaptchaFooterStyles';
import { InfoSvg, RefreshSvg } from '../SvgComponent/SvgComponent';
import { SvgButton } from '../SvgButton/SvgButton';
import { SharedProps } from '../../types';

interface CaptchaFooterProps {
  children: ReactNode;
  onRefresh: () => void;
  refreshButtonAriaLabel: SharedProps['refreshButtonAriaLabel'];
  onInfo: () => void;
  helpButtonAriaLabel: SharedProps['helpButtonAriaLabel'];
}
export const CaptchaFooter = (props: CaptchaFooterProps) => {
  const {
    children,
    onRefresh,
    refreshButtonAriaLabel = 'Try a new challenge',
    onInfo,
    helpButtonAriaLabel = 'Help',
  } = props;

  return (
    <FooterContainer>
      <FooterButtonsContainer>
        <SvgButton
          label={refreshButtonAriaLabel}
          onClick={onRefresh}
        >
          <RefreshSvg size={1.5} />
        </SvgButton>
        <SvgButton
          label={helpButtonAriaLabel}
          onClick={onInfo}
        >
          <InfoSvg size={1.5} />
        </SvgButton>
      </FooterButtonsContainer>
      {children}
    </FooterContainer>
  );
};
