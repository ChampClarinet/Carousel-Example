import { Carousel } from "react-responsive-carousel";
import styled from 'styled-components';

interface IProps {
  slides: any[];
  interval?: number;
}

export default ({ interval = 1000, slides }: IProps) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={interval}
      emulateTouch
      swipeable
      stopOnHover
      showArrows={false}
      showStatus={false}
    >
      {slides.map((item, i) => (
        <div key={i}>
          <Img src={item} />
        </div>
      ))}
    </Carousel>
  );
}

const Img = styled.img`
  object-fit: contain;
  height: 500px;
`;