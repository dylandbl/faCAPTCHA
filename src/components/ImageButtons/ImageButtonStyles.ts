import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ClickableImageContainer = styled.div`
  position: relative;
`;

export const CheckmarkContainer = styled.div`
  position: absolute;
  right: 20px;
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
  height: 100%;
  aspect-ratio: 1 / 1;
  position: absolute;

  cursor: pointer;

  ${({ isClicked }) =>
    isClicked &&
    css`
      border: 5px solid white;
    `}
`;
