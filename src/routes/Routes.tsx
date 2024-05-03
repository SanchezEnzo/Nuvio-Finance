import { Bridge } from '@/pages/Bridge'
import { Pools } from '@/pages/Pools'
import Swap from '@/pages/Swap'
import { Wallet } from '@/pages/Wallet'
import { useRoutes } from 'react-router-dom'

export function Routes(): React.ReactNode | null {
	const routes = useRoutes([
		{
			path: '/',
			element: <Swap />
		},
		{
			path: '/swap',
			element: <Swap />
		},
		{
			path: '/pools',
			element: <Pools />
		},
		{
			path: '/bridge',
			element: <Bridge />
		},
		{
			path: '/wallet',
			element: <Wallet />
		}
	])
	return routes
}
