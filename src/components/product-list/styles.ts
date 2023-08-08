import styled from 'styled-components'

type T_State = {
	state: boolean
}

export const ProductListContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 26px;
	align-items: end;
	padding: 35px;
`

export const ProductListItems = styled.div<T_State>`
	padding: 0 121px;
	display: grid;
	gap: 24px;
	grid-template-columns: ${(props) =>
		props.state ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)'};
`

export const UploadBlock = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 10px;
	width: 100%;
	align-items: center;
`
export const ErrorMessage = styled.div`
	font-size: 14.4px;
	color: #8f8f8f;
	text-align: center;
	margin-top: 10px;
`

export const ScrollToTopButtonContainer = styled.div`
	position: fixed;
	bottom: 40px;
	right: 40px;
`
