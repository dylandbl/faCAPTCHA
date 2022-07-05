import Props from "./types/index";
import { FaCaptchaButton } from "./components/FakeCaptchaButton/FakeCaptchaButton";

const FaCaptcha = (props: Props.CaptchaButton) => {
  return (
    <span style={{ boxSizing: "border-box" }}>
      <FaCaptchaButton {...props} />
    </span>
  );
};

export default FaCaptcha;
