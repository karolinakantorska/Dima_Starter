import Slider, { LazyLoadTypes } from "react-slick";
import React, { useRef } from 'react';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, } from '@mui/material';

// components

import { CarouselDots, CarouselArrows } from 'src/components/carousel';
//import Image from "next/image";


import PhilosophieFilmCom from "../_Dima/PhilosophieFilmCom";

const url1 = 'https://firebasestorage.googleapis.com/v0/b/archweb-c117f.appspot.com/o/philosophie%2FDIMA_Video_Test.mp4?alt=media&token=703c2214-c2d7-4b33-8b64-012f0b6a3e81';
const url2 = 'https://firebasestorage.googleapis.com/v0/b/archweb-c117f.appspot.com/o/philosophie%2FDIMA_Video_Test%20-%20Kopie.mp4?alt=media&token=f5eca701-c740-4d03-bc70-32f6aeae9c93';

// ----------------------------------------------------------------------

const RootStyle = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& .slick-list': {
    boxShadow: theme.customShadows.z16,
    borderRadius: Number(theme.shape.borderRadius) * 2,
  },
}));

// ----------------------------------------------------------------------

export default function CarouselAnimationCom() {
  const carouselRef = useRef<Slider | null>(null);
  const lazyLoad: LazyLoadTypes = "ondemand";
  const settings = {
    dots: true,
    arrows: false,
    lazyLoad: lazyLoad,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: false,
    ...CarouselDots({
      rounded: true,
      sx: { mt: 3 },
    }),
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };
  const theme = useTheme();

  return (
    <RootStyle>
      <CarouselArrows
        onNext={handleNext}
        onPrevious={handlePrevious}
      >
        <Slider ref={carouselRef} {...settings}>
          <PhilosophieFilmCom url={url1} />
          <PhilosophieFilmCom url={url2} />
        </Slider>
      </CarouselArrows>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------


/*
<PhilosophieFilmCom url={url1} />
          <PhilosophieFilmCom url={url2} />
          */