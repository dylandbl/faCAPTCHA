import { MouseEvent, useState } from "react";
import {
  CheckmarkContainer,
  ClickableImage,
  ClickableImageContainer,
} from "./ImageButtonStyles";
import { CheckmarkSvg } from "../SvgComponent/SvgComponent";
import { Props } from "../../types/index";

interface ImageButtonProps {
  url: Props.ImgTopicType["url"];
  topics: Props.ImgTopicType["topics"];
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
