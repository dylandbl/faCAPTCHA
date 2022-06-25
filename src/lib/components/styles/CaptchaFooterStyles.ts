import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const FooterContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: absolute;

  bottom: 16px;
  // -16px to account for padding on each side.
  width: calc(100% - 16px);
`;

export const SVG = styled.svg<{
  fill?: string;
  allowHover?: boolean;
  spin?: boolean;
}>`
  cursor: pointer;
  fill: ${({ fill }) => (fill ? fill : "#545454")};
  transition: fill 0.3s;

  ${({ spin }) =>
    spin &&
    css`
      animation: spin 1s linear infinite;
      cursor: default;

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(-360deg);
        }
      }
    `}

  :hover {
    ${({ allowHover, spin }) => allowHover && !spin && "fill: grey"};
    transition: fill 0.3s;
  }
`;

export const CheckmarkBackground = styled.div`
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 50%;
  position: absolute;
`;
