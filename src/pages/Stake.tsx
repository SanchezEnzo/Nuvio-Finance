import { NuvioLogoWhite } from '@/assets/NuvioLogoWhite'
import { Button } from '@/components/shadcn/button'
import { Card, CardContent, CardFooter } from '@/components/shadcn/card'
import { Input } from '@/components/shadcn/input'
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger
} from '@/components/shadcn/tabs'
import { Loading } from '@/components/ui/Loding'

export function TabsDemo(): React.ReactNode {
	return (
		<Tabs defaultValue='stake' className='w-[600px] '>
			<TabsList className='grid w-full grid-cols-2 h-12 '>
				<TabsTrigger value='stake' className='text-2xl'>
					Stake
				</TabsTrigger>
				<TabsTrigger value='unstake' className='text-2xl '>
					Unstake
				</TabsTrigger>
			</TabsList>
			<TabsContent value='stake'>
				<Card className='mt-4'>
					<CardContent className='h-[150px] flex items-start justify-around mt-8'>
						<Card className='font-medium rounded-sm w-[250px] py-3 justify-center flex items-center gap-2 '>
							<NuvioLogoWhite height={24} width={24} />
							NUVIO
						</Card>
						<div className='flex flex-col items-start gap-2'>
							<Input
								className='w-[250px] py-6 text-lg text-end'
								placeholder='0.0'
							></Input>
							<p className='text-sm'>In wallet: 0.00</p>
						</div>
					</CardContent>
					<CardFooter className='flex justify-center'>
						<Button>Stake</Button>
					</CardFooter>
				</Card>
			</TabsContent>
			<TabsContent value='unstake'>
				<Card className='mt-4'>
					<CardContent className='h-[150px] flex items-start justify-around mt-8'>
						<Card className='font-medium rounded-sm w-[250px] py-3 justify-center flex items-center gap-2 '>
							<NuvioLogoWhite height={24} width={24} />
							NUVIO
						</Card>
						<div className='flex flex-col items-start gap-2'>
							<Input
								className='w-[250px] py-6 text-lg text-end'
								placeholder='0.0'
							></Input>
						</div>
					</CardContent>
					<CardFooter className='flex justify-center'>
						<Button>Unstake</Button>
					</CardFooter>
				</Card>
			</TabsContent>
		</Tabs>
	)
}

export function Stake(): React.ReactNode {
	return <TabsDemo />
}
