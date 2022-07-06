import styled from "@emotion/styled";

export const SVG = styled.svg<{ hoverColor?: string }>`
  cursor: pointer;
  transition: fill 1s;

  :hover {
    fill: ${({ hoverColor }) => hoverColor};
    transition: fill 0.15s;
  }
`;
