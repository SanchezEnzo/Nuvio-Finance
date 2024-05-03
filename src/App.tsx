import { Button } from '@/components/ui/button'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport
} from '@/components/ui/navigation-menu'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { Input } from './components/ui/input'

function App() {
	return (
		<div className='flex items-center h-screen'>
			<div className='flex items-center relative ml-5'>
				<Card className='h-[90vh] top-0 left-0 w-24'></Card>
			</div>
			<div className=' w-full  flex justify-center items-center'>
				<div>
					<Card className='w-[600px] h-[250px] flex flex-col items-center justify-center gap-10'>
						<div className='flex justify-around gap-20'>
							<div>
								<Select>
									<SelectTrigger className='w-[180px] rounded-[8px]'>
										<SelectValue placeholder='USDC' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='bitcoin'>Bitcoin</SelectItem>
										<SelectItem value='ethereum'>Ethereum</SelectItem>
										<SelectItem value='bnb'>BNB</SelectItem>
										<SelectItem value='usdc'>USDC</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div>
								<Input placeholder='0.0' className='text-end rounded-[8px]' />
							</div>
						</div>
						<div className='flex justify-around gap-20'>
							<div>
								<Select>
									<SelectTrigger className='w-[180px] rounded-[8px]'>
										<SelectValue placeholder='Bitcoin' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='bitcoin'>Bitcoin</SelectItem>
										<SelectItem value='ethereum'>Ethereum</SelectItem>
										<SelectItem value='bnb'>BNB</SelectItem>
										<SelectItem value='usdc'>USDC</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div>
								<Input placeholder='0.0' className='text-end rounded-[8px]' />
							</div>
						</div>
					</Card>
					<div className='mt-6'>
						<Card>
							<div className='flex justify-center py-5'>
								<Button className='px-10 rounded-[8px]'>Swap</Button>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
