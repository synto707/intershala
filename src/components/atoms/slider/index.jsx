import { useState, Children, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useClassNames from '../../../helper/hooks/useClassNames.js';
import useTouchDevice from '../../../helper/hooks/useTouchDevice.js';
import SliderNavigation from '../../../components/atoms/slider/slider-navigation';

const Slider = ({
  className = '',
  containerClassName = '',
  slideWidth = 300,
  slidesPerView,
  fitToSlides = false,
  arrows = false,
  innerArrows = false,
  solidArrows = false,
  dots = true,
  spaceBetween = 20,
  withThumbs = false,
  children,
  onSwiper,
  onInit,
  allowTouchMove,
  prevButtonStyles = {},
  nextButtonStyles = {},
  prevArrowStyles = {},
  nextArrowStyles = {},
  compactNavigation,
  slideWidthIsFlexible,
  allowArrowsOnTouchDevice = false,
  forBadges = false,
  ...props
}) => {
  const { isTouchDevice } = useTouchDevice();

  const [init, setInit] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const handleInit = useCallback((swiper) => {
    setTimeout(() => setInit(true), 0);
    if (onInit) onInit(swiper);
  }, [onInit]);

  const validToFit = fitToSlides && slideWidth && slidesPerView;
  const sliderWidth = validToFit
    ? `${spaceBetween * (slidesPerView - 1) + slideWidth * slidesPerView}px`
    : '100%';

  const containerClassNames = useClassNames([
    containerClassName,
    'slider__container relative h-full',
    !init ? 'hidden' : 'block',
    {
      'slider__container--fit': validToFit,
      'slider__container--with-thumbs': withThumbs,
      'slider__container--badges': forBadges,
    },
  ]);

  const slidesClassName = useClassNames(['slider', className]);

  const slideProps = {
    width: slideWidthIsFlexible ? 'fit-content' : `${slideWidth}px`,
  };

  const slides = Children.map(children, (child) => (
    <SwiperSlide style={slideProps}>{child}</SwiperSlide>
  ));

  const totalSlides = slides?.length || 0;
  const shouldShowArrows = arrows;

  const handleOnSwiper = (swiper) => {
    swiperRef.current = swiper;
    if (onSwiper) onSwiper(swiper);
    if (withThumbs) setThumbsSwiper(swiper);
  };

  const handleOnBeforeInit = (swiper) => {
    swiper.params.navigation.prevEl = navigationPrevRef.current;
    swiper.params.navigation.nextEl = navigationNextRef.current;
  };

  return (
    <div className={containerClassNames}>
      <Swiper
        key={`${allowTouchMove} ${isTouchDevice}`}
        className={slidesClassName}
        modules={[Navigation, Pagination, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        pagination={dots ? { clickable: true, bulletActiveClass: 'slider__bullet--active' } : false}
        slidesPerView={slidesPerView ?? 'auto'}
        spaceBetween={spaceBetween}
        style={{ width: sliderWidth }}
        navigation={
          shouldShowArrows
            ? {
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }
            : undefined
        }
        onSwiper={handleOnSwiper}
        onBeforeInit={handleOnBeforeInit}
        observer
        observeParents
        onInit={handleInit}
        allowTouchMove={allowTouchMove && isTouchDevice}
        {...props}
      >
        {slides}
      </Swiper>

      {shouldShowArrows && (
        <SliderNavigation
          compactNavigation={compactNavigation}
          arrows={allowArrowsOnTouchDevice ? arrows : arrows && !isTouchDevice}
          prevButtonStyles={prevButtonStyles}
          nextButtonStyles={nextButtonStyles}
          prevArrowStyles={prevArrowStyles}
          nextArrowStyles={nextArrowStyles}
          navigationPrevRef={navigationPrevRef}
          navigationNextRef={navigationNextRef}
          totalSlides={totalSlides}
          swiperRef={swiperRef.current}
          innerArrows={innerArrows}
          solidArrows={solidArrows}
        />
      )}
    </div>
  );
};

export default Slider;
