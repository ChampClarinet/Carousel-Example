import { useEffect, useRef, useState } from "react"
import styled from 'styled-components';

//Manual

interface IProps {
  interval?: number;
  slides: any[];
}
export default ({ interval = 2000, slides }: IProps) => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const callback = () => {
    const prevCount = count;
    setCount(count + 1);
    if (prevCount > slides.length - 2) setCount(0);
  }

  const useInterval = (callback: () => any, interval: number | null) => {
    const savedCallback = useRef<any>();
    useEffect(() => {
      //after every render save the newest callback our reference object
      savedCallback.current = callback;
    });
    useEffect(() => {
      const tick = () => savedCallback.current();

      if (interval != null) {
        let timer = setInterval(tick, interval);
        return () => clearInterval(timer);
      }
    }, [interval])

  }

  useInterval(callback, isRunning ? interval : null)

  return (
    <Img src={slides[count]} />
  );

}

const Img = styled.img`
  object-fit: contain;
  height: 500px;
`;