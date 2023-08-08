import Skeleton from '@mui/material/Skeleton'
import { useEffect, useState } from 'react'
import { UseQueryResult, useQuery } from 'react-query'
import ProdService from '../../services/products/products'
import ScrollToTopButton from '../UI/button/Scroll-to-top-button/ScrollToTopButton'
import MainButton from '../UI/button/main-button/MainButton'
import Loader from '../UI/loader/Loader'
import ErrorPage from './error-page/ErrorPage'
import ProductCartSwitcher from './product-cart-switcher/ProductCartSwitcher'
import ProductCart from './product-cart/ProductCart'
import { T_Product } from './product.types'
import {
	ErrorMessage,
	ProductListContainer,
	ProductListItems,
	ScrollToTopButtonContainer,
	UploadBlock
} from './styles'

const ProductList = () => {
	useEffect(() => {
		const savedCartState = localStorage.getItem('cartState')
		if (savedCartState !== null) {
			setCartState(savedCartState === 'true')
		}
	}, [])

	const [cartState, setCartState] = useState<boolean>(true)

	useEffect(() => {
		localStorage.setItem('cartState', String(cartState))
	}, [cartState])

	const toggleCartState = (param: string) => {
		switch (param) {
			case 'first':
				setCartState(true)
				break
			case 'second':
				setCartState(false)
				break
			default:
				break
		}
	}

	const [page, setPage] = useState<number>(2)
	const [products, setProducts] = useState<T_Product[]>([])
	const { data, isLoading, isError }: UseQueryResult<T_Product[]> = useQuery(
		['products', page],
		() => ProdService.getProducts(page),
		{
			refetchOnWindowFocus: false
		}
	)

	const handleLoadMore = () => {
		setPage(
			(prevPage) =>
				prevPage -
				Math.ceil(products.length / 10) +
				Math.ceil(products.length / 10) +
				2
		)
	}

	useEffect(() => {
		if (data) setProducts((prevProducts) => [...prevProducts, ...data])
	}, [data])

	if (page < 3 && data !== undefined && data.length === 0) return <ErrorPage />

	return (
		<ProductListContainer>
			{!isLoading ? (
				<ProductCartSwitcher
					cartState={cartState}
					toggleCartState={toggleCartState}
				/>
			) : (
				<Skeleton
					variant='rectangular'
					sx={{ bgcolor: '#EAEAEA', borderRadius: '8px' }}
					width={84}
					height={39}
				/>
			)}
			<ProductListItems state={cartState}>
				{products.map((product: T_Product, index) => (
					<ProductCart key={index} item={product} state={cartState} />
				))}
				{products.length ? (
					<ScrollToTopButtonContainer>
						<ScrollToTopButton />
					</ScrollToTopButtonContainer>
				) : null}
				{!products.length ? (
					isLoading ? (
						<>
							{Array.from({ length: 12 }).map((_, i) => (
								<ProductCart key={i} isLoading={isLoading} state={cartState} />
							))}
						</>
					) : null
				) : null}
			</ProductListItems>
			<UploadBlock>
				{data !== undefined && data.length === 0 ? (
					<ErrorMessage>Ошибка при загрузке</ErrorMessage>
				) : null}
				{!isLoading ? (
					<>
						<MainButton onClick={handleLoadMore}>{data !== undefined && data.length === 0 ? 'Повторить попытку' : 'Показать ещё'}</MainButton>
					</>
				) : products.length < 20 ? (
					<Skeleton
						variant='rectangular'
						sx={{ bgcolor: '#EAEAEA', borderRadius: '45px' }}
						width={125}
						height={32}
					/>
				) : (
					<Loader />
				)}
			</UploadBlock>
		</ProductListContainer>
	)
}

export default ProductList
