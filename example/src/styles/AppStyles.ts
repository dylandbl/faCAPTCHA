import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ContentBody = styled.div`
  max-width: 932px;
  margin: 82px auto;
  padding: 0 16px;

  > h2 {
    margin-top: 26px;

    ::before {
      display: block;
      content: " ";
      margin-top: -42px;
      height: 42px;
      visibility: hidden;
      pointer-events: none;
    }
  }

  h4 {
    text-align: center;
  }

  .intro-p {
    text-align: justify;
    margin-top: 42px;
    margin-bottom: 0;
    background: #932093;
    padding: 25px;
    border-radius: 4px;
    color: white;

    > .darkText {
      color: black;
    }
  }

  .fancy-a {
    width: 0;
    padding: 0px 4px;
    background-color: white;
    transition: width 0.3s, background-color 0.1s;

    :hover {
      background-color: #932093;
      color: white;
      padding: 0px 4px;
      border-radius: 4px;
      width: 100%;
      transition: width 0.3s, background-color 0.3s;
    }
  }
`;

export const ExampleTitle = styled.p`
  position: relative;
  bottom: -9px;
  background: white;
  display: inline;
  padding-right: 8px;
`;

export const ExampleDiv = styled.div<{
  centred?: boolean;
  stylish?: boolean;
  screenWidth: number;
}>`
  ${({ centred }) =>
    centred &&
    css`
      display: flex;
      justify-content: center;
    `}

  ${({ stylish }) =>
    stylish &&
    css`
      border: 1px solid lightgrey;
      border-radius: 2px;
      padding: 12px 26px;
      margin-top: 26px;
    `}

    .organizer {
    display: flex;
    flex-wrap: ${({ screenWidth }) =>
      screenWidth < 1272 ? "wrap" : "no-wrap"};
    border-top: 1px solid #e7e7e7;
    padding-top: 26px;
    margin-bottom: 26px;
  }
`;

export const Code = styled.code`
  background: #e7e7e7;
  padding: 3px 5px;
  border-radius: 4px;
`;
