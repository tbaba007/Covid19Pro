import * as React from 'react';
import './App.css';
import CaseList from './components/cases/CaseList';

const App = () => {
	return (
		<div className="App">
			<CaseList DiagnosisList={[]} />
		</div>
	);
};

export default App;
