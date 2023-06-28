import React from 'react';

const Main = () => {
	const pets = [1,2,3,4,5,6,7,8]
	return (
		<div>
			{pets.map(el => (<div>{el}</div>))}
		</div>
	);
};

export default Main;