import styled from "@emotion/styled";

export const CaptchaButton = styled.div`
  min-width: 275px;
  max-width: 275px;
  height: 52px;
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

  input {
    height: 24px;
    width: 24px;
    margin-right: 10px;
  }
`;

export const Label = styled.div`
  font-size: 0.7rem;
  color: grey;
  width: 60px;
`;
