import { USDC } from '@/assets/crypto/usdc'
import { Arb } from '@/assets/crypto/arb'
import { Atom } from '@/assets/crypto/atom'
import { Cro } from '@/assets/crypto/cro'
import { Dot } from '@/assets/crypto/dot'
import { Inj } from '@/assets/crypto/inj'
import { Avax } from '@/assets/crypto/Avax'
import { Ton } from '@/assets/crypto/ton'
import Tether from '@/assets/crypto/tether'
import { Btc } from '@/assets/crypto/btc'
import { Eth } from '@/assets/crypto/eth'
import { Solana } from '@/assets/crypto/sol'
import { Bnb } from '@/assets/crypto/bnb'
import { Xrp } from '@/assets/crypto/xrp'
import { Doge } from '@/assets/crypto/doge'
import { Algoland } from '@/assets/crypto/algorand'
import { Matic } from '@/assets/crypto/matic'

export interface Coin {
	name: string
	label: string
	element: JSX.Element
}

export const coins: Coin[] = [
	{
		name: 'usdt',
		label: 'USDT',
		element: <Tether />
	},
	{
		name: 'usdc',
		label: 'USDC',
		element: <USDC />
	},
	{
		name: 'bitcoin',
		label: 'BTC',
		element: <Btc />
	},
	{
		name: 'ethereum',
		label: 'ETH',
		element: <Eth />
	},
	{
		name: 'bnb',
		label: 'BNB',
		element: <Bnb />
	},
	{
		name: 'solana',
		label: 'SOL',
		element: <Solana />
	},
	{
		name: 'xrp',
		label: 'XRP',
		element: <Xrp />
	},
	{
		name: 'doge',
		label: 'DOGE',
		element: <Doge />
	},
	{
		name: 'toncoin',
		label: 'TON',
		element: <Ton />
	},
	{
		name: 'algoland',
		label: 'ALGO',
		element: <Algoland />
	},
	{
		name: 'matic',
		label: 'MATIC',
		element: <Matic />
	},
	{
		name: 'arb',
		label: 'ARB',
		element: <Arb />
	},
	{
		name: 'atom',
		label: 'ATOM',
		element: <Atom />
	},
	{
		name: 'avax',
		label: 'AVAX',
		element: <Avax />
	},
	{
		name: 'cro',
		label: 'CRO',
		element: <Cro />
	},
	{
		name: 'dot',
		label: 'DOT',
		element: <Dot />
	},

	{
		name: 'injective',
		label: 'INJ',
		element: <Inj />
	}
]
