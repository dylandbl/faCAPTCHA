import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const CaptchaHeaderDiv = styled.div<{ centerTextVertically: boolean }>`
  background: #932093;
  color: white;
  padding: 16px;
  text-align: left;
  // Same as <CaptchaContainer> padding.
  margin-bottom: 8px;

  ${({ centerTextVertically }) =>
    centerTextVertically &&
    css`
      display: flex;
      align-items: center;
    `}
`;

export const TopicText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

export const TopicTitle = styled.p`
  margin: 0;
  text-align: left;
  width: 268px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 700;
`;
