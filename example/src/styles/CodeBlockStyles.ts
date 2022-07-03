import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Pre = styled.pre<{ show: boolean }>`
  background: #e7e7e7;
  border-radius: 4px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  margin: -20px 0 10px 0;
  position: relative;

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

  .copyIcon {
    position: absolute;
    right: 8px;
    top: 8px;

    :active {
      fill: #bf2abf;
    }
  }
`;

export const CopiedNotice = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  position: relative;
  right: -406px;
  opacity: 0;

  &.animateCopied {
    animation: copiedAnimation 1s;
  }

  @keyframes copiedAnimation {
    from {
      top: -16px;
      opacity: 1;
    }
    to {
      top: -60px;
      opacity: 0;
    }
  }
`;
