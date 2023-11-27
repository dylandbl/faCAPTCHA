import { ButtonHTMLAttributes, ReactNode } from 'react';
import { StyledButton } from './SvgButtonStyles';

interface SvgButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const SvgButton = (props: SvgButtonProps) => {
  const { children, ...rest } = props;
  return <StyledButton {...rest}>{children}</StyledButton>;
};
