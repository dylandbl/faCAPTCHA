import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const SVG = styled.svg<{
  fill?: string;
  allowHover?: boolean;
  spin?: boolean;
  positionAbsolute?: boolean;
}>`
  cursor: pointer;
  fill: ${({ fill }) => (fill ? fill : "#545454")};
  transition: fill 0.3s;

  ${({ positionAbsolute }) => positionAbsolute && "position: absolute;"}

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
