import styled from "@emotion/styled";

export const CaptchaContainerOuter = styled.div`
  display: inline-block;
  box-shadow: 2px 2px 6px 2px #54545457;
  max-width: 332px;
  position: absolute;
  background: white;
  z-index: 1;
`;
export const CaptchaContainer = styled.div<{ displayInfo: boolean }>`
  padding: 8px 8px 16px;
  width: 316px;
  height: 480px;
  position: relative;
  border-radius: 2px;
`;

export const GridArea = styled.div<{ gridTemplateColumns: string }>`
  display: grid;
  gap: 4px;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  padding-bottom: 8px;
  border-bottom: 1px solid lightgrey;
  height: 325px;
  text-align: left;
`;

export const CentringDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 90%;
`;

export const VerifyButton = styled.button`
  padding: 10px 16px;

  border-radius: 2px;
  background-color: #932093;
  border: none;
  outline: none;
  color: white;
  font-weight: bold;
  height: 32px;

  user-select: none;
  cursor: pointer;
  filter: none;

  transition: filter 0.3s;

  :hover {
    // 85% brightness of #932093. Prevents text from darkening.
    background: #7d1b7d;
    transition: background 0.15s;
  }

  :active {
    // 130% the brightness of #932093. Prevents text from brightening.
    background: #bf2abf;
    transition: filter 0.3s;
  }
`;

export const InfoDisplay = styled.div`
  color: grey;
  background: white;
  font-size: 0.9rem;

  padding: 0 8px;
  border-bottom: 6px solid white;

  height: 50px;
  overflow-y: scroll;

  p {
    margin: 0;
    letter-spacing: -0.03rem;
  }
`;
