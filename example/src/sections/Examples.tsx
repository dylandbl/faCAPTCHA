import { ExampleDiv, ExampleTitle } from "../styles/AppStyles";
import FaCaptcha from "typescript-react-test";
import { CodeBlock } from "../components/CodeBlock";
import imagesArr1 from "../exampleData/imageUrls";
import { useWindowSize } from "../utils/hooks";

export const Examples = () => {
  const screenWidth = useWindowSize();

  return (
    <>
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

        <ExampleTitle>And the number of tiles you want to see.</ExampleTitle>
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
            cellsWide={2}
          />
          <CodeBlock screenWidth={screenWidth}>{`<FaCaptcha
  imgTopicUrls={[  
    {
      url: "https://images.rawpixel.com/image_1000/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3BkMzYtNi1hczExLTQwLTU4NzVfb3JpZy5qcGc.jpg",
      topics: ["moon", "moon landing", "USA", "astronaut", "Apollo 11"],
    },
  ]}
  cellsWide={2}
/>`}</CodeBlock>
        </div>
      </ExampleDiv>
    </>
  );
};
