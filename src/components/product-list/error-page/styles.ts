import { styled } from 'styled-components'

export const ErrorPageContainer = styled.div`
	text-align: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  & h1 {
		color: #00a0ab;
		font-size: 16.8px;
		font-weight: 500;
	}
	& h2 {
		color: #8f8f8f;
    font-size: 14.4px;
    width: 246px;
	}
`
