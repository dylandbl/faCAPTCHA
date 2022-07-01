import FaCaptcha from "typescript-react-test";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import imagesArr1, { demo1 } from "./exampleData/imageUrls";
import { Examples } from "./sections/Examples";
import { ContentBody, ExampleDiv, Code, IntroP } from "./styles/AppStyles";
import { useWindowSize } from "./utils/hooks";

function App() {
  const screenWidth = useWindowSize();

  return (
    <div className="App">
      <Header screenWidth={screenWidth} />
      {/* {screenWidth > 1271 && <SideBar />} */}
      <ContentBody>
        <p>A functional, configurable, frontend CAPTCHA. For fun.</p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h4>Use it as a functional CAPTCHA.</h4>
            <ExampleDiv centred screenWidth={screenWidth}>
              <FaCaptcha
                onVerificationComplete={() => {}}
                imgTopicUrls={demo1}
                simulateSlow={0}
                captchaTopics={[
                  "clowns",
                  "fish",
                  "monster trucks",
                  "motor vehicles",
                ]}
              />
            </ExampleDiv>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <h4>
              ... Or as a frustrating user experience{" "}
              <small>(good luck!)</small>.
            </h4>
            <ExampleDiv centred screenWidth={screenWidth}>
              <FaCaptcha
                onVerificationComplete={() => {}}
                imgTopicUrls={imagesArr1}
                minAttempts={40}
              />
            </ExampleDiv>
          </div>
        </div>

        <IntroP screenWidth={screenWidth}>
          [<strong>fey</strong>-<strong>kap</strong>-ch<i>uh</i>]<br />
          <br />
          faCAPTCHA is a functional, configurable, frontend CAPTCHA with
          features available to create an infuriating, anti-user-friendly
          design. Initially an exploration in bad UX, through development it
          became a real and functional CAPTCHA. Just be sure to change the{" "}
          <Code className="darkText">helpText</Code>.
        </IntroP>

        <Examples />
      </ContentBody>

      <Footer />
    </div>
  );
}

export default App;
