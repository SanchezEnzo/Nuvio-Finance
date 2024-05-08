import { useMediaQuery } from '@/hooks/useMediaQuery'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from './shadcn/dialog'
import { useState } from 'react'
import { Button } from './shadcn/button'
import { Card } from './shadcn/card'
import { Metamask } from '@/assets/crypto/metamask'
import { TrustWallet } from '@/assets/crypto/trust'
import { Coinbase } from '@/assets/crypto/coinbase'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from './shadcn/drawer'

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

export function ConectWallet() {
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
