import { CryptoPricesContext } from '@/contexts/cryptoPrices'
import { useContext } from 'react'

export function useCryptoPrices() {
	const context = useContext(CryptoPricesContext)

	if (context === null || context === undefined)
		throw new Error(
			'CryptoPricesContext have to be within CryptoPricesProvider'
		)

	return context
}
