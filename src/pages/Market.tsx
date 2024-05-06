import { Bnb } from '@/assets/crypto/bnb'
import { Btc } from '@/assets/crypto/btc'
import { Doge } from '@/assets/crypto/doge'
import { Eth } from '@/assets/crypto/eth'
import { Matic } from '@/assets/crypto/matic'
import { Solana } from '@/assets/crypto/sol'
import { Ton } from '@/assets/crypto/ton'
import { Xrp } from '@/assets/crypto/xrp'
import { useCryptoPrices } from '@/hooks/useCryptoPrices'
import { useEffect } from 'react'
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/shadcn/table'

function TableCoins(): React.ReactNode {
	const { cryptoPrices, getCryptoPrices } = useCryptoPrices()

	useEffect(() => {
		getCryptoPrices()
	}, [])

	return (
		<Table className='text-right w-[70%]'>
			<TableCaption>A list of crypto</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className='w-[100px]'>Token name</TableHead>
					<TableHead className='w-[100px] text-right'>Market cap</TableHead>
					<TableHead className='w-[100px] text-right'>24h %</TableHead>
					<TableHead className='w-[100px] text-right'>7D %</TableHead>
					<TableHead className='w-[100px] text-right'>Price</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{cryptoPrices?.data
					.filter(
						coin =>
							coin.symbol === 'BTC' ||
							coin.symbol === 'ETH' ||
							coin.symbol === 'BNB' ||
							coin.symbol === 'SOL' ||
							coin.symbol === 'XRP' ||
							coin.symbol === 'DOGE' ||
							coin.symbol === 'TON' ||
							coin.symbol === 'MATIC'
					)
					.map(coin => (
						<TableRow key={coin.id}>
							<TableCell className='font-medium flex items-center gap-2'>
								{coin.symbol === 'BTC' && <Btc />}
								{coin.symbol === 'ETH' && <Eth />}
								{coin.symbol === 'BNB' && <Bnb />}
								{coin.symbol === 'SOL' && <Solana />}
								{coin.symbol === 'XRP' && <Xrp />}
								{coin.symbol === 'DOGE' && <Doge />}
								{coin.symbol === 'TON' && <Ton />}
								{coin.symbol === 'MATIC' && <Matic />}
								{coin.symbol}
							</TableCell>
							<TableCell>
								${(parseInt(coin.market_cap_usd) / 1000000).toFixed(0)} M
							</TableCell>
							<TableCell>{coin.percent_change_24h}%</TableCell>
							<TableCell>{coin.percent_change_7d}%</TableCell>
							<TableCell>${coin.price_usd}</TableCell>
						</TableRow>
					))}
			</TableBody>
		</Table>
	)
}

export function Market(): React.ReactNode {
	return (
		<section className='w-full h-full flex items-center justify-center'>
			<TableCoins />
		</section>
	)
}
