import { MouseEvent, useState } from "react";
import {
  CheckmarkContainer,
  ClickableImage,
  ClickableImageContainer,
} from "./styles/ImageButtonStyles";
import { CheckmarkSvg } from "./SvgComponent";
import { FakeCaptchaProps } from "../types/fakeCaptcha";

interface ImageButtonProps {
  url: FakeCaptchaProps.ImgTopicType["url"];
  topics: FakeCaptchaProps.ImgTopicType["topics"];
  handleSelection: (key: string) => void;
  imageKey: string;
}
export const ImageButton = (props: ImageButtonProps) => {
  const { url, imageKey, handleSelection } = props;
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setIsSelected(!isSelected);
    handleSelection(imageKey);
  };

  return (
    <ClickableImageContainer>
      <ClickableImage
        isClicked={isSelected}
        onClick={(e) => handleClick(e)}
        imgUrl={url}
      />
      <CheckmarkContainer>{isSelected && <CheckmarkSvg />}</CheckmarkContainer>
    </ClickableImageContainer>
  );
};
