import styled, { css } from 'styled-components'

type T_State = {
  showButton: boolean

}

export const ScrollButton = styled.div<T_State>`
  display: none;
  cursor: pointer;
  color: #8F8F8F;
  align-items: center;
  gap: 9px;
  padding: 12px 19px 12px 12px;
  font-size: 14px;
  border-radius: 30px;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);

  ${props => props.showButton && css`
    display: flex;
  `}
`