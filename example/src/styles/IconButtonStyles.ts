import styled from '@emotion/styled';

export const IconButton = styled.button<{ show: boolean }>`
  padding: 0;
  border: 0;
  background: transparent;
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 4px;

  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transition: opacity ${({ show }) => (show ? 1 : 0.15)}s,
    visibility ${({ show }) => (show ? 0.5 : 0.5)}s;
`;
