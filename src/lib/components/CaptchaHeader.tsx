import { CaptchaHeaderDiv } from "./styles/fakeCaptchaStyles";

interface CaptchaHeaderProps {
  headerText?: string;
  captchaTopic: string;
}

export const CaptchaHeader = (props: CaptchaHeaderProps) => {
  const { headerText, captchaTopic } = props;

  return (
    <CaptchaHeaderDiv>
      {headerText ? (
        <p>{headerText}</p>
      ) : (
        <>
          <p>Select all squares with</p>
          <h4>{captchaTopic}</h4>
          <p>If there are none, click verify</p>
        </>
      )}
    </CaptchaHeaderDiv>
  );
};
