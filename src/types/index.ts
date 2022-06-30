export namespace Props {
  export type ImgTopicType = {
    url: string;
    topics: string[];
  };

  export interface SharedProps {
    captchaTopics?: string[]; // CAPTCHA topics. Pseudorandom, default values will be used if captchaTopics is not defined.
    captchaTopicText?: string[]; // Array of topics to be displayed in the CAPTCHA header. Does not work with headerText.
    cellsTall?: number; // Number of cells in each column. If not defined, column heights will be equal to row lengths.
    cellsWide?: number; // Number of cells in each row.
    headerText?: string; // Used in place of the CAPTCHA header text. Overrides captchaTopic.
    imgTopicUrls: ImgTopicType[]; // Array of image URLs with associated tags. The tags are compared to captchaTopics and case and spelling must match exactly. The images will be displayed in order.
    helpText?: string; // An alternative to the default help text, shown when the '?' icon is clicked.
    minAttempts?: number; // The minimum number of required attempts, regardless of whether the attempts are correct or not.
    onClickVerify?: () => void; // Function to execute on clicking 'Verify'.
    onRefresh?: () => void; // Executes on clicking the refresh icon.
    simulateSlow?: 0 | 1 | 2 | 3; // Simulate a slow internet connection.
    verifyText?: string; // Text for the 'Verify' button.
  }

  export interface CaptchaButton extends SharedProps {
    notARobotText?: string; // Used in place of "I'm not a robot".
    onClickCheckbox?: () => void; // Executes on clicking the checkbox, does not execute if the CAPTCHA popup is open.
    onVerificationComplete: () => void; // Sets verified state on completion.
  }

  export interface CaptchaWindow extends SharedProps {
    poweredByText: string;
    captchaPassed: boolean;
    setCaptchaPassed: (value: boolean) => void;
    setShowCaptcha: (value: boolean) => void;
  }
}

export default Props;
