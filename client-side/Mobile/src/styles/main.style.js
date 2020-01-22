import { StyleSheet } from 'react-native';
import Dimensions from '../services/Dimensions';

export default StyleSheet.create({
    flexView: {
        flex: 1,
    },
    whiteTopSafe: {
        flex: 0,
        backgroundColor: 'white',
    },
    whiteBottomSafe: {
        flex: 1,
        backgroundColor: 'white',
    },
    stepperView: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    stepperButton: {
        borderRadius: 0,
        marginLeft: 3,
        width: (Dimensions.width) - (Dimensions.width * 0.6),
        backgroundColor: '#E7E7E7',
    },
    fieldInputMargin: {
        marginTop: 10,
    },
    cardView: {
        borderWidth: 0.2,
        width: (Dimensions.width) - (Dimensions.width * 0.05),
        alignSelf: 'center',
        marginTop: 30,
    },
    submitButton: {
        borderRadius: 50,
        alignSelf: 'center',
        width: (Dimensions.width / 3),
        height: 45,
        justifyContent: 'center',
        marginTop: 20,
    },
    mainView: {
        marginTop: 10,
    },
    textDisplay: {
        fontSize: 20,
        marginTop: 20,
        marginLeft: 20,
    },
    errorText: {
		color: 'red',
		fontSize: 12,
		paddingLeft: 10
	}
});