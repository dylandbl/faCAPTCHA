import { MouseEvent, useState } from "react";
import {
  CaptchaButton,
  CheckboxDiv,
  Label,
} from "./styles/FakeCaptchaButtonStyles";
import FakeCAPTCHA from "./fakeCAPTCHA";
import { useEffect } from "react";
import { FakeCaptchaProps } from "../types/fakeCaptcha";

export const FakeCaptchaButton = (props: FakeCaptchaProps.CaptchaButton) => {
  const {
    notARobotText = "I'm not a robot",
    onClickVerify,
    onVerificationComplete,
    verifyText,
    minAttempts,
    cellsWide,
    cellsTall,
    imgTopicUrls,
    onClickCheckbox,
    helpText,
  } = props;
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaPassed, setCaptchaPassed] = useState(false);
  const [checked, setChecked] = useState(false);
  const poweredByText = "Powered by faCAPTCHA";

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setShowCaptcha(true);
    if (showCaptcha && onClickCheckbox) onClickCheckbox();
  };

  // Delays displaying the checkmark.
  useEffect(() => {
    captchaPassed && setTimeout(() => setChecked(true), 800);
    // Slight delay to ensure checkmark appears first.
    captchaPassed && setTimeout(() => onVerificationComplete(), 900);
  }, [captchaPassed, onVerificationComplete]);

  return (
    <>
      <CaptchaButton>
        <CheckboxDiv>
          <input
            onClick={(e) => handleClick(e)}
            type="checkbox"
            id="captcha-checkbox"
            name="fake-captcha-checkbox"
            checked={checked}
            onChange={() => {}}
          />
          {notARobotText}
        </CheckboxDiv>
        <Label>{poweredByText}</Label>
      </CaptchaButton>
      {showCaptcha && (
        <FakeCAPTCHA
          minAttempts={minAttempts}
          poweredByText={poweredByText}
          captchaPassed={captchaPassed}
          setCaptchaPassed={setCaptchaPassed}
          onClickVerify={onClickVerify}
          setShowCaptcha={setShowCaptcha}
          verifyText={verifyText}
          cellsWide={cellsWide}
          cellsTall={cellsTall}
          imgTopicUrls={imgTopicUrls}
          helpText={helpText}
        />
      )}
    </>
  );
};
