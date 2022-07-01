import FaCaptcha from "typescript-react-test";
import { imagesArr2 } from "../exampleData/imageUrls";

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
      imgTopicUrls={imagesArr2}
      cellsWide={3}
      captchaTopics={["dogs", "a cat"]}
    />
  </div>
);
