import styled from '@emotion/styled';

export const CaptchaContainer = styled.div`
  min-width: 17.188rem;
  max-width: 17.188rem;
  border-radius: 2px;
  border: 1px solid lightgrey;
  padding: 10px;
  background: #f7f7f7;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckboxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 0.95rem;
  gap: 0.625rem;
`;

export const CheckboxInput = styled.input`
  height: 1.5rem;
  width: 1.5rem;
  margin: 0px;

  ${({ disabled }) => disabled && 'cursor: not-allowed;'}
`;

export const PoweredBy = styled.div`
  font-size: 0.7rem;
  color: grey;
  width: 3.75rem;
`;
