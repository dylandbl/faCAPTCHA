import { FakeCaptchaProps } from "../types/fakeCaptcha";
import { CaptchaHeaderDiv } from "./styles/fakeCaptchaStyles";

interface CaptchaHeaderProps {
  headerText?: FakeCaptchaProps.SharedProps["headerText"];
  captchaTopic: string;
  verifyText: FakeCaptchaProps.SharedProps["verifyText"];
}

export const CaptchaHeader = (props: CaptchaHeaderProps) => {
  const { headerText, captchaTopic, verifyText } = props;

  return (
    <CaptchaHeaderDiv>
      {headerText ? (
        <p>{headerText}</p>
      ) : (
        <>
          <p>Select all squares with</p>
          <h4>{captchaTopic}</h4>
          <p>If there are none, click {verifyText}</p>
        </>
      )}
    </CaptchaHeaderDiv>
  );
};
