import axios from 'axios'
import { T_Product } from '../../components/product-list/product.types'

export default class ProdService {
	static async getProducts(pageCount: number): Promise<T_Product[]> {
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000))
			const responseOne = await axios.get(
				`https://testguru.ru/frontend-test/api/v1/items?page=${pageCount - 1}`
			)
			const responseTwo = await axios.get(
				`https://testguru.ru/frontend-test/api/v1/items?page=${pageCount}`
			)
			const items: T_Product[] = [
				...responseOne.data.items,
				...responseTwo.data.items
			]

			return items
		} catch (error: unknown) {
			return []
		}
	}
}
