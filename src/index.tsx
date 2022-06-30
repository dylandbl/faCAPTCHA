import Props from "./types/index";
import { FakeCaptchaButton } from "./components/FakeCaptchaButton/FakeCaptchaButton";

const FaCaptcha = (props: Props.CaptchaButton) => {
  return <FakeCaptchaButton {...props} />;
};

export default FaCaptcha;
