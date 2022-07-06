import styled from "@emotion/styled";

export const HeaderDiv = styled.div`
  height: 40px;
  padding: 0 10px;
  // 100% - padding.
  width: 100%;
  background: white;
  border-radius: 0 0 8px 8px;
  margin-bottom: 10px;

  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;

  position: fixed;
  top: 0;
  z-index: 2000000001; // One more than Google's solution.

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
      color: black;
    }
  }
`;

export const TitleDiv = styled.div`
  font-weight: 900;
  font-size: 1.4rem;
`;

export const RightSideContainer = styled.div`
  display: flex;
  width: 131px;
  justify-content: center;
  align-items: baseline;

  a:nth-of-type(2) {
    margin-left: 12px;
  }
`;

export const UserIconDiv = styled.div<{ background: string }>`
  // Same as GitHub logo.
  height: 26px;
  width: 26px;
  border-radius: 50%;
  background: red;

  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
