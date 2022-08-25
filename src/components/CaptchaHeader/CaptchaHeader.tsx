import { SharedProps } from "../../types/index";
import { CaptchaHeaderDiv } from "./CaptchaHeaderStyles";

interface CaptchaHeaderProps {
  headerText?: SharedProps["headerText"];
  captchaTopic: string;
  verifyText: SharedProps["verifyText"];
}

export const CaptchaHeader = (props: CaptchaHeaderProps) => {
  const { headerText, captchaTopic, verifyText } = props;

  return (
    <CaptchaHeaderDiv centerTextVertically={Boolean(headerText)}>
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
