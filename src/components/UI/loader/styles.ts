import styled, { keyframes } from 'styled-components'



const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LoadingSpinner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  svg {
    &:first-child {
      animation: ${spinAnimation} 1s linear infinite;
    }
    position:absolute
  }
`


