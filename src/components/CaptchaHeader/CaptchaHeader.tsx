import { SharedProps } from '../../types/index';
import { CaptchaHeaderDiv, TopicText, TopicTitle } from './CaptchaHeaderStyles';

interface CaptchaHeaderProps {
  headerText?: SharedProps['headerText'];
  captchaTopic: string;
  verifyText: SharedProps['verifyText'];
}

export const CaptchaHeader = (props: CaptchaHeaderProps) => {
  const { headerText, captchaTopic, verifyText } = props;

  return (
    <CaptchaHeaderDiv centerTextVertically={Boolean(headerText)}>
      {headerText ? (
        <TopicText>{headerText}</TopicText>
      ) : (
        <>
          <TopicText>Select all squares with</TopicText>
          <TopicTitle>{captchaTopic}</TopicTitle>
          <TopicText>If there are none, click {verifyText}</TopicText>
        </>
      )}
    </CaptchaHeaderDiv>
  );
};
