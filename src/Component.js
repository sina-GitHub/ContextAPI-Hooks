import React, {useContext} from 'react';

import {PersonContext} from './PersonStore';
import {JobContext} from './JobStore';

export default function Component() {
	const [person, setPerson] = useContext(PersonContext);
	const [job] = useContext(JobContext);
	// const [job, setJob] = useContext(JobContext);

	function handleInfo() {
		// setJob({
		// 	job: 'Front-end developer',
		// 	lang: 'JS',
		// });

		setPerson({
			name: 'Sina',
			email: 'sina.mail.programming@gmail.com',
		});
	}

	return (
		<div>
			<h1>{person.name}</h1>
			<h1>{job.job}</h1>
			<button onClick={handleInfo}>click</button>
		</div>
	);
}
