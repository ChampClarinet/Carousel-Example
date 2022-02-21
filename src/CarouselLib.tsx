import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import styled from 'styled-components';

interface IProps {
  slides: any[];
  interval?: number;
}

export default ({ interval = 1000, slides }: IProps) => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  console.log(selectedItem)
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{
        display: 'flex',
        gap: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <h1>Carousel</h1>
        <div style={{
          display: 'flex',
          gap: 8,
        }}>
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setSelectedItem(i)}
              style={{
                borderRadius: 5,
                width: selectedItem === i ? 40 : 10,
                height: 10,
                boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, .4)',
                transition: 'all 200ms ease',
              }} />
          ))}
        </div>
      </div>
      <Carousel
        // autoPlay
        infiniteLoop
        interval={interval}
        emulateTouch
        swipeable
        stopOnHover
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        selectedItem={selectedItem}
        onChange={(index) => setSelectedItem(index)}
      >
        {slides.map((item, i) => (
          <div key={i}>
            <Wrapper>
              <Img src={item} />
              <ShareButton>{'Share'}</ShareButton>
            </Wrapper>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

const ShareButton = styled.button`
  background: lightblue;
  color: white;
  text-transform: uppercase;
  position: absolute;
  right: 5px;
  top: 5px;
`;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  margin: auto;
`;

const Img = styled.img`
  object-fit: contain;
  width: auto !important;
  height: 500px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, .4);
`;