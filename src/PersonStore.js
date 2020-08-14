import React, {useState, createContext} from 'react';

const person_details = {
	name: 'john',
	email: 'asd@asd.com',
};

export const PersonContext = createContext();

export default function PersonStore(props) {
	const [person, setPerson] = useState(person_details);
	return (
		<PersonContext.Provider value={[person, setPerson]}>
			{props.children}
		</PersonContext.Provider>
	);
}
