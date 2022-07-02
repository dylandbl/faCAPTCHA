import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ShowRoomContainer = styled.div`
  .codeBlockContainer {
    height: 217px;
    margin: 112px auto 0;
    width: 444px;
  }
`;

export const ShowCodeButton = styled.div`
  cursor: pointer;
  color: #0645ad;
  font-size: 0.9rem;

  :hover {
    text-decoration: underline;
  }

  :active {
    color: #faa700;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100vw;
  max-width: 1000px;
  min-height: 280px;
  margin: 20px auto 0px;
`;

export const InputsContainer = styled.div<{ show: boolean }>`
  background: white;
  overflow: hidden;
  margin-bottom: 16px;
  width: 100%;
  ${({ show }) =>
    show
      ? css`
          height: 290px;
        `
      : css`
          height: 0;
        `}

  transition: height 0.3s linear, padding 0.45s linear;

  label {
    margin-left: 4px;

    &.textInputLabel {
      margin-top: 6px;
      display: inline-block;
    }
  }

  .inputsInnerContainer {
    width: 275px;
    height: 202px;
  }

  .num-input {
    width: 44px;
  }

  p {
    margin: 6px 0 0;

    .fancy-a {
      text-decoration: none;
      color: #0645ad;

      :hover {
        text-decoration: underline;
      }

      :active {
        color: #faa700;
      }
    }
  }
`;
