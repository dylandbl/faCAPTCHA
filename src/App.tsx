import { useEffect, useState } from "react";
import { FakeCaptchaButton } from "./lib/components/FakeCaptchaButton";
import imagesArr1 from "./lib/utils/topicImagesArr";

function App() {
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (verified) {
      console.log(verified);
      window.alert("verified, baby!");
    }
  }, [verified]);

  return (
    <div className="App" style={{ marginTop: "20px", marginLeft: "20px" }}>
      <FakeCaptchaButton
        onVerificationComplete={() => setVerified(true)}
        imgTopicUrls={imagesArr1}
        minAttempts={3}
      />
    </div>
  );
}

export default App;
