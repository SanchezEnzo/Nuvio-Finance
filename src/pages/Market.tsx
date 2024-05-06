import { CryptoPricesContext } from '@/contexts/cryptoPrices'
import { useContext } from 'react'

export function Market(): React.ReactNode {
	const context = useContext(CryptoPricesContext)

	const { cryptoPrices, getCryptoPrices } = context

	console.log(cryptoPrices)

	return null
}
