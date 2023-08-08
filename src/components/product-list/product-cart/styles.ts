import styled, { css } from 'styled-components'

type T_State = {
  state: boolean
}

type T_Active = {
  active: boolean
}

export const ProductCartContainer = styled.div<T_State>`
  border-radius: 12px;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  overflow: hidden;
  position: relative;
  
  ${props => props.state ? css`
    width: 224px;
    height: 364px;
    flex-direction: column;
    ` : css`
    width: 472px;
    height: 134px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & h3 {
      margin-bottom: 40px;
      margin-top: 10px;
    }
  `}
`

export const SeenBlock = styled.div<T_State & T_Active>`
  padding: 5px 8px;
  font-size: 12px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.90);
  position: absolute;
  z-index: 4;
  opacity: 0;
  top: 11px;

  ${props => props.state ? css`
    left: 65px;
  ` : css`
    left: 31px;
  `}

  ${props => props.active && css`
    opacity: 1;
  `}
`

export const Content = styled.div<T_State>`
  padding: 10px 12px 19px;
  display: flex;
  flex-direction: column;
  ${props => props.state ? css`
    gap: 10px;
  ` : css`
    min-width: 292px;
  `}
`

export const Price = styled.h4`
  font-size: 22px;
  font-weight: 700;
  color: #2C2C2C;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #2C2C2C;
`

export const Sity = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #8F8F8F;
`

export const Date = styled(Sity)``