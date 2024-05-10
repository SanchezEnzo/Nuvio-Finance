import { NuvioLogoWhite } from '@/assets/NuvioLogoWhite'
import { Button } from '@/components/shadcn/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/shadcn/card'
import { Input } from '@/components/shadcn/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function TabsDemo(): React.ReactNode {
	return (
		<Tabs defaultValue='stake' className='w-[600px] '>
			<TabsList className='grid w-full grid-cols-2 h-12'>
				<TabsTrigger value='stake' className='text-2xl'>
					Stake
				</TabsTrigger>
				<TabsTrigger value='unstake' className='text-2xl'>
					Unstake
				</TabsTrigger>
			</TabsList>
			<TabsContent value='stake'>
				<Card className='mt-4'>
					<CardContent className='h-[150px] flex items-start justify-around mt-8'>
						<Card className='font-medium rounded-sm w-[200px] py-3 pl-4 flex items-center gap-2 '>
							<NuvioLogoWhite height={32} width={32} />
							NUVIO
						</Card>
						<div className='flex flex-col items-start gap-2'>
							<Input
								className='w-[200px] py-7 text-lg text-end'
								placeholder='0.0'
							></Input>
							<p className='text-sm'>In wallet: 0.00</p>
						</div>
					</CardContent>
					<CardFooter>
						<Button>Stake Nuvio</Button>
					</CardFooter>
				</Card>
			</TabsContent>
			<TabsContent
				value='unstake'
				className='w-full flex justify-center items-center'
			>
				<Card className='flex justify-center w-full items-center'>
					<CardFooter className='flex justify-center items-center w-full'>
						<Button>Save password</Button>
					</CardFooter>
				</Card>
			</TabsContent>
		</Tabs>
	)
}

export function Stake(): React.ReactNode {
	return <TabsDemo />
}
