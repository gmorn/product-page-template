import styled, { css } from 'styled-components'

type T_Active = {
	active: boolean
}

export const SliderContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
`

export const Slide = styled.div<T_Active>`
	width: 100%;
	height: 100%;
	position: absolute;
	transition: opacity ease-in-out 0.4s;
	opacity: 0;
	z-index: 1;
	cursor: pointer;

	${(props) =>
		props.active &&
		css`
			opacity: 1;
		`}

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export const Indicator = styled.div`
	z-index: 2;
	cursor: pointer;
	position: absolute;
	bottom: 9px;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	width: 56px;
	justify-content: space-between;
`

export const PointBLock = styled.div<T_Active>`
	background: #c7c7c7;
	border-radius: 50%;
	height: 8px;
	width: 8px;

	${(props) =>
		props.active &&
		css`
			background: #00a0ab;
		`}
`

export const ButtonBlock = styled.div<T_Active>`
	z-index: 2;
	position: absolute;
	bottom: 35%;
	left: 50%;
	transform: translate(-50%, -40%);
	width: 95%;
	display: flex;
	justify-content: space-between;
	opacity: 0;
	cursor: pointer;

	${(props) =>
		props.active &&
		css`
			opacity: 1;
		`}
`

export const Arrow = styled.div`
	cursor: pointer;
`
