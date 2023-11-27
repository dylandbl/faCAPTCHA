import { MouseEvent, useState } from 'react';
import {
  CheckmarkContainer,
  ClickableImage,
  ClickableImageContainer,
} from './ImageButtonStyles';
import { CheckmarkSvg } from '../SvgComponent/SvgComponent';
import { ImgTopicType } from '../../types/index';

interface ImageButtonProps {
  url: ImgTopicType['url'];
  topics: ImgTopicType['topics'];
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
        type='button'
      />
      <CheckmarkContainer>{isSelected && <CheckmarkSvg />}</CheckmarkContainer>
    </ClickableImageContainer>
  );
};
