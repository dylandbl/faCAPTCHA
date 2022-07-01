import { useLayoutEffect, useState } from "react";
import FaCaptcha from "typescript-react-test";
import { CodeBlock } from "./components/CodeBlock";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import imagesArr1, { demo1 } from "./exampleData/imageUrls";
import {
  ContentBody,
  ExampleDiv,
  ExampleTitle,
  Code,
} from "./styles/AppStyles";

const useWindowSize = () => {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return width;
};

function App() {
  const [topic, setTopic] = useState(["motor vehicles"]);

  const handleManualTopicChange = () => {
    if (topic === ["motor vehicles"]) setTopic(["race cars"]);
    else setTopic(["motor vehicles"]);
  };

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

        <p className="intro-p">
          [<strong>fey</strong>-<strong>kap</strong>-ch<i>uh</i>]<br />
          <br />
          faCAPTCHA is a functional, configurable, frontend CAPTCHA with
          features available to create an infuriating, anti-user-friendly
          design. Initially an exploration in bad UX, through development it
          became a real and functional CAPTCHA. Just be sure to change the{" "}
          <Code className="darkText">helpText</Code>.
        </p>

        <h2 id="Demos">Demos</h2>
        <p>
          See the{" "}
          <a
            className="fancy-a"
            href="https://github.com/dylandbl/faCAPTCHA#api"
            title="https://github.com/dylandbl/faCAPTCHA#api"
          >
            repo on Github
          </a>{" "}
          for a full list of available features and API information.
        </p>
        <ExampleDiv stylish screenWidth={screenWidth}>
          <ExampleTitle>Simulate a slow network connection.</ExampleTitle>
          <div className="organizer">
            <FaCaptcha
              onVerificationComplete={() => {}}
              imgTopicUrls={imagesArr1}
              simulateSlow={2}
            />
            <CodeBlock
              screenWidth={screenWidth}
            >{`<FaCaptcha simulateSlow={2} />`}</CodeBlock>
          </div>
        </ExampleDiv>
        <ExampleDiv stylish screenWidth={screenWidth}>
          <ExampleTitle>Modify the text values.</ExampleTitle>
          <div className="organizer">
            <FaCaptcha
              onVerificationComplete={() => {}}
              imgTopicUrls={imagesArr1}
              simulateSlow={0}
              notARobotText="Click me! CLICK ME!"
              verifyText="CLICK"
              helpText="Click CLICK!"
              headerText="Click the correct image"
            />
            <CodeBlock screenWidth={screenWidth}>
              {`<FaCaptcha
  notARobotText="Click me! CLICK ME!"
  verifyText="CLICK"
  helpText="Click CLICK!"
  headerText="Click the correct image"
/>`}
            </CodeBlock>
          </div>

          <ExampleTitle>Perfect for custom language support.</ExampleTitle>
          <div className="organizer">
            <FaCaptcha
              onVerificationComplete={() => {}}
              imgTopicUrls={imagesArr1}
              simulateSlow={0}
              notARobotText="No soy un robot"
              verifyText="Vérifier"
              helpText="Hier finden Sie keine Hilfe!"
              headerText="选择带有汽车的图像。"
            />
            <CodeBlock screenWidth={screenWidth}>
              {`<FaCaptcha
  notARobotText="No soy un robot"
  verifyText="Vérifier"
  helpText="Hier finden Sie keine Hilfe!"
  headerText="选择带有汽车的图像。"
/>`}
            </CodeBlock>
          </div>
        </ExampleDiv>
        <ExampleDiv stylish screenWidth={screenWidth}>
          <ExampleTitle>Provide your own CAPTCHA topics.</ExampleTitle>
          <div className="organizer">
            <FaCaptcha
              onVerificationComplete={() => {}}
              imgTopicUrls={imagesArr1}
              simulateSlow={0}
              captchaTopics={["sportsmanship", "mail carriers", "Ireland"]}
            />
            <CodeBlock screenWidth={screenWidth}>
              {`<FaCaptcha
  captchaTopics={["sportsmanship", "mail carriers", "Ireland"]}
/>`}
            </CodeBlock>
          </div>

          <ExampleTitle>Or a single topic for granular control.</ExampleTitle>
          <div className="organizer">
            <FaCaptcha
              onVerificationComplete={() => {}}
              imgTopicUrls={imagesArr1}
              simulateSlow={0}
              captchaTopics={["CAPTCHA"]}
            />
            <CodeBlock
              screenWidth={screenWidth}
            >{`<FaCaptcha captchaTopics={["CAPTCHA"]} />`}</CodeBlock>
          </div>

          <ExampleTitle>
            Use <Code>onClickVerify</Code> to change topics manually.
          </ExampleTitle>
          <div className="organizer">
            <FaCaptcha
              onVerificationComplete={() => {}}
              imgTopicUrls={imagesArr1}
              simulateSlow={0}
              captchaTopics={topic}
              minAttempts={2}
              onClickVerify={handleManualTopicChange}
            />
            <CodeBlock screenWidth={screenWidth}>
              {`
const [topic, setTopic] = useState(["motor vehicles"]);
const handleManualTopicChange = () => {
  if (topic === ["motor vehicles"]) setTopic(["race cars"]);
  else setTopic(["motor vehicles"]);
};

<FaCaptcha
  minAttempts={2}
  captchaTopics={topic}
  onClickVerify={handleManualTopicChange}
/>`}
            </CodeBlock>
          </div>
        </ExampleDiv>

        <ExampleDiv stylish screenWidth={screenWidth}>
          <ExampleTitle>Define the pictures you want to use.</ExampleTitle>
          <div className="organizer">
            <FaCaptcha
              onVerificationComplete={() => {}}
              imgTopicUrls={[
                {
                  url: "https://images.rawpixel.com/image_1000/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3BkMzYtNi1hczExLTQwLTU4NzVfb3JpZy5qcGc.jpg",
                  topics: [
                    "moon",
                    "moon landing",
                    "USA",
                    "astronaut",
                    "Apollo 11",
                  ],
                },
              ]}
              simulateSlow={0}
            />
            <CodeBlock screenWidth={screenWidth}>{`<FaCaptcha
  imgTopicUrls={[  
    {
      url: "https://images.rawpixel.com/image_1000/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3BkMzYtNi1hczExLTQwLTU4NzVfb3JpZy5qcGc.jpg",
      topics: ["moon", "moon landing", "USA", "astronaut", "Apollo 11"],
    },
  ]}
/>`}</CodeBlock>
          </div>
        </ExampleDiv>
      </ContentBody>

      <Footer />
    </div>
  );
}

export default App;
