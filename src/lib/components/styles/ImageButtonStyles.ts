import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ClickableImageContainer = styled.div``;

export const CheckmarkContainer = styled.div`
  position: relative;
  left: 56px;
  bottom: 20px;
`;

export const ClickableImage = styled.button<{
  imgUrl: string;
  isClicked: boolean;
}>`
  border: none;
  background: url(${({ imgUrl }) => imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #f7f7f7;
  width: 100%;
  aspect-ratio: 1 / 1;

  cursor: pointer;

  ${({ isClicked }) =>
    isClicked &&
    css`
      border: 5px solid white;
    `}
`;
