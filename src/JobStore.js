import React, {useState, createContext} from 'react';

const job_details = {
	job: 'backend developer',
	lang: 'c++',
};

export const JobContext = createContext();

export default function JobStore(props) {
	const [job, setJob] = useState(job_details);
	return (
		<JobContext.Provider value={[job, setJob]}>
			{props.children}
		</JobContext.Provider>
	);
}
