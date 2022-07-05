import { useState } from "react";
import {
  CaptchaButton,
  CheckboxDiv,
  CheckboxInput,
  Label,
} from "./FakeCaptchaButtonStyles";
import FakeCAPTCHA from "../FakeCaptcha/FakeCaptcha";
import { useEffect } from "react";
import { Props } from "../../types/index";

export const FaCaptchaButton = (props: Props.CaptchaButton) => {
  const {
    allowRetry = false,
    notARobotText = "I'm not a robot",
    onClickVerify,
    onVerificationComplete,
    verifyText,
    minAttempts,
    maxAttempts,
    cellsWide,
    cellsTall,
    imgTopicUrls,
    onClickCheckbox,
    onMaxAttempts,
    helpText,
    simulateSlow = 1,
    headerText,
    captchaTopics,
    uncloseable,
    disabled = false,
  } = props;
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaPassed, setCaptchaPassed] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(disabled);
  const poweredByText = "Powered by faCAPTCHA";

  // Handle clicking the large checkbox.
  const handleClick = () => {
    if (allowRetry && checked) setChecked(false);

    if (!captchaPassed || allowRetry) {
      setCaptchaPassed(false);
      setShowCaptcha(true);
    }

    if (!showCaptcha && onClickCheckbox) onClickCheckbox();
  };

  // Delays displaying the checkmark.
  useEffect(() => {
    captchaPassed && setTimeout(() => setChecked(true), simulateSlow * 266);
    // Slight delay to ensure checkmark appears first.
    captchaPassed &&
      setTimeout(() => onVerificationComplete(), simulateSlow * 266 + 100);
  }, [captchaPassed, onVerificationComplete, simulateSlow]);

  return (
    <>
      <CaptchaButton>
        <CheckboxDiv>
          <CheckboxInput
            onClick={handleClick}
            type="checkbox"
            id="captcha-checkbox"
            name="facaptcha-Checkbox"
            checked={checked}
            onChange={() => {}}
            disabled={isDisabled}
          />
          <label htmlFor="">{notARobotText}</label>
        </CheckboxDiv>
        <Label>{poweredByText}</Label>
      </CaptchaButton>
      {showCaptcha && !isDisabled && (
        <FakeCAPTCHA
          minAttempts={minAttempts}
          maxAttempts={maxAttempts}
          onMaxAttempts={onMaxAttempts}
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
          simulateSlow={simulateSlow}
          headerText={headerText}
          captchaTopics={captchaTopics}
          uncloseable={uncloseable}
          setDisabled={setIsDisabled}
        />
      )}
    </>
  );
};
