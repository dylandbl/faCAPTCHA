import {
  FlexContainer,
  InputsContainer,
  ShowCodeButton,
  ShowRoomContainer,
} from "../styles/ShowRoomStyles";
import FaCaptcha from "typescript-react-test";
import { imagesArr2 } from "../exampleData/imageUrls";
import { CodeBlock } from "../components/CodeBlock";
import { useState } from "react";
import topics from "../exampleData/curatedTopics";
import { ExternalLinkSvg } from "../components/ExternalLinkSvg";

export const ShowRoom = () => {
  const [showCode, setShowCode] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const handleToggleConfig = () => {
    setShowCode(!showConfig);
    setShowConfig(!showConfig);
  };

  const handleToggleCodeView = () => {
    setShowCode(!showCode);
  };
  const [showFaCaptcha, setShowCaptcha] = useState(true);
  // Codeblock values.
  const [simulateSlowValue, setSimulateSlowValue] = useState(0);
  const [cellsWideValue, setCellsWideValue] = useState(3);
  const [minAttemptsValue, setMinAttemptsValue] = useState(1);
  const [uncloseableValue, setUncloseableValue] = useState(false);
  const [notARobotTextValue, setNotARobotTextValue] =
    useState("I'm not a robot");
  const [captchaTopicsValue, setCaptchaTopicsValue] = useState([""]);
  const [verifyTextValue, setVerifyTextValue] = useState("verify");

  const handleSimulateSlowChange = (value: string) =>
    setSimulateSlowValue(Number(value));

  const handleCellWideChange = (value: string) =>
    setCellsWideValue(Number(value));

  const handleMinAttemptsChange = (value: string) =>
    setMinAttemptsValue(Number(value));

  const handleUncloseableChange = (value: boolean) =>
    setUncloseableValue(value);

  const handleNotARobotTextChange = (value: string) =>
    setNotARobotTextValue(value);

  const handleCaptchaTopicsChange = (value: string) =>
    setCaptchaTopicsValue([value]);

  const handleVerifyTextChange = (value: string) => setVerifyTextValue(value);

  const handleResetFields = () => {
    setSimulateSlowValue(0);
    setCellsWideValue(3);
    setMinAttemptsValue(1);
    setUncloseableValue(false);
    setNotARobotTextValue("I'm not a robot");
    setCaptchaTopicsValue([""]);
    setVerifyTextValue("verify");

    // Hack to refresh the component without access to the state.
    setShowCaptcha(false);
    setTimeout(() => {
      setShowCaptcha(true);
    }, 10);
  };

  return (
    <ShowRoomContainer>
      <div className="codeBlockContainer">
        <CodeBlock show={showCode}>
          {`<FaCaptcha
  onVerificationComplete={}
  imgTopicUrls={}`}
          {captchaTopicsValue[0] === ""
            ? ""
            : `\n  captchaTopics={[${captchaTopicsValue}]}`}
          {cellsWideValue === 4 ? "" : `\n  cellsWide={${cellsWideValue}}`}
          {simulateSlowValue === 1
            ? ""
            : `\n  simulateSlow={${simulateSlowValue}}`}
          {minAttemptsValue === 1
            ? ""
            : `\n  minAttempts={${minAttemptsValue}}`}
          {notARobotTextValue === "I'm not a robot"
            ? ""
            : `\n  notARobotText="${notARobotTextValue}"`}
          {verifyTextValue === "verify"
            ? ""
            : `\n  verifyText={${verifyTextValue}}`}
          {!uncloseableValue ? "" : `\n  uncloseable`}
          {`\n/>`}
        </CodeBlock>
      </div>

      <FlexContainer>
        {showFaCaptcha ? (
          <FaCaptcha
            onVerificationComplete={() => {}}
            imgTopicUrls={imagesArr2}
            captchaTopics={
              captchaTopicsValue[0] === "" ? topics : captchaTopicsValue
            }
            cellsWide={cellsWideValue}
            // @ts-ignore
            simulateSlow={simulateSlowValue}
            minAttempts={minAttemptsValue}
            uncloseable={uncloseableValue}
            notARobotText={notARobotTextValue}
            verifyText={verifyTextValue}
          />
        ) : (
          <div style={{ width: "275px" }} />
        )}

        <div style={{ width: "275px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: showConfig ? "space-between" : "flex-end",
            }}
          >
            {showConfig && (
              <>
                <ShowCodeButton onClick={handleResetFields}>
                  (Reset)
                </ShowCodeButton>{" "}
                <ShowCodeButton onClick={handleToggleCodeView}>
                  [{showCode ? "Hide" : "View"} code]
                </ShowCodeButton>
              </>
            )}{" "}
            <ShowCodeButton onClick={handleToggleConfig}>
              Configure
            </ShowCodeButton>
          </div>
          <InputsContainer show={showConfig}>
            <div className="inputsInnerContainer">
              <input
                className="num-input"
                type="number"
                id="simulateSlow"
                name="simulateSlow"
                value={simulateSlowValue}
                min={0}
                max={3}
                onChange={(e) => handleSimulateSlowChange(e.target.value)}
              />
              <label htmlFor="simulateSlow">Increase load time</label>
              <br />

              <input
                className="num-input"
                type="number"
                id="cellsWide"
                name="cellsWide"
                value={cellsWideValue}
                min={1}
                max={40}
                onChange={(e) => handleCellWideChange(e.target.value)}
              />
              <label htmlFor="cellsWide">Number of tiles in width</label>
              <br />

              <input
                className="num-input"
                type="number"
                id="minAttempts"
                name="minAttempts"
                value={minAttemptsValue}
                min={1}
                max={40}
                onChange={(e) => handleMinAttemptsChange(e.target.value)}
              />
              <label htmlFor="minAttempts">Minimum number of attempts</label>
              <br />

              <input
                type="checkbox"
                id="uncloseable"
                name="uncloseable"
                checked={uncloseableValue}
                onChange={(e) => handleUncloseableChange(e.target.checked)}
              />
              <label htmlFor="uncloseable">
                Prevent closing without verification
              </label>
              <br />

              <label htmlFor="notARobotText" className="textInputLabel">
                "I'm not a robot"
              </label>
              <input
                type="text"
                id="notARobotText"
                name="notARobotText"
                value={notARobotTextValue}
                placeholder="I'm not a robot"
                maxLength={20}
                onChange={(e) => handleNotARobotTextChange(e.target.value)}
              />
              <br />

              <label htmlFor="captchaTopics" className="textInputLabel">
                Custom CAPTCHA topic
              </label>
              <input
                type="text"
                id="captchaTopics"
                name="captchaTopics"
                value={captchaTopicsValue}
                placeholder="CAPTCHA topic"
                maxLength={20}
                onChange={(e) => handleCaptchaTopicsChange(e.target.value)}
              />
              <br />

              <label htmlFor="verifyText" className="textInputLabel">
                Label for the 'verify' button
              </label>
              <input
                type="text"
                id="verifyText"
                name="verifyText"
                value={verifyTextValue}
                placeholder="verify"
                maxLength={15}
                onChange={(e) => handleVerifyTextChange(e.target.value)}
              />
              <br />

              <p>
                See the{" "}
                <a
                  className="fancy-a"
                  href="https://github.com/dylandbl/faCAPTCHA#api"
                  rel="noreferrer"
                  title="https://github.com/dylandbl/faCAPTCHA#api"
                  target="_blank"
                >
                  repo on Github
                  <ExternalLinkSvg />
                </a>{" "}
                for a complete list of features and API information.
              </p>
            </div>
          </InputsContainer>
        </div>
      </FlexContainer>
    </ShowRoomContainer>
  );
};
