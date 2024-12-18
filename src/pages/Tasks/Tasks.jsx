import React from 'react'
import { Link } from 'react-router'
import tasks from '../../tasks.json'
import styles from './Tasks.module.css'

export const Tasks = () => {
	return (
		<div>
			<ol>
				{tasks.map(task => (
					<li key={task.number} className={styles.task}>
						<p className={styles.num_task}>{task.number}.</p>
						<div className={styles.info_btn}>
							<div className={styles.img_text}>
								<img
									className={styles.img_lang}
									src={`/src/assets/img/${task.lang.toLowerCase()}.png`}
									alt={task.lang}
								/>
								<p className={styles.description}>{task.description}</p>
							</div>
						</div>
						<Link to={`/task/${task.number}`} className={styles.btn_run}>
							Запустить
						</Link>
					</li>
				))}
			</ol>
		</div>
	)
}
