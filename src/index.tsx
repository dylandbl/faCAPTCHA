import Props from "./types/index";
import { FakeCaptchaButton } from "./components/FakeCaptchaButton/FakeCaptchaButton";

const FaCaptcha = (props: Props.CaptchaButton) => {
  return (
    <span style={{ boxSizing: "border-box" }}>
      <FakeCaptchaButton {...props} />
    </span>
  );
};

export default FaCaptcha;
//
