import Slider from "react-slick";
import { useRef } from 'react';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// _mock_
import { _carouselsExample } from 'src/_mock';
// components
import Image from 'src/components/Image';
import { CarouselDots, CarouselArrows } from 'src/components/carousel';
import { ImagesType } from '../../utils/TS/interface';
import { DimaName } from "src/utils/dima";
import * as logo from "/public/assets/bg_gradient.jpeg"

// ----------------------------------------------------------------------

const RootStyle = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& .slick-list': {
    boxShadow: theme.customShadows.z16,
    borderRadius: Number(theme.shape.borderRadius) * 2,
  },
}));

// ----------------------------------------------------------------------

export default function CarouselBasic3({ photos }: { photos: ImagesType }) {
  const carouselRef = useRef<Slider | null>(null);
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
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
  if (photos.length === 1) {
    const photo = {
      url: photos[0].url ? photos[0].url : logo.default.src,
      alt: photos[0].alt ? photos[0].alt : DimaName.whole
    }
    return <CarouselItem key={photo.alt} item={{ image: photo.url, title: photo.alt, description: photo.alt }} />
  }
  else {
    return (
      <RootStyle>
        <CarouselArrows
          onNext={handleNext}
          onPrevious={handlePrevious}
        >
          <Slider ref={carouselRef} {...settings}>
            {photos.map((photo) => (
              <CarouselItem key={photo.alt} item={{ image: photo.url, title: photo.alt, description: photo.alt }} />
            ))
            }
          </Slider>
        </CarouselArrows>
      </RootStyle>
    );
  }
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  title: string;
  description: string;
  image: string;
};

function CarouselItem({ item }: { item: CarouselItemProps }) {
  const { image, title } = item;

  return <Image alt={title} src={image} ratio="16/9" />;
}
