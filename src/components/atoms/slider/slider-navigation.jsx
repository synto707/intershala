import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const SliderNavigation = ({
  compactNavigation,
  arrows,
  innerArrows,
  solidArrows,
  prevButtonStyles,
  nextButtonStyles,
  prevArrowStyles,
  nextArrowStyles,
  totalSlides,
  swiperRef,
  navigationPrevRef,
  navigationNextRef,
}) => {
  const compactNavigationArrowsStyle = {
    className: 'h-20 w-20 hover:cursor-pointer',
    strokeWidth: 1,
    color: '#959595',
  };

  if (compactNavigation)
    return (
      <div className="mt-10 flex justify-center gap-16">
        <ChevronLeftIcon
          {...compactNavigationArrowsStyle}
          onClick={() => swiperRef?.slidePrev()}
        />
        <div className="flex font-body text-14 font-regular leading-loose text-secondary-black">
          <span>{((swiperRef?.activeIndex ?? 0) % (totalSlides ?? 1)) + 1}</span>
          <span>/</span>
          <span>{totalSlides}</span>
        </div>
        <ChevronRightIcon
          {...compactNavigationArrowsStyle}
          onClick={() => swiperRef?.slideNext()}
        />
      </div>
    );

  const innerArrowsClassName = innerArrows ? 'slider_arrow_inner' : '';
  const solidArrowsClassName = solidArrows ? 'slider_arrow_solid' : '';

  if (!arrows) {
    return null;
  }

  return (
    <div>
      <div
        ref={navigationPrevRef}
        className={`slider_arrow slider_arrow_prev ${innerArrowsClassName} ${solidArrowsClassName}`}
        style={prevButtonStyles}
      >
        <span className="arrow" style={prevArrowStyles}></span>
      </div>
      <div
        ref={navigationNextRef}
        className={`slider_arrow slider_arrow_next ${innerArrowsClassName} ${solidArrowsClassName}`}
        style={nextButtonStyles}
      >
        <span className="arrow" style={nextArrowStyles}></span>
      </div>
    </div>
  );
};

export default SliderNavigation;
