import styled from "@emotion/styled";

export const HeaderDiv = styled.div`
  height: 40px;
  padding: 0 10px;
  // 100% - padding.
  width: 100%;
  background: #761a76;
  border-radius: 0 0 8px 8px;
  margin-bottom: 10px;
  color: white;

  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;

  position: fixed;
  top: 0;
  z-index: 2;

  > .topNav-ul {
    font-weight: 500;
    list-style: none;
    margin: 0 0 3px 0;

    li {
      display: inline;
      margin-right: 12px;
    }

    a {
      text-decoration: none;
      color: white;
    }
  }
`;

export const TitleDiv = styled.div`
  font-weight: 900;
  font-size: 1.4rem;
`;

export const RightSideContainer = styled.div`
  display: flex;
`;

export const UserIconDiv = styled.div<{ background: string }>`
  // Same as GitHub logo.
  height: 26px;
  width: 26px;
  border-radius: 50%;
  background: red;
  margin-left: 12px;

  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
