import {
	CryptoPricesContext,
	type CryptoPricesContextType
} from '@/contexts/cryptoPrices'
import { useContext } from 'react'

export function useCryptoPrices(): CryptoPricesContextType {
	const context = useContext(CryptoPricesContext)

	if (context === null || context === undefined)
		throw new Error(
			'CryptoPricesContext have to be within CryptoPricesProvider'
		)

	return context
}
