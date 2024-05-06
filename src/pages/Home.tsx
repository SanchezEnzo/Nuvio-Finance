import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'

export function Home(): React.ReactNode {
	return (
		<div className='flex w-full items-center h-full'>
			<aside className='relative h-full flex items-center w-[116px]'>
				<Navbar />
			</aside>
			<section className='flex justify-center w-full'>
				<Outlet />
			</section>
		</div>
	)
}
