export namespace Props {
  export type ImgTopicType = {
    url: string;
    topics: string[];
  };

  export interface SharedProps {
    captchaTopics?: string[]; // CAPTCHA topics. Pseudorandom, default values will be used if captchaTopics is not defined.
    cellsTall?: number; // Number of cells in each column. If not defined, column heights will be equal to row lengths.
    cellsWide?: number; // Number of cells in each row.
    headerText?: string; // Used in place of the CAPTCHA header text. Overrides captchaTopic.
    imgTopicUrls: ImgTopicType[]; // Array of image URLs with associated tags. The tags are compared to captchaTopics and case and spelling must match exactly. The images will be displayed in order.
    helpText?: string; // An alternative to the default help text, shown when the '?' icon is clicked.
    minAttempts?: number; // The minimum number of required attempts, regardless of whether the attempts are correct or not.
    maxAttempts?: number; // The maximum number of attempts that can be made before being denied access. Must be greater than or equal to minAttempts.
    onClickVerify?: () => void; // Function to execute on clicking 'Verify'.
    onMaxAttempts?: () => void; // Function called when the user has met the maximum number of attempts.
    onRefresh?: () => void; // Executes on clicking the refresh icon.
    simulateSlow?: 0 | 1 | 2 | 3; // Simulate a slow internet connection.
    uncloseable?: boolean; // Prevent the CAPTCHA from being closed until verification is complete.
    verifyText?: string; // Text for the 'Verify' button.
  }

  export interface CaptchaButton extends SharedProps {
    allowRetry?: boolean; // Allows the users to retry the CAPTCHA if they press the checkmark again.
    disabled?: boolean; // Disables the checkbox and disallows the user to complete verification.
    notARobotText?: string; // Used in place of "I'm not a robot".
    onClickCheckbox?: () => void; // Executes on clicking the checkbox, does not execute if the CAPTCHA popup is open.
    onVerificationComplete: () => void; // Sets verified state on completion.
  }

  export interface CaptchaWindow extends SharedProps {
    poweredByText: string;
    captchaPassed: boolean;
    setCaptchaPassed: (value: boolean) => void;
    setShowCaptcha: (value: boolean) => void;
    setDisabled: (value: boolean) => void;
  }
}

export default Props;
