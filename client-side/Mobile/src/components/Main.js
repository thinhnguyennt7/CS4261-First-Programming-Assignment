import React, { Component, Fragment } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import styles from '../styles/main.style';
import DimissKeyboard from '../directives/DimissKeyboard';
import META from '../constants/en_US';
import HTTP from '../services/httpRequest';
import Dimensions from '../services/Dimensions';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <Fragment>
                <DimissKeyboard>
                    <KeyboardAvoidingView behavior='padding' style={styles.flexView}>
                        <SafeAreaView style={styles.whiteTopSafe}/>
                        <SafeAreaView style={styles.whiteBottomSafe}>
                            <StatusBar barStyle='dark-content' />
                            <View>
                                <Text>{'Getting Started'}</Text>
                            </View>
                        </SafeAreaView>
                    </KeyboardAvoidingView>
                </DimissKeyboard>
            </Fragment>
        );
    }
};