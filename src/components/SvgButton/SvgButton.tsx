import { ButtonHTMLAttributes, ReactNode } from 'react';
import { StyledButton } from './SvgButtonStyles';

interface SvgButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  label: string;
}

export const SvgButton = (props: SvgButtonProps) => {
  const { children, label, ...rest } = props;
  return (
    <StyledButton
      type='button'
      title={label}
      aria-label={label}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
