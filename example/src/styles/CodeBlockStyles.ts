import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Pre = styled.pre<{ show: boolean }>`
  background: #e7e7e7;
  border-radius: 4px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  margin: 0 0 10px 0;

  ${({ show }) =>
    show
      ? css`
          width: 100%;
          padding: 4px 56px 8px;
          overflow-x: hidden;
        `
      : css`
          width: 0%;
          padding: 0;
          overflow-x: hidden;
        `}

  transition: width 0.3s ease-in, padding 0.45s linear;
`;
