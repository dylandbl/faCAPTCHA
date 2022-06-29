import Props from "./types/index";

const FaCaptcha = (props: Props.CaptchaButton) => {
  const { notARobotText, cellsTall } = props;
  return (
    <div>
      Yo {notARobotText}, go the hello to a TypeScript!? {cellsTall}
    </div>
  );
};

export default FaCaptcha;
