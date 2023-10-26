import { createContext } from 'react';
import { useProvideCsvs } from '../hooks';

const initialState = {
	csvs: [],
	addCsvToState: () => {},
	deleteCsvFromState: () => {}
};

export const CsvContext = createContext(initialState);

export const CsvProvider = ({ children }) => {
	const csvs = useProvideCsvs();

	return (
		<CsvContext.Provider value={csvs}>
			{children}
		</CsvContext.Provider>
	);
};