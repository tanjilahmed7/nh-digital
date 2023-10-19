import { useEffect, useRef, useState } from "react";

const useSwiperSlider = () => {
  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const trigger = swiperRef.current;
    if (trigger) {
      setSwiper(swiperRef.current.swiper);
    }
  }, []);

  return [swiperRef, swiper];
};

export default useSwiperSlider;
