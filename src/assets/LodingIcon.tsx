import { lineSpinner } from 'ldrs'

lineSpinner.register()

// Default values shown
export function LoadingIcon(): React.ReactNode {
	return (
		<l-line-spinner
			size='40'
			stroke='3'
			speed='1'
			color='white'
		></l-line-spinner>
	)
}
