import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CaptchaHeaderDiv = styled.div<{ centerTextVertically: boolean }>`
  background: #932093;
  color: white;
  padding: 16px;
  text-align: left;
  // Same as <CaptchaContainer> padding.
  margin-bottom: 8px;
  // Default height + padding.
  height: calc(61px + 16px + 16px);

  ${({ centerTextVertically }) =>
    centerTextVertically &&
    css`
      display: flex;
      align-items: center;
    `}

  h4 {
    margin: 0;
    text-align: left;
    width: 268px;
    height: 21px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;
