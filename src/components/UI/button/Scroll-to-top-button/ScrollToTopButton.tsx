import { useEffect, useState } from 'react'
import { ScrollButton } from './styles'

type Props = {}

export default function ScrollToTopButton({ }: Props) {

  const [showButton, setShowButton] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      setShowButton(scrollTop > 500)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <ScrollButton
      onClick={scrollToTop}
      showButton={showButton}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M19.5 16.25L13 9.75L6.5 16.25" stroke="#8F8F8F" stroke-width="2" stroke-linecap="round" />
      </svg>
      Вверх
    </ScrollButton>
  )
}