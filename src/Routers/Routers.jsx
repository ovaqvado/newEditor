import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from '../pages/Home/Home'
import Task from '../pages/Tasks/Task'
import { Tasks } from '../pages/Tasks/Tasks'

export default function Routers() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/tasks' element={<Tasks />} />
			<Route path='/task/:taskId' element={<Task />} />
		</Routes>
	)
}
