import { coins } from '@/constants/coins'

export function Wallet(): React.ReactNode {
	return (
		<aside className='w-[400px] h-screen fixed top-0 right-0 bg-red-500'>
			<section className='h-1/2'>
				<div className='flex flex-col items-center justify-center h-1/2 gap-4'>
					<small>Porfolio value</small>
					<h3 className='text-2xl'>$1,000,000</h3>
				</div>
				<nav className='w-full h-1/2 '>
					<ul className='flex justify-around  w-full h-full items-center'>
						<li>
							<a href='#'>Send</a>
						</li>
						<li>
							<a href='#'>History</a>
						</li>
						<li>
							<a href='#'>Faucet</a>
						</li>
					</ul>
				</nav>
			</section>
			<hr />
			<section className='mx-2 h-1/2'>
				<h3 className='text-xl mb-2'>Assets</h3>
				<section className='h-full'>
					<ul className='gap-10 h-full'>
						{coins.slice(0, 5).map(coin => (
							<li
								key={coin.name}
								className='flex items-center justify-between w-full'
							>
								<div className='flex gap-2 items-center'>
									{coin.element}
									{coin.label}
								</div>
								<div className='flex flex-col items-end'>
									<small>0.0000001</small>
									<small>$ 1.2</small>
								</div>
							</li>
						))}
					</ul>
				</section>
			</section>
		</aside>
	)
}
