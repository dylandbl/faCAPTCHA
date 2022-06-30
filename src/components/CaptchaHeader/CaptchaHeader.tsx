import { Props } from "../../types/index";
import { CaptchaHeaderDiv } from "./CaptchaHeaderStyles";

interface CaptchaHeaderProps {
  headerText?: Props.SharedProps["headerText"];
  captchaTopic: string;
  verifyText: Props.SharedProps["verifyText"];
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
