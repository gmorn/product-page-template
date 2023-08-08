import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Skeleton from '@mui/material/Skeleton'
import { useState } from 'react'
import { Arrow, ButtonBlock, Indicator, PointBLock, Slide, SliderContainer } from './styles'

type Props = {
  isLoading?: boolean
}

export default function Slider({ isLoading }: Props) {


  //  номер картинки выбирается рандомно чтобы было повеселее 
  const [activeSlide, setActiveSlide] = useState<number>(Math.floor(Math.random() * 4))

  const [imageSrc, setImageSrc] = useState<string[]>([
    './images/6crn3sqse14b1.jpg',
    './images/3880b1342d980e488f45e71009c731b9.jpg',
    './images/d7wjrrymatz51.png',
    './images/test_header_org.jpg'
  ])

  const [buttonState, setButtonState] = useState<boolean>(false)

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(3)
    } else {
      setActiveSlide(activeSlide - 1)
    }
  }

  const nextSlide = () => {
    if (activeSlide === 3) {
      setActiveSlide(0)
    } else {
      setActiveSlide(activeSlide + 1)
    }
  }

  return (
    <SliderContainer
      onMouseEnter={() => setButtonState(true)}
      onMouseLeave={() => setButtonState(false)}
    >
      {!isLoading ?
        imageSrc.map((item, index) => {
          return (
            <Slide active={index === activeSlide} key={index}>
              <img src={item} alt="Random Image" />
            </Slide>
          )
        })
        :
        <Skeleton
          variant="rectangular"
          sx={{ bgcolor: '#EAEAEA' }}
          width={'100%'}
          height={'100%'}
        />
      }
      {!isLoading ?
        <ButtonBlock active={buttonState}>
          <Arrow>
            <KeyboardArrowLeftIcon
              onClick={prevSlide}
              sx={{ color: '#C7C7C7' }}
            />
          </Arrow>
          <Arrow>
            <KeyboardArrowRightIcon
              onClick={nextSlide}
              sx={{ color: '#C7C7C7' }}
            />
          </Arrow>
        </ButtonBlock>
        :
        <></>
      }

      <Indicator>
        {!isLoading ?
          imageSrc.map((item, index) => {
            return (
              <PointBLock
                key={index}
                active={index === activeSlide}
                onClick={() => setActiveSlide(index)}
              />
            )
          })
          :
          <Skeleton
            variant="rectangular"
            sx={{ bgcolor: '#F8F8F8', borderRadius: '3px' }}
            width={56}
            height={8}
          />
        }
      </Indicator>
    </SliderContainer>
  )
}