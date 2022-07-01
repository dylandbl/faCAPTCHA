import { ImageButton } from "../ImageButtons/ImageButtons";
import {
  CaptchaContainer,
  CaptchaContainerOuter,
  CentringDiv,
  GridArea,
  InfoDisplay,
  VerifyButton,
} from "./FakeCaptchaStyles";
import { MouseEvent, useEffect, useState } from "react";
import { CaptchaHeader } from "../CaptchaHeader/CaptchaHeader";
import { CaptchaFooter } from "../CaptchaFooter/CaptchaFooter";
import { randomCaptchaTopic } from "../../utils/index";
import { RefreshSvg } from "../SvgComponent/SvgComponent";
import { Label } from "../FakeCaptchaButton/FakeCaptchaButtonStyles";
import { useCallback } from "react";
import { Props } from "../../types/index";

const FakeCAPTCHA = (props: Props.CaptchaWindow) => {
  const {
    verifyText = "verify",
    onClickVerify,
    headerText,
    cellsWide = 4,
    cellsTall = cellsWide,
    onRefresh,
    simulateSlow = 1,
    setCaptchaPassed,
    setShowCaptcha,
    minAttempts = 1,
    captchaTopics,
    imgTopicUrls,
    helpText,
  } = props;
  const initialTopic = captchaTopics
    ? captchaTopics[Math.floor(Math.random() * (captchaTopics.length - 1))]
    : randomCaptchaTopic() ?? "string";
  const [captchaTopic, setCaptchaTopic] = useState(initialTopic);
  const [isLoading, setIsLoading] = useState(true);
  const [currentAttempt, setAttemptsCount] = useState(1);
  const [displayInfo, setDisplayInfo] = useState(false);
  const connectionSpeed =
    simulateSlow *
    Math.floor(
      Math.random() * (simulateSlow * 3000 - simulateSlow * 2000) +
        simulateSlow * 2000
    );
  let correctSelectionKeys: string[] = [];
  let selectedItems: string[] = [];

  // Simulates initial loading time.
  useEffect(() => {
    setTimeout(
      () => setIsLoading(false),
      // Does not use connectionSpeed to prevent updating isLoading on connectionSpeed changes, which happens every render.
      simulateSlow *
        Math.floor(
          Math.random() * (simulateSlow * 3000 - simulateSlow * 2000) +
            simulateSlow * 2000
        )
    );
  }, [simulateSlow, setIsLoading]);

  // Adds or removes item from selectedItems. Executed from onClick ImageButton.
  const handleImageSelection = (key: string) => {
    if (selectedItems.includes(key)) {
      selectedItems.splice(selectedItems.findIndex((item) => item === key));
    } else selectedItems.push(key);
  };

  const generateGridItems = () => {
    const images = [];

    let index = 0;
    for (let x = 0; x < cellsWide; x++) {
      for (let y = 0; y < cellsTall; y++) {
        images.push(
          <ImageButton
            key={`${x}-${y}`}
            imageKey={`${x}-${y}`}
            url={imgTopicUrls[index].url}
            topics={imgTopicUrls[index].topics}
            handleSelection={handleImageSelection}
          />
        );

        // Later, on verification, we can compare selected image keys to keys in this array.
        if (imgTopicUrls[index].topics.includes(captchaTopic))
          correctSelectionKeys.push(`${x}-${y}`);

        // Handle indexing depending on array size.
        if (index >= imgTopicUrls.length - 1) index = 0;
        else index++;
      }
    }

    return images;
  };

  // Handles styling to ensure the grid items are all equal size.
  const gridTemplateColumns = () => {
    let gridTemplateColumnsString = "";
    for (let x = 0; x < cellsWide; x++) gridTemplateColumnsString += "1fr ";

    return gridTemplateColumnsString;
  };

  const handleRefresh = useCallback(() => {
    if (onRefresh) onRefresh();

    // "Load"...
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), connectionSpeed);

    // Then set the new topic.
    captchaTopics
      ? setCaptchaTopic(
          captchaTopics[Math.floor(Math.random() * (captchaTopics.length - 1))]
        )
      : setCaptchaTopic(randomCaptchaTopic());
  }, [setIsLoading, connectionSpeed, onRefresh, captchaTopics]);

  // Verifies that all guesses were correct.
  const verify = () => {
    // Compare the selectedItems' keys to the correctSelectionKeys.
    // If there is any discrepancy, setCaptchaPassed(false).
    // If either captcha passed === false ||  currentAttempt < minAttempts, continue showing pages.
    const difference: string[] = [];

    correctSelectionKeys
      .filter((i) => !selectedItems.includes(i))
      .map((i) => difference.push(i));

    selectedItems
      .filter((i) => !correctSelectionKeys.includes(i))
      .map((i) => difference.push(i));

    return difference.length === 0;
  };

  const handleVerify = (e: MouseEvent) => {
    e.preventDefault();

    if (!isLoading) {
      if (onClickVerify) onClickVerify();

      // If no attempts remaining and verification successful...
      if (currentAttempt >= minAttempts && verify()) {
        setIsLoading(true);
        setTimeout(() => {
          setCaptchaPassed(true);
          setShowCaptcha(false);
        }, connectionSpeed);
      } else {
        setAttemptsCount(currentAttempt + 1);
        handleRefresh();
      }
    }
  };

  const handleInfo = () => {
    setDisplayInfo(!displayInfo);
  };

  return (
    <>
      <CaptchaContainerOuter>
        <CaptchaContainer displayInfo={displayInfo}>
          {isLoading ? (
            <CentringDiv>
              {connectionSpeed > 0 && (
                <>
                  <RefreshSvg size={42} spin />
                  <Label>Powered by faCAPTCHA</Label>
                </>
              )}
            </CentringDiv>
          ) : (
            <>
              <CaptchaHeader
                headerText={headerText}
                captchaTopic={captchaTopic}
                verifyText={verifyText}
              />

              <GridArea gridTemplateColumns={gridTemplateColumns()}>
                {generateGridItems()}
              </GridArea>
            </>
          )}
          <CaptchaFooter onRefresh={handleRefresh} onInfo={handleInfo}>
            <VerifyButton onClick={(e) => handleVerify(e)}>
              {verifyText.toUpperCase()}
            </VerifyButton>
          </CaptchaFooter>
        </CaptchaContainer>
        {displayInfo && (
          <InfoDisplay>
            <p>
              {helpText ??
                `Click on the images that correspond with the given prompt. Once you've selected all applicable images, click '${verifyText}'. 
              If you make multiple wrong attempts in a row, you will be barred from accessing the site. The number of wrong attempts permitted 
              depends on your browsing behaviour. If you complete an entire row, column, or diagonal, you have a bingo. Shout 'bingo' into your 
              microphone to access the site.`}
            </p>
          </InfoDisplay>
        )}
      </CaptchaContainerOuter>
    </>
  );
};

export default FakeCAPTCHA;
