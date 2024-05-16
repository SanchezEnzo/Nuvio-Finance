import { useState } from 'react'

export function useLoading() {
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const updateLoading = (bool: boolean) => {
		setIsLoading(bool)
	}

	return { isLoading, updateLoading }
}
