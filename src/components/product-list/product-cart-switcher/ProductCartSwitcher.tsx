import { useEffect, useState } from 'react'
import { SwitcherContainer } from './styles'

type Props = {
  cartState: boolean
  toggleCartState: (param: string) => void
}

const lightGray: string = '#C7C7C7'
const gray: string = '#A4A4A4'
const green: string = '#00A0AB'

export default function ProductCartSwitcher({ cartState, toggleCartState }: Props) {

  const [firstSvgColor, setFirstSvgColor] = useState<string>(lightGray)
  const [secondSvgColor, setSecondSvgColor] = useState<string>(lightGray)

  const [hoveredFirst, setHoveredFirst] = useState(false)
  const [hoveredSecond, setHoveredSecond] = useState(false)

  useEffect(() => {
    if (cartState) {
      setFirstSvgColor(green)
      setSecondSvgColor(lightGray)
    } else {
      setSecondSvgColor(green)
      setFirstSvgColor(lightGray)
    }
  }, [cartState])

  const handleClick = (param: string) => {
    switch (param) {
      case 'first':
        setFirstSvgColor(green)
        setSecondSvgColor(lightGray)
        toggleCartState('first')
        break
      case 'second':
        setFirstSvgColor(lightGray)
        setSecondSvgColor(green)
        toggleCartState('second')
        break
      default:
        break
    }
  }

  const handleMouseEnter = (param: string) => {
    switch (param) {
      case 'first':
        setHoveredFirst(true)
        break
      case 'second':
        setHoveredSecond(true)
        break
      default:
        break
    }
  }

  const handleMouseLeave = (param: string) => {
    switch (param) {
      case 'first':
        setHoveredFirst(false)
        break
      case 'second':
        setHoveredSecond(false)
        break
      default:
        break
    }
  }

  return (
    <SwitcherContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        onMouseEnter={() => handleMouseEnter('first')}
        onMouseLeave={() => handleMouseLeave('first')}
        onClick={() => handleClick('first')}
        style={{ cursor: 'pointer' }}
      >
        <rect x="1.1" y="1.1" width="11.8" height="11.8" rx="1.9" stroke={hoveredFirst ? gray : firstSvgColor} strokeWidth="2.2" />
        <rect x="18.1" y="1.1" width="11.8" height="11.8" rx="1.9" stroke={hoveredFirst ? gray : firstSvgColor} strokeWidth="2.2" />
        <rect x="1.1" y="18.1" width="11.8" height="11.8" rx="1.9" stroke={hoveredFirst ? gray : firstSvgColor} strokeWidth="2.2" />
        <rect x="18.1" y="18.1" width="11.8" height="11.8" rx="1.9" stroke={hoveredFirst ? gray : firstSvgColor} strokeWidth="2.2" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        onMouseEnter={() => handleMouseEnter('second')}
        onMouseLeave={() => handleMouseLeave('second')}
        onClick={() => handleClick('second')}
        style={{ cursor: 'pointer' }}
      >
        <rect x="1.1" y="18.1" width="28.8" height="11.8" rx="1.9" stroke={hoveredSecond ? gray : secondSvgColor} strokeWidth="2.2" />
        <rect x="1.1" y="1.1" width="28.8" height="11.8" rx="1.9" stroke={hoveredSecond ? gray : secondSvgColor} strokeWidth="2.2" />
      </svg>
    </SwitcherContainer>
  )
}