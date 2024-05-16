import { useLoading } from '@/hooks/useLoading'
import { createContext, useState } from 'react'

interface Roi {
	times: number
	currency: string
	percentage: number
}

// export interface Coin {
// 	id: string
// 	symbol: string
// 	name: string
// 	image: string
// 	current_price: number
// 	market_cap: number
// 	market_cap_rank: number
// 	fully_diluted_valuation: number
// 	total_volume: number
// 	high_24h: number
// 	low_24h: number
// 	price_change_24h: number
// 	price_change_percentage_24h: number
// 	market_cap_change_24h: number
// 	market_cap_change_percentage_24h: number
// 	circulating_supply: number
// 	total_supply: number
// 	max_supply: number
// 	ath: number
// 	ath_change_percentage: number
// 	ath_date: string
// 	atl: number
// 	atl_change_percentage: number
// 	atl_date: number
// 	roi: null | Roi
// 	last_updated: string
// }

export interface Coin {
	id: string
	symbol: string
	name: string
	nameid: string
	rank: number
	price_usd: string
	percent_change_24h: string
	percent_change_1h: string
	percent_change_7d: string
	price_btc: string
	market_cap_usd: string
	volume24: number
	volume24a: number
	csupply: string
	tsupply: string
	msupply: string
}

interface Info {
	coins_num: string
	time: number
}

export interface Coins {
	data: Coin[]
	info: Info
}

export interface CryptoPricesContextType {
	cryptoPrices: Coins
	getCryptoPrices: () => void
}

const inicialCryptoPricesValue: CryptoPricesContextType = {
	cryptoPrices: {
		data: [],
		info: { coins_num: '', time: 0 }
	},
	getCryptoPrices: () => {}
}

const url = 'https://api.coinlore.net/api/tickers/'

export const CryptoPricesContext = createContext<CryptoPricesContextType>(
	inicialCryptoPricesValue
)

export function CryptoPricesProvider({
	children
}: {
	children: React.ReactNode
}): JSX.Element {
	const [cryptoPrices, setCryptoPrices] = useState<Coins>()
	const { updateLoading } = useLoading()

	interface JSONResponse {
		data?: Coins
		errors?: Array<{ message: string }>
	}

	const fetchingCryptoPrices = async (): Promise<JSONResponse> => {
		try {
			const response = await fetch(url)
			const data: Coins = await response.json()
			return { data }
		} catch (error) {
			console.error('Error fetching crypto prices:', error)
			return { errors: [{ message: 'Error fetching crypto prices' }] } // Manejo de errores
		}
	}

	const getCryptoPrices = async (): Promise<void> => {
		const response: JSONResponse = await fetchingCryptoPrices()

		if (response.data !== null && response.data !== undefined) {
			updateLoading(true)
			setCryptoPrices(response.data)
			updateLoading(false)
		} else if (response.errors !== null && response.errors !== undefined) {
			// Manejar el caso de errores, si es necesario
			console.error('Error fetching crypto prices:', response.errors[0].message)
		}
	}

	return (
		<CryptoPricesContext.Provider value={{ cryptoPrices, getCryptoPrices }}>
			{children}
		</CryptoPricesContext.Provider>
	)
}
