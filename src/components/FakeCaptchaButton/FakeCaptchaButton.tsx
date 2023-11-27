import { useState, useEffect } from 'react';
import {
  CaptchaButton,
  CheckboxDiv,
  CheckboxInput,
  PoweredBy,
} from './FakeCaptchaButtonStyles';
import FakeCAPTCHA from '../FakeCaptcha/FakeCaptcha';
import { CaptchaButtonProps } from '../../types/index';

export const FaCaptchaButton = (props: CaptchaButtonProps) => {
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
  const poweredByText = 'Powered by faCAPTCHA';

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
      <CaptchaButton type='button'>
        <CheckboxDiv>
          <CheckboxInput
            onClick={handleClick}
            type='checkbox'
            id='captcha-checkbox'
            name='facaptcha-Checkbox'
            checked={checked}
            disabled={isDisabled}
          />
          <div>{notARobotText}</div>
        </CheckboxDiv>
        <PoweredBy>{poweredByText}</PoweredBy>
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
