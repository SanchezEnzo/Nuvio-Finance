import React, { createContext, useState, useEffect } from 'react'

interface Roi {
	times: number
	currency: string
	percentage: number
}

interface Coin {
	id: string
	symbol: string
	name: string
	image: string
	current_price: number
	market_cap: number
	market_cap_rank: number
	fully_diluted_valuation: number
	total_volume: number
	high_24h: number
	low_24h: number
	price_change_24h: number
	price_change_percentage_24h: number
	market_cap_change_24h: number
	market_cap_change_percentage_24h: number
	circulating_supply: number
	total_supply: number
	max_supply: number
	ath: number
	ath_change_percentage: number
	ath_date: string
	atl: number
	atl_change_percentage: number
	atl_date: number
	roi: null | Roi
	last_updated: string
}

type CryptoPrices = Coin[]

interface CryptoPricesContextType {
	cryptoPrices: CryptoPrices
	getCryptoPrices: () => void
}

const url =
	'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

export const CryptoPricesContext = createContext<CryptoPrices | null>(null)

export function CryptoPricesProvider({
	children
}: {
	children: React.ReactNode
}): JSX.Element {
	const [cryptoPrices, setCryptoPrices] = useState()

	const fetchingCryptoPrices = async (): Promise<CryptoPrices | undefined> => {
		try {
			const response = await fetch(url)
			const data = await response.json()
			return data
		} catch (error) {
			console.error('Error fetching crypto prices:', error)
		}
		return undefined // Add a return statement at the end of the function
	}

	const getCryptoPrices = async () => {
		const newData = await fetchingCryptoPrices()
		setCryptoPrices(newData)
	}

	return (
		<CryptoPricesContext.Provider value={{ cryptoPrices, getCryptoPrices }}>
			{children}
		</CryptoPricesContext.Provider>
	)
}
