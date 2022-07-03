import styled from "@emotion/styled";

export const FooterContainer = styled.div`
  height: 26px;
  width: calc(100% - 32px);
  margin: 16px 16px 0;
  background: white;
  border-top: 2px solid lightgrey;
  color: #545454;
  padding: 6px 16px 0;
  font-size: 0.7rem;
  position: absolute;
  bottom: 0;

  > a {
    text-decoration: none;
    color: #545454;

    :hover {
      text-decoration: underline;
    }
  }
`;
