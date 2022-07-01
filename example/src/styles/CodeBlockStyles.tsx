import styled from "@emotion/styled";

export const Pre = styled.pre<{ screenWidth?: number }>`
  background: #e7e7e7;
  border-radius: 4px;
  padding: 4px 8px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  margin: ${({ screenWidth }) =>
    screenWidth && screenWidth < 1272 ? "26px 0 10px 0" : "0 0 10px 26px"};
  width: 100%;
  overflow-x: auto;
`;
