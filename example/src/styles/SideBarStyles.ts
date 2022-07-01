import styled from "@emotion/styled";

export const SideBarContainer = styled.div`
  position: fixed;
  top: 128px;
  right: 64px;
  border-left: 1px solid lightgrey;
  padding-left: 16px;

  > h5 {
    font-size: 1rem;
  }

  > .sidebar-ul {
    list-style: none;
    padding: 0;

    > li {
      margin-bottom: 12px;
      position: relative;
      padding-left: 6px;

      > a {
        text-decoration: none;
        font-weight: 500;
        color: #545454;

        :hover {
          color: white;
        }
      }
    }
  }
`;

export const SlidingBackground = styled.div<{ show?: boolean }>`
  height: 21px;
  width: ${({ show }) => (show ? "100%" : "0%")};
  background: #932093;
  position: relative;
  bottom: -21px;
  border-radius: 4px;
  transition: width 0.15s;
`;
