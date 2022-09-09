import Slider from "react-slick";
import { useRef } from 'react';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Link } from '@mui/material';

// components
import Image from 'src/components/Image';
import { CarouselDots, CarouselArrows } from 'src/components/carousel';
import { ImagesType } from '../../utils/TS/interface';
import { DimaName } from "src/utils/dima";
import * as logo from "/public/assets/bg_gradient.jpeg"
//import Image from "next/image";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { replaceMinusToSpace } from "src/utils/Text/textUtils";

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
  const theme = useTheme();
  const propsArrowSlider = {
    position: 'absolute',
    bottom: 45,
    left: ' 50%',
    ml: '-30px',
    color: 'dima',
    fontSize: 60,
    [theme.breakpoints.down('mobile')]: {
      display: 'none'
    },
    [theme.breakpoints.between('mobile', 'lg')]: {
      fontSize: 40,
      ml: '-20px',
    },
  }
  const propsArrow = {
    position: 'relative',
    left: '50%',
    ml: '-40px',
    mt: '-10px',
    color: 'dima',
    fontSize: 80,
    [theme.breakpoints.down('mobile')]: {
      fontSize: 20,
      ml: '-10px',
    },
    [theme.breakpoints.between('mobile', 'lg')]: {
      fontSize: 70,
      ml: '-35px',
    },
  }
  if (photos.length === 1) {
    const photo = {
      url: photos[0].url ? photos[0].url : logo.default.src,
      alt: photos[0].alt ? photos[0].alt : DimaName.whole
    }
    return (
      <>
        <Box>
          <CarouselItem key={photo.alt} item={{ image: photo.url, title: photo.alt, description: photo.alt }} />
          <Link href="#Project_Table" underline="none">
            < KeyboardArrowDownIcon sx={{ ...propsArrow }} />
          </Link>
        </Box>
      </>
    )
  }
  else {
    return (
      <RootStyle>
        <CarouselArrows
          onNext={handleNext}
          onPrevious={handlePrevious}
        >
          <Slider ref={carouselRef} {...settings}>
            {photos.map((photo, i) => (
              <CarouselItem key={i} item={{ image: photo.url, title: photo.alt, description: photo.alt }} />
            ))
            }
          </Slider>
          <Link href="#Project_Table" underline="none">
            < KeyboardArrowDownIcon sx={{ ...propsArrowSlider }} />
          </Link>
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
  return (
    <Image alt={replaceMinusToSpace(title)} src={image} ratio="16/9" />
  );
}

