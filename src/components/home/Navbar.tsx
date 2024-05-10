import { ArrowsSwapIcon } from '@/assets/ArrowsSwapIcon'
import { NuvioLogoWhite } from '@/assets/NuvioLogoWhite'

import { Link } from 'react-router-dom'
import { PoolsIcon } from '@/assets/PoolsIcon'
import { BridgeIcon } from '@/assets/BridgeIcon'
import { StakeIcon } from '@/assets/StakeIcon'
import { Card } from '@/components/shadcn/card'
import { Button } from '@/components/shadcn/button'
import { MarketIcon } from '@/assets/MarketIcon'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/components/ui/tooltip'

export function Navbar(): React.ReactNode {
	return (
		<div className='flex items-center relative h-full  ml-5'>
			<Card className='h-[90vh] w-24 flex flex-col items-center  gap-[20vh] rounded-sm'>
				<Link to='/' className='bg-none mt-5'>
					<NuvioLogoWhite height={40} width={40} />
				</Link>
				<div className='flex flex-col items-center gap-[5vh]'>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<Button className='bg-transparent ' variant='ghost'>
									<Link to='/swap'>
										<ArrowsSwapIcon />
									</Link>
								</Button>
							</TooltipTrigger>
							<TooltipContent side='right'>Swap</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<Button className='bg-transparent ' variant='ghost'>
									<Link to='/pools'>
										<PoolsIcon />
									</Link>
								</Button>
							</TooltipTrigger>
							<TooltipContent side='right'>Pools</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<Button className='bg-transparent ' variant='ghost'>
									<Link to='/market'>
										<MarketIcon />
									</Link>
								</Button>
							</TooltipTrigger>
							<TooltipContent side='right'>Market</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					{/* <TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<Button className='bg-transparent ' variant='ghost'>
									<Link to='bridge'>
										<BridgeIcon />
									</Link>
								</Button>
							</TooltipTrigger>
							<TooltipContent side='right'>Bridge</TooltipContent>
						</Tooltip>
					</TooltipProvider> */}
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<Button className='bg-transparent ' variant='ghost'>
									<Link to='stake'>
										<StakeIcon />
									</Link>
								</Button>
							</TooltipTrigger>
							<TooltipContent side='right'>Stake</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
			</Card>
		</div>
	)
}
