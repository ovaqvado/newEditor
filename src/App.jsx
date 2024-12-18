import { HStack } from '@chakra-ui/react'
import { NavLink } from 'react-router'
import Routers from './Routers/Routers'

function App() {
	return (
		<div>
			<header>
				<HStack spacing={4} as='nav'>
					<NavLink
						style={({ isActive }) => ({
							color: isActive ? 'green' : 'grey',
						})}
						to='/'
					>
						Home
					</NavLink>
					<NavLink
						style={({ isActive }) => ({
							color: isActive ? 'green' : 'grey',
						})}
						to='/tasks'
					>
						Tasks
					</NavLink>
				</HStack>
			</header>
			<Routers />
		</div>
	)
}

export default App
