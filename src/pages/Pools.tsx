import { Btc } from '@/assets/crypto/btc'

import Tether from '@/assets/crypto/tether'

import { Button } from '@/components/shadcn/button'
import { Card } from '@/components/shadcn/card'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/shadcn/table'

function Tablepools(): React.ReactNode {
	const pools = [
		{
			name: 'btc-usdt',
			label: 'BTC/USDT',
			element: (
				<div className='flex gap-1'>
					<Btc />
					<Tether />
				</div>
			),
			liquidity: 14534233,
			volume: 23234,
			apr: 10
		},
		{
			name: 'btc-usdt',
			label: 'BTC/USDT',
			element: (
				<div className='flex gap-1'>
					<Btc />
					<Tether />
				</div>
			),
			liquidity: 14534233,
			volume: 23234,
			apr: 10
		},
		{
			name: 'btc-usdt',
			label: 'BTC/USDT',
			element: (
				<div className='flex gap-1'>
					<Btc />
					<Tether />
				</div>
			),
			liquidity: 14534233,
			volume: 23234,
			apr: 10
		},
		{
			name: 'btc-usdt',
			label: 'BTC/USDT',
			element: (
				<div className='flex gap-1'>
					<Btc />
					<Tether />
				</div>
			),
			liquidity: 14534233,
			volume: 23234,
			apr: 10
		},
		{
			name: 'btc-usdt',
			label: 'BTC/USDT',
			element: (
				<div className='flex gap-1'>
					<Btc />
					<Tether />
				</div>
			),
			liquidity: 14534233,
			volume: 23234,
			apr: 10
		},
		{
			name: 'btc-usdt',
			label: 'BTC/USDT',
			element: (
				<div className='flex gap-1'>
					<Btc />
					<Tether />
				</div>
			),
			liquidity: 14534233,
			volume: 23234,
			apr: 10
		},
		{
			name: 'btc-usdt',
			label: 'BTC/USDT',
			element: (
				<div className='flex gap-1'>
					<Btc />
					<Tether />
				</div>
			),
			liquidity: 14534233,
			volume: 23234,
			apr: 10
		},
		{
			name: 'btc-usdt',
			label: 'BTC/USDT',
			element: (
				<div className='flex gap-1'>
					<Btc />
					<Tether />
				</div>
			),
			liquidity: 14534233,
			volume: 23234,
			apr: 10
		}
	]

	return (
		<Table className='text-right '>
			{/* <TableCaption>A list of crypto </TableCaption> */}
			<TableHeader>
				<TableRow>
					<TableHead className='w-[100px]'>Pool name</TableHead>
					<TableHead className='w-[100px] text-right'>Liquidity</TableHead>
					<TableHead className='w-[100px] text-right'>Volume (24h)</TableHead>
					<TableHead className='w-[100px] text-right'>APR</TableHead>
					<TableHead className='w-[100px] text-right'></TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{pools?.map(pool => (
					<TableRow key={pool.name} className=''>
						<TableCell className='font-medium  my-2 flex items-center gap-2'>
							{pool.element}
							{pool.label}
						</TableCell>
						<TableCell>
							{new Intl.NumberFormat().format(pool.liquidity)} US$
						</TableCell>
						<TableCell>
							{new Intl.NumberFormat().format(pool.volume)} US${' '}
						</TableCell>
						<TableCell>{pool.apr}%</TableCell>
						<TableCell>
							<Button>Add liquidity</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

export function Pools(): React.ReactNode {
	return (
		<div className='flex flex-col items-center mt-28 w-full h-screen justify-start gap-10'>
			<section className='w-[70%]'>
				<h2 className='mb-4 font-semibold text-2xl'>My positions</h2>
				{true && (
					<Card className='h-[100px] flex justify-center items-center bg-transparent'>
						<p>No positions</p>
					</Card>
				)}
			</section>
			<section className='w-[70%]'>
				<h2 className='mb-4 font-semibold text-2xl'>Pools</h2>
				<Tablepools />
			</section>
		</div>
	)
}
