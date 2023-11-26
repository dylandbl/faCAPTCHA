import {
  FlexContainer,
  InputsContainer,
  ShowCodeButton,
  ShowRoomContainer,
} from '../styles/ShowRoomStyles';
import FaCaptcha from 'typescript-react-test';
import { demo1, demo2 } from '../exampleData/imageUrls';
import { CodeBlock } from '../components/CodeBlock';
import { useState } from 'react';
import { topics1, topics2 } from '../exampleData/curatedTopics';
import { ExternalLinkSvg } from '../components/ExternalLinkSvg';
import { useWindowSize } from '../utils/hooks';

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
  const [imgTopicUrlsValue, setImgTopicUrlsValue] = useState('demo1');
  const [simulateSlowValue, setSimulateSlowValue] = useState(0);
  const [cellsWideValue, setCellsWideValue] = useState(3);
  const [minAttemptsValue, setMinAttemptsValue] = useState(1);
  const [maxAttemptsValue, setMaxAttemptsValue] = useState(8); // minAttempts default + 1.
  const [uncloseableValue, setUncloseableValue] = useState(false);
  const [notARobotTextValue, setNotARobotTextValue] =
    useState("I'm not a robot");
  const [captchaTopicsValue, setCaptchaTopicsValue] = useState(['']);
  const [verifyTextValue, setVerifyTextValue] = useState('verify');
  const [allowRetryValue, setAlowRetryValue] = useState(true);

  const handleImgTopicUrlsChange = (value: string) => {
    setImgTopicUrlsValue(value);
  };

  const handleSimulateSlowChange = (value: string) =>
    setSimulateSlowValue(Number(value));

  const handleCellWideChange = (value: string) =>
    setCellsWideValue(Number(value));

  const handleMinAttemptsChange = (value: number) => setMinAttemptsValue(value);

  const handleMaxAttemptsChange = (value: number) => setMaxAttemptsValue(value);

  const handleUncloseableChange = (value: boolean) =>
    setUncloseableValue(value);

  const handleNotARobotTextChange = (value: string) =>
    setNotARobotTextValue(value);

  const handleCaptchaTopicsChange = (value: string) =>
    setCaptchaTopicsValue([value]);

  const handleVerifyTextChange = (value: string) => setVerifyTextValue(value);

  const handleAllowRetry = (value: boolean) => setAlowRetryValue(value);

  const handleResetFields = () => {
    setImgTopicUrlsValue('demo1');
    setSimulateSlowValue(0);
    setCellsWideValue(3);
    setMinAttemptsValue(1);
    setUncloseableValue(false);
    setNotARobotTextValue("I'm not a robot");
    setCaptchaTopicsValue(['']);
    setVerifyTextValue('verify');

    // Hack to refresh the component without access to the state.
    setShowCaptcha(false);
    setTimeout(() => {
      setShowCaptcha(true);
    }, 10);
  };

  // This is the limit of what looks good with the original style.
  const smallScreen = useWindowSize() <= 664;

  return (
    <ShowRoomContainer>
      {!smallScreen && (
        <div className='codeBlockContainer'>
          <CodeBlock show={showCode}>
            {`<FaCaptcha
  onVerificationComplete={}
  imgTopicUrls={${imgTopicUrlsValue}}`}
            {captchaTopicsValue[0] === ''
              ? ''
              : `\n  captchaTopics={["${captchaTopicsValue}"]}`}
            {cellsWideValue === 4 ? '' : `\n  cellsWide={${cellsWideValue}}`}
            {simulateSlowValue === 1
              ? ''
              : `\n  simulateSlow={${simulateSlowValue}}`}
            {minAttemptsValue === 1
              ? ''
              : `\n  minAttempts={${minAttemptsValue}}`}
            {maxAttemptsValue === minAttemptsValue + 7
              ? ''
              : `\n  maxAttempts={${maxAttemptsValue}}`}
            {notARobotTextValue === "I'm not a robot"
              ? ''
              : `\n  notARobotText="${notARobotTextValue}"`}
            {verifyTextValue === 'verify'
              ? ''
              : `\n  verifyText="${verifyTextValue}"`}
            {!allowRetryValue ? '' : `\n  allowRetry`}
            {!uncloseableValue ? '' : `\n  uncloseable`}
            {`\n/>`}
          </CodeBlock>
        </div>
      )}

      <FlexContainer smallScreen={smallScreen}>
        {showFaCaptcha ? (
          <FaCaptcha
            allowRetry={allowRetryValue}
            onVerificationComplete={() => {}}
            imgTopicUrls={imgTopicUrlsValue === 'demo1' ? demo1 : demo2}
            captchaTopics={
              captchaTopicsValue[0] !== ''
                ? captchaTopicsValue
                : imgTopicUrlsValue === 'demo1'
                ? topics1
                : topics2
            }
            cellsWide={cellsWideValue}
            // @ts-ignore // 'number' is not assignable to '0 | 1 | 2 | 3'.
            simulateSlow={simulateSlowValue}
            minAttempts={minAttemptsValue}
            maxAttempts={maxAttemptsValue}
            uncloseable={uncloseableValue}
            notARobotText={notARobotTextValue}
            verifyText={verifyTextValue}
          />
        ) : (
          <div style={{ width: '275px' }} />
        )}

        <div style={{ width: '275px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: showConfig ? 'space-between' : 'flex-end',
            }}
          >
            {showConfig && (
              <>
                <ShowCodeButton onClick={handleResetFields}>
                  (Reset)
                </ShowCodeButton>{' '}
                {!smallScreen && (
                  <ShowCodeButton onClick={handleToggleCodeView}>
                    [{showCode ? 'Hide' : 'View'} code]
                  </ShowCodeButton>
                )}
              </>
            )}{' '}
            <ShowCodeButton onClick={handleToggleConfig}>
              Configure
            </ShowCodeButton>
          </div>
          <InputsContainer show={showConfig}>
            <p>
              For a full list of features and API information, see the{' '}
              <a
                className='fancy-a'
                href='https://github.com/dylandbl/faCAPTCHA#api'
                rel='noreferrer'
                title='https://github.com/dylandbl/faCAPTCHA#api'
                target='_blank'
              >
                repo on Github
                <ExternalLinkSvg />
              </a>
              .
            </p>
            <div className='inputsInnerContainer'>
              <label
                htmlFor='imgTopicUrls'
                className='dropdownLabel'
              >
                Select images for demo
              </label>
              <select
                id='imgTopicUrls'
                name='imgTopicUrls'
                className='dropdownLabel'
                value={imgTopicUrlsValue}
                onChange={(e) => handleImgTopicUrlsChange(e.target.value)}
              >
                <option value='demo1'>Demo 1</option>
                <option value='demo2'>Demo 2 (3x3 grid)</option>
              </select>
              <br />

              <input
                className='num-input'
                type='number'
                id='simulateSlow'
                name='simulateSlow'
                value={simulateSlowValue}
                min={0}
                max={3}
                onChange={(e) => handleSimulateSlowChange(e.target.value)}
              />
              <label htmlFor='simulateSlow'>Increase load time</label>
              <br />

              <input
                className='num-input'
                type='number'
                id='cellsWide'
                name='cellsWide'
                value={cellsWideValue}
                min={1}
                max={40}
                onChange={(e) => handleCellWideChange(e.target.value)}
              />
              <label htmlFor='cellsWide'>Number of tiles in width</label>
              <br />

              <input
                className='num-input'
                type='number'
                id='minAttempts'
                name='minAttempts'
                value={minAttemptsValue}
                min={1}
                max={40}
                onChange={(e) =>
                  handleMinAttemptsChange(Number(e.target.value))
                }
              />
              <label htmlFor='minAttempts'>Minimum attempts</label>
              <br />

              <input
                className='num-input'
                type='number'
                id='maxAttempts'
                name='maxAttempts'
                value={maxAttemptsValue}
                min={minAttemptsValue}
                max={40}
                onChange={(e) =>
                  handleMaxAttemptsChange(Number(e.target.value))
                }
              />
              <label htmlFor='minAttempts'>Maximum attempts</label>
              <br />

              <input
                type='checkbox'
                id='allowRetry'
                name='allowRetry'
                checked={allowRetryValue}
                onChange={(e) => handleAllowRetry(e.target.checked)}
              />
              <label htmlFor='uncloseable'>
                Allow retries after verification
              </label>
              <br />

              <input
                type='checkbox'
                id='uncloseable'
                name='uncloseable'
                checked={uncloseableValue}
                onChange={(e) => handleUncloseableChange(e.target.checked)}
              />
              <label htmlFor='uncloseable'>
                Prevent closing without verification
              </label>
              <br />

              <label
                htmlFor='notARobotText'
                className='textInputLabel'
              >
                "I'm not a robot"
              </label>
              <input
                type='text'
                id='notARobotText'
                name='notARobotText'
                value={notARobotTextValue}
                placeholder="I'm not a robot"
                maxLength={20}
                onChange={(e) => handleNotARobotTextChange(e.target.value)}
              />
              <br />

              <label
                htmlFor='captchaTopics'
                className='textInputLabel'
              >
                Custom CAPTCHA topic
              </label>
              <input
                type='text'
                id='captchaTopics'
                name='captchaTopics'
                value={captchaTopicsValue}
                placeholder='CAPTCHA topic'
                maxLength={20}
                onChange={(e) => handleCaptchaTopicsChange(e.target.value)}
              />
              <br />

              <label
                htmlFor='verifyText'
                className='textInputLabel'
              >
                Label for the 'verify' button
              </label>
              <input
                type='text'
                id='verifyText'
                name='verifyText'
                value={verifyTextValue}
                placeholder='verify'
                maxLength={15}
                onChange={(e) => handleVerifyTextChange(e.target.value)}
              />
              <br />
            </div>
          </InputsContainer>
        </div>
      </FlexContainer>
    </ShowRoomContainer>
  );
};
