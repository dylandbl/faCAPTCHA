import FaCaptcha from "typescript-react-test";
import { demo1 } from "../exampleData/imageUrls";

export const PhotoShootExample = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      marginTop: "250px",
    }}
  >
    <FaCaptcha
      onVerificationComplete={() => {}}
      imgTopicUrls={demo1}
      cellsWide={3}
      captchaTopics={["dogs", "a cat"]}
    />
  </div>
);
