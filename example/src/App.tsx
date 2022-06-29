import React from "react";
import FaCaptcha from "typescript-react-test";
import "./App.css";
import imagesArr1 from "./exampleData/imageUrls";

function App() {
  const handleVerification = () => {
    window.alert("Verified, baby!");
  };
  return (
    <div className="App">
      <FaCaptcha
        notARobotText="Dylan"
        onVerificationComplete={handleVerification}
        imgTopicUrls={imagesArr1}
      />
    </div>
  );
}

export default App;
