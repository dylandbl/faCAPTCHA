import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ShowRoomContainer = styled.div`
  .codeBlockContainer {
    margin: 112px auto 0;
    width: 444px;
    height: 241px;
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

export const FlexContainer = styled.div<{ smallScreen?: boolean }>`
  display: flex;
  justify-content: space-evenly;
  align-items: ${({ smallScreen }) => (smallScreen ? "center" : "flex-start")};
  ${({ smallScreen }) => smallScreen && "flex-direction: column-reverse;"}
  width: 100%;
  max-width: 1000px;
  min-height: 280px;
  margin: ${({ smallScreen }) => (smallScreen ? "48px" : "16px")} auto 0px;
`;

export const InputsContainer = styled.div<{ show: boolean }>`
  background: white;
  overflow: hidden;
  margin-bottom: 10px;
  width: 100%;
  ${({ show }) =>
    show
      ? css`
          height: 410px;
        `
      : css`
          height: 0;
        `}

  transition: height 0.3s linear;

  label {
    margin-left: 4px;

    &.textInputLabel {
      margin: 6px 0 0 0;
      display: inline-block;
    }
  }

  .inputsInnerContainer {
    width: 275px;
    padding: 6px 0 0 12px;
  }

  .dropdownLabel {
    margin-left: 0;
  }
  select {
    width: 177px;
  }

  .num-input {
    width: 44px;
  }

  p {
    margin: 0 0 6px;

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
