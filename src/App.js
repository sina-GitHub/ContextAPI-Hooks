import React from 'react';

import PersonStore from './PersonStore';
import JobStore from './JobStore';
import Component from './Component';

export default function App() {
	return (
		<PersonStore>
			<JobStore>
				<Component />
			</JobStore>
		</PersonStore>
	);
}
