import { ErrorPageContainer } from './styles'

type Props = {}

export default function ErrorPage({}: Props) {
	return (
		<ErrorPageContainer>
			<h1>ОБЪЯВЛЕНИЙ НЕ НАЙДЕНО</h1>
			<h2>
				Простите, по вашему запросу товаров сейчас нет. Задайте запрос
				по-другому или измените характеристики
			</h2>
		</ErrorPageContainer>
	)
}
