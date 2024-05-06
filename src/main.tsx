/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { CryptoPricesProvider } from './contexts/cryptoPrices'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CryptoPricesProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</CryptoPricesProvider>
	</React.StrictMode>
)
