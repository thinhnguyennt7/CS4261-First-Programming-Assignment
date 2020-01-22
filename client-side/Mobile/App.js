import React, { Fragment } from 'react';
import { Platform, StatusBar} from 'react-native';
import Main from './src/components/Main';
import { Provider as PaperProvider } from 'react-native-paper';

export default App = () => {
	console.disableYellowBox = true;

	return (
		<Fragment>
			{ Platform.OS === 'ios' && <StatusBar barStyle='dark-content' /> }
			<PaperProvider>
				<Main/>
			</PaperProvider>
		</Fragment>
	);
};