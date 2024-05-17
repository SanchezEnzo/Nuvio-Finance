import { createContext, useState } from 'react'

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
	getCryptoPrices: () => Promise<void>
	loadingCryptoPrices: boolean
}

const inicialCryptoPricesValue: CryptoPricesContextType = {
	cryptoPrices: {
		data: [],
		info: { coins_num: '', time: 0 }
	},
	getCryptoPrices: async () => {},
	loadingCryptoPrices: false
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
	const [loadingCryptoPrices, setLoadingCryptoPrices] = useState(false)

	interface JSONResponse {
		data?: Coins
		errors?: Array<{ message: string }>
	}

	const fetchingCryptoPrices = async (): Promise<JSONResponse> => {
		const response = await fetch(url)
		const data: Coins = await response.json()
		return { data }
	}

	const getCryptoPrices = async (): Promise<void> => {
		try {
			setLoadingCryptoPrices(true)
			const response: JSONResponse = await fetchingCryptoPrices()
			if (response.data !== null && response.data !== undefined) {
				setCryptoPrices(response.data)
			} else if (response.errors !== null && response.errors !== undefined) {
				// Manejar el caso de errores, si es necesario
				console.error(
					'Error fetching crypto prices:',
					response.errors[0].message
				)
			}
		} catch (error) {
			console.error('Error fetching crypto prices:', error)
			// return { errors: [{ message: 'Error fetching crypto prices' }] } // Manejo de errores
		} finally {
			setLoadingCryptoPrices(false)
		}
	}

	return (
		<CryptoPricesContext.Provider
			value={{ cryptoPrices, getCryptoPrices, loadingCryptoPrices }}
		>
			{children}
		</CryptoPricesContext.Provider>
	)
}
