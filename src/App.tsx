import CarouselLib from './CarouselLib';

export default () => {
  const slides = ['1.png', '2.png', '3.png',];
  return (
    <div className="">
      <CarouselLib slides={slides} />
    </div>
  )
}