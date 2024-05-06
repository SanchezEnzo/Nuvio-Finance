import { ArrowsSwapIcon } from '@/assets/ArrowsSwapIcon'
import { NuvioLogoWhite } from '@/assets/NuvioLogoWhite'

import { Link } from 'react-router-dom'
import { PoolsIcon } from '@/assets/PoolsIcon'
import { BridgeIcon } from '@/assets/BridgeIcon'
import { StakeIcon } from '@/assets/StakeIcon'
import { Card } from '@/components/shadcn/card'
import { Button } from '@/components/shadcn/button'
import { MarketIcon } from '@/assets/MarketIcon'

export function Navbar(): React.ReactNode {
	return (
		<div className='flex items-center relative top-0 ml-5'>
			<Card className='h-[90vh] w-24 flex flex-col items-center fixed gap-[20vh] rounded-sm'>
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
	)
}
