import React from 'react'
import { useParams } from 'react-router'
import CodeEditor from '../../components/CodeEditor'
import tasks from '../../tasks.json'
import styles from './Tasks.module.css'

export default function Task() {
	const { taskId } = useParams()
	const task = tasks.find(task => task.number.toString() === taskId)

	if (!task) {
		return <div>Задача не найдена</div>
	}

	return (
		<div className={styles.taskPage}>
			<div className={styles.left_block}>
				<p className={styles.language}>Язык: {task.lang}</p>
				<p className={styles.number}>Задача номер: {task.number}</p>
				<p className={styles.description}>Описание: {task.description}</p>
			</div>
			<CodeEditor />
		</div>
	)
}
