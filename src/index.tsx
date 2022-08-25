import { CaptchaButtonProps } from "./types/index";
import { FaCaptchaButton } from "./components/FakeCaptchaButton/FakeCaptchaButton";

const FaCaptcha = (props: CaptchaButtonProps) => {
  return (
    <span style={{ boxSizing: "border-box" }}>
      <FaCaptchaButton {...props} />
    </span>
  );
};

export default FaCaptcha;
