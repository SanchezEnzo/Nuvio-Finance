import { Bridge } from '@/pages/Bridge'
import { Home } from '@/pages/Home'
import { Market } from '@/pages/Market'
import { Pools } from '@/pages/Pools'
import { Stake } from '@/pages/Stake'
import Swap from '@/pages/Swap'
import { useRoutes } from 'react-router-dom'

export function Routes(): React.ReactNode | null {
	const routes = useRoutes([
		{
			path: '/',
			element: <Home />,
			children: [
				{
					path: 'swap',
					element: <Swap />
				},
				{
					path: 'pools',
					element: <Pools />
				},
				{
					path: 'market',
					element: <Market />
				},
				{
					path: 'bridge',
					element: <Bridge />
				},

				{
					path: 'stake',
					element: <Stake />
				}
			]
		}
	])
	return routes
}
