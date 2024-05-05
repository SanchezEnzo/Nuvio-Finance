/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Btc } from '../assets/crypto/btc'
import { Eth } from '../assets/crypto/eth'
import { Bnb } from '../assets/crypto/bnb'
import { Algoland } from '../assets/crypto/algorand'
import { Doge } from '../assets/crypto/doge'
import { Solana } from '../assets/crypto/sol'
import { Xrp } from '../assets/crypto/xrp'
import { Matic } from '../assets/crypto/matic'
import Tether from '../assets/crypto/tether'

import { Button } from '../components/shadcn/button'

import { Card } from '../components/shadcn/card'
import { Input } from '../components/shadcn/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/shadcn/select'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/shadcn/popover'
import { Label } from '../components/ui/label'
import { ArrowsSwapIcon } from '@/assets/ArrowsSwapIcon'
import { NuvioLogoWhite } from '@/assets/NuvioLogoWhite'

import { Link } from 'react-router-dom'
import { PoolsIcon } from '@/assets/PoolsIcon'
import { BridgeIcon } from '@/assets/BridgeIcon'
import { StakeIcon } from '@/assets/StakeIcon'

import { cn } from '@/lib/utils'
import { useMediaQuery } from '../hooks/useMediaQuery'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/shadcn/dialog'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from '@/components/shadcn/drawer'
import { useState } from 'react'
import { Metamask } from '@/assets/crypto/metamask'
import { Coinbase } from '@/assets/crypto/coinbase'
import { TrustWallet } from '@/assets/crypto/trust'
import { MarketIcon } from '@/assets/MarketIcon'

interface Coin {
	name: string
	label: string
	element: JSX.Element
}

const coins: Coin[] = [
	{
		name: 'usdt',
		label: 'USDT',
		element: <Tether />
	},
	// {
	// 	name: 'usdc',
	// 	label: 'USDC',
	// 	element: <USDC />
	// },
	{
		name: 'bitcoin',
		label: 'Bitcoin',
		element: <Btc />
	},
	{
		name: 'ethereum',
		label: 'Ethereum',
		element: <Eth />
	},
	{
		name: 'bnb',
		label: 'BNB',
		element: <Bnb />
	},
	{
		name: 'solana',
		label: 'Solana',
		element: <Solana />
	},
	{
		name: 'xrp',
		label: 'XRP',
		element: <Xrp />
	},
	{
		name: 'doge',
		label: 'Doge',
		element: <Doge />
	},
	{
		name: 'algoland',
		label: 'Algoland',
		element: <Algoland />
	},
	{
		name: 'matic',
		label: 'Matic',
		element: <Matic />
	}
]

function DrawerDialogDemo() {
	const [open, setOpen] = useState(false)
	const isDesktop = useMediaQuery('(min-width: 768px)')

	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button variant='outline' className=''>
						Conect wallet
					</Button>
				</DialogTrigger>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Conect wallet</DialogTitle>
						<DialogDescription>
							Connect your wallet to access all features.
							<div className='mt-4 flex flex-col gap-3'>
								<Card>
									<Button variant='outline' className='h-full w-full'>
										<div className='flex items-center justify-between w-full mx-2'>
											<span>Metamask</span>
											<Metamask />
										</div>
									</Button>
								</Card>
								<Card>
									<Button variant='outline' className='h-full w-full'>
										<div className='flex items-center justify-between w-full mx-2'>
											<span>Coinbase</span>
											<Coinbase />
										</div>
									</Button>
								</Card>
								<Card>
									<Button variant='outline' className='h-full w-full'>
										<div className='flex items-center justify-between w-full mx-2'>
											<span>Trust</span>
											<TrustWallet />
										</div>
									</Button>
								</Card>
							</div>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		)
	}

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<Button variant='outline'>Conect wallet</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className='text-left'>
					<DrawerTitle>Conect wallet</DrawerTitle>
					<DrawerDescription>
						Connect your wallet to access all features.
						<div className='mt-4 flex flex-col gap-3'>
							<Card>
								<Button variant='outline' className='h-full w-full'>
									<div className='flex items-center justify-between w-full mx-2'>
										<span>Metamask</span>
										<Metamask />
									</div>
								</Button>
							</Card>
							<Card>
								<Button variant='outline' className='h-full w-full'>
									<div className='flex items-center justify-between w-full mx-2'>
										<span>Coinbase</span>
										<Coinbase />
									</div>
								</Button>
							</Card>
							<Card>
								<Button variant='outline' className='h-full w-full'>
									<div className='flex items-center justify-between w-full mx-2'>
										<span>Trust</span>
										<TrustWallet />
									</div>
								</Button>
							</Card>
						</div>
					</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter className='pt-2'>
					<DrawerClose asChild>
						<Button variant='outline'>Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}

