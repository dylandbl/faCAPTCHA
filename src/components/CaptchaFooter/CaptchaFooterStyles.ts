import styled from '@emotion/styled';

export const FooterContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: absolute;

  text-align: left;
  bottom: 16px;
  // -16px to account for padding on each side.
  width: calc(100% - 16px);
`;

export const FooterButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
`;
