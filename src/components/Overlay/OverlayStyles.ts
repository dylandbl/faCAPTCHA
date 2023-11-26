import styled from "@emotion/styled";

export const OverlayDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: transparent;
  top: 0;
  left: 0;
  z-index: 2000000000; // This is what Google does, so it's okay.
`;
