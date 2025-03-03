import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import theme from './theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>
)