function ProfileForm({ className }: React.ComponentProps<'form'>) {
	return (
		<form className={cn('grid items-start gap-4', className)}>
			<div className='grid gap-2'>
				<Label htmlFor='email'>Email</Label>
				<Input type='email' id='email' defaultValue='shadcn@example.com' />
			</div>
			<div className='grid gap-2'>
				<Label htmlFor='username'>Username</Label>
				<Input id='username' defaultValue='@shadcn' />
			</div>
			<Button type='submit'>Save changes</Button>
		</form>
	)
}

function Swap() {
	return (
		<div className='flex items-center h-screen'>
			<div className='flex items-center relative ml-5'>
				<Card className='h-[90vh] top-0 left-0 w-24 flex flex-col items-center gap-[20vh] rounded-sm'>
					<Link to='/' className='bg-none mt-5'>
						<NuvioLogoWhite />
					</Link>
					<div className='flex flex-col items-center gap-[5vh]'>
						<Button className='bg-transparent ' variant='ghost'>
							<Link to='/swap'>
								<ArrowsSwapIcon />
							</Link>
						</Button>
						<Button className='bg-transparent ' variant='ghost'>
							<Link to='/pools'>
								<PoolsIcon />
							</Link>
						</Button>

						<Button className='bg-transparent ' variant='ghost'>
							<Link to='/market'>
								<MarketIcon />
							</Link>
						</Button>
						<Button className='bg-transparent ' variant='ghost'>
							<Link to='bridge'>
								<BridgeIcon />
							</Link>
						</Button>
						<Button className='bg-transparent ' variant='ghost'>
							<Link to='stake'>
								<StakeIcon />
							</Link>
						</Button>
					</div>
				</Card>
			</div>
			<div className='fixed top-8 right-5'>
				<DrawerDialogDemo />
			</div>
			<div className=' w-full  flex justify-center items-center'>
				<div>
					<div className='flex items-center mb-5 justify-between'>
						<h2 className='font-semibold text-2xl'>Swap</h2>
						{/* Slippage */}
						<Popover>
							<PopoverTrigger asChild>
								<Button variant='outline' className=''>
									Slippage
								</Button>
							</PopoverTrigger>
							<PopoverContent className='w-80' align='end'>
								<div className='grid gap-4'>
									<div className='space-y-2'>
										<h4 className='font-medium leading-none'>Settings</h4>
										<p className='text-sm text-muted-foreground'>
											Set the slippage tolerance for this transaction.
										</p>
									</div>
									<div className='grid gap-2'>
										<div className='grid grid-rows-3 items-center gap-4'>
											<Label htmlFor='maxWidth'>Slippage Tolerance</Label>
											<Input
												id='maxWidth'
												defaultValue='300px'
												className='col-span-2 h-8'
											/>
										</div>
										<div className='grid grid-rows-3 items-center gap-4'>
											<Label htmlFor='height'>Height</Label>
											<Input
												id='height'
												defaultValue='25px'
												className='col-span-2 h-8'
											/>
										</div>
									</div>
								</div>
							</PopoverContent>
						</Popover>
					</div>
					<Card className='w-[600px] h-[250px] flex flex-col items-center justify-center gap-10 rounded-sm'>
						<div className='flex justify-around gap-20'>
							<div>
								<Select>
									<SelectTrigger className='w-[230px]  py-7 '>
										<SelectValue
											placeholder={
												<div className='flex items-center gap-2'>
													<Tether />
													<p>USDT</p>
												</div>
											}
										/>
									</SelectTrigger>
									<SelectContent side='right' align='center'>
										{coins.map(coin => (
											<SelectItem key={coin.name} value={coin.name}>
												<div className='flex items-center gap-2'>
													{coin.element}
													<p>{coin.label}</p>
												</div>
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div>
								<Input placeholder='0.0' className='text-end  py-7' />
							</div>
						</div>
						<div className='flex justify-around gap-20'>
							<div>
								<Select>
									<SelectTrigger className='w-[230px]  py-7'>
										<SelectValue
											placeholder={
												<div className='flex items-center gap-2'>
													<Btc />
													<p>Bitcoin</p>
												</div>
											}
										/>
									</SelectTrigger>
									<SelectContent side='right' align='center'>
										{coins.map(coin => (
											<SelectItem key={coin.name} value={coin.name}>
												<div className='flex items-center gap-2'>
													{coin.element}
													<p>{coin.label}</p>
												</div>
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div>
								<Input placeholder='0.0' className='text-end  py-7' />
							</div>
						</div>
					</Card>
					<div className='mt-6'>
						<Card className='rounded-sm'>
							<div className='flex justify-center py-5'>
								<Button className='px-10 '>Swap</Button>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Swap
