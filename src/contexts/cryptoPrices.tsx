import { createContext, useEffect, useState } from 'react'

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
	cryptoPrices: Coins | null
	loadingCryptoPrices: boolean
}

const inicialCryptoPricesValue: CryptoPricesContextType = {
	cryptoPrices: null,
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
	const [cryptoPrices, setCryptoPrices] = useState<Coins | null>(null)
	const [loadingCryptoPrices, setLoadingCryptoPrices] = useState(false)

	const fetchingCryptoPrices = async (): Promise<Coins> => {
		try {
			const response = await fetch(url)
			if (!response.ok) {
				throw new Error('Error fetching data')
			}
			const data: Coins = await response.json()
			return data
		} catch (error) {
			console.error('Error fetching crypto prices:', error)
			throw error
		}
	}

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
		const fetchData = async () => {
			try {
				setLoadingCryptoPrices(true)
				const data = await fetchingCryptoPrices()
				setCryptoPrices(data)
			} catch (error) {
				console.error('Error fetching crypto prices:', error)
			} finally {
				setLoadingCryptoPrices(false)
			}
		}

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		fetchData()
	}, [])

	return (
		<CryptoPricesContext.Provider value={{ cryptoPrices, loadingCryptoPrices }}>
			{children}
		</CryptoPricesContext.Provider>
	)
}
