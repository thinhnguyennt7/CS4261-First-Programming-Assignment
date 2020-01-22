import React, { Component, Fragment } from 'react';
import { View, Text, KeyboardAvoidingView, SafeAreaView, StatusBar } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';
import styles from '../styles/main.style';
import DimissKeyboard from '../directives/DimissKeyboard';
import META from '../constants/en_US';
import HTTP from '../services/httpRequest';

const mainState = {
    currentView: 1,
    username: '',
    password: '',
    name: '',
    dob: '',
    phone: '',
    email: '',
    repeatPassword: '',
    buttonClicked: false,
    foundError: false,
    loginInValidInput: false,
    signUpValidInput: false,
    dataCollected: {},
    loginError: '',
    registerUsernameError: '',
    registerPasswordError: ''
};

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = mainState;
    }

    componentDidMount = () => {
        // Reset State when app load
        this.clearAllInput();
    }

    clearAllInput = () => {
        this.setState({
            username: '',
            password: '',
            name: '',
            dob: '',
            phone: '',
            email: '',
            repeatPassword: '',
            buttonClicked: false,
            foundError: false,
            loginInValidInput: false,
            signUpValidInput: false,
            dataCollected: {}
        });
    };

    clearAllErrors = () => {
        this.setState({
            loginError: '',
            registerPasswordError: '',
            registerUsernameError: ''
        })
    }

    loginView = () => {
        return (
            <View style={styles.mainView}>
                <TextInput style={styles.fieldInputMargin} label={META.LOGIN.USERNAME} value={this.state.username} onChangeText={username => this.setState({ username }, () => this.inputValidator())} />
                <TextInput 
                    style={styles.fieldInputMargin} 
                    label={META.LOGIN.PASSWORD} 
                    value={this.state.password} 
                    onChangeText={password => this.setState({ password }, () => this.inputValidator())} 
                    secureTextEntry
                />
                <Text style={styles.errorText}>{this.state.loginError}</Text>
                <Button mode='contained' style={styles.submitButton} onPress={this.loginLogic} disabled={!this.state.loginInValidInput}>
                    {META.BUTTON.LOGIN}
                </Button>
            </View>
        );
    };

    errorLogView = () => {
        return (
            <View>
                <Text>{'Error message go here'}</Text>
            </View>
        );
    };

    inputValidator = () => {
        let validCondition = false;
        if (this.state.currentView === 1) {
            validCondition = (this.state.username !== '') && (this.state.password !== '');
            this.setState({ loginInValidInput: (validCondition) ? true : false });
        } else {
            validCondition = (this.state.username !== '')
            && (this.state.password !== '')
            && (this.state.repeatPassword !== '')
            && (this.state.password === this.state.repeatPassword);
            this.setState({ signUpValidInput: (validCondition) ? true : false });
        }
        if (this.state.password !== this.state.repeatPassword) {
            this.setState({ registerPasswordError: 'Password does not matched.' });
        } else {
            this.clearAllErrors();
        }
    };

    stepperViewClickEvent = (index) => {
        this.setState({ currentView: index });
        this.clearAllInput();
        this.clearAllErrors();
    };

    signupView = () => {
        return (
            <View style={styles.mainView}>
                <TextInput style={styles.fieldInputMargin} label={META.SIGN_UP.USERNAME} value={this.state.username} onChangeText={username => this.setState({ username }, () => this.inputValidator())} />
                <Text style={styles.errorText}>{this.state.registerUsernameError}</Text>
                <TextInput style={styles.fieldInputMargin} label={META.SIGN_UP.NAME} value={this.state.name} onChangeText={name => this.setState({ name }, () => this.inputValidator())} />
                <TextInput style={styles.fieldInputMargin} label={META.SIGN_UP.EMAIL} value={this.state.email} onChangeText={email => this.setState({ email }, () => this.inputValidator())} />
                <TextInput style={styles.fieldInputMargin} label={META.SIGN_UP.DOB} value={this.state.dob} onChangeText={dob => this.setState({ dob }, () => this.inputValidator())} />
                <TextInput style={styles.fieldInputMargin} label={META.SIGN_UP.PHONE} value={this.state.phone} onChangeText={phone => this.setState({ phone }), () => this.inputValidator()} />
                <TextInput
                    style={styles.fieldInputMargin}
                    label={META.SIGN_UP.PASSWORD}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password }, () => this.inputValidator())}
                    secureTextEntry
                />
                <TextInput
                    style={styles.fieldInputMargin}
                    label={META.SIGN_UP.REPEAT_PASSWORD}
                    value={this.state.repeatPassword}
                    onChangeText={repeatPassword => this.setState({ repeatPassword }, () => this.inputValidator())}
                    secureTextEntry
                />
                <Text style={styles.errorText}>{this.state.registerPasswordError}</Text>
                <Button mode='contained' style={styles.submitButton} onPress={this.signupLogic} disabled={!this.state.signUpValidInput}>
                    {META.BUTTON.SIGN_UP}
                </Button>
            </View>
        );
    };

    stepperView = () => {
        return (
            <View style={styles.stepperView}>
                <Button mode='contained' style={[styles.stepperButton, {backgroundColor: (this.state.currentView === 1) ? '#6200EE' : '#E7E7E7'}]} onPress={() => this.stepperViewClickEvent(1)}>
                    {META.STEPPER.ALREADY_ACCT}
                </Button>
                <Button mode='contained' style={[styles.stepperButton, {backgroundColor: (this.state.currentView === 2) ? '#6200EE' : '#E7E7E7'}]} onPress={() => this.stepperViewClickEvent(2)}>
                    {META.STEPPER.NEED_ACCT}
                </Button>
            </View>
        );
    };

    loginSignUpView = () => {
        return (
            <View>
                <this.stepperView/>
                <this.loginOrSignUp/>
            </View>
        );
    };

    cardViewDisplay = () => {
        return (
            <Card style={styles.cardView}>
                <Card.Content>
                    <this.mainViewToRender/>
                </Card.Content>
            </Card>
        );
    };

    loginOrSignUp = () => {
        return (this.state.currentView === 1) ? (<this.loginView/>) : (<this.signupView/>);
    };

    dashboardView = () => {
        return (
            <View style={styles.dashboardView}>
                <Text style={styles.textDisplay}>{`${META.INFORMATION.USERNAME}: ${this.state.dataCollected.username}`}</Text>
                <Text style={styles.textDisplay}>{`${META.INFORMATION.FULL_NAME}: ${this.state.dataCollected.name}`}</Text>
                <Text style={styles.textDisplay}>{`${META.INFORMATION.DOB}: ${this.state.dataCollected.dob}`}</Text>
                <Text style={styles.textDisplay}>{`${META.INFORMATION.PHONE}: ${this.state.dataCollected.phone}`}</Text>
                <Text style={styles.textDisplay}>{`${META.INFORMATION.EMAIL}: ${this.state.dataCollected.email}`}</Text>
                <Button mode='contained' style={styles.submitButton} onPress={this.logoutClicked}>
                    {META.BUTTON.SIGN_OUT}
                </Button>
            </View>
        );
    };

    mainViewToRender = () => {
        return (this.state.buttonClicked) ? <this.dashboardView/> : <this.loginSignUpView/>;
    };

    buttonClicked = () => {
        this.setState({ buttonClicked: true });
    };

    loginLogic = () => {
        // Call HTTP.httpGet to get data
        // Return a promise
        HTTP.httpPost("v1/account/verify", {
            username: this.state.username,
            password: this.state.password
        }).then(res => {
            if (res.data["status"] == "true") {
                this.clearAllErrors();
                HTTP.httpGet("v1/account/" + this.state.username)
                .then(res => {
                    this.buttonClicked();
                    var data = res.data.data;
                    this.state.dataCollected.username = data["username"] || "N/A";
                    this.state.dataCollected.name = data["name"] || "N/A";
                    this.state.dataCollected.phone = data["phone"] || "N/A";
                    this.state.dataCollected.dob = data["dob"] || "N/A";
                    this.state.dataCollected.email = data["email"] || "N/A";
                    this.forceUpdate()
                })
            } else {
                this.setState({ loginError: 'The criteria provided does not matched.'})
            }
        })
    };

    signupLogic = () => {
        // Call HTTP.httpPost to sign up
        // Return a promise
        HTTP.httpPost("v1/account", {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            phone: this.state.phone,
            dob: this.state.dob,
            email: this.state.email
        }).then(res => {
            console.log(res.data);
            if (res.data["status"] == "true") {
                this.clearAllErrors();
                this.state.dataCollected.username = this.state.username || "N/A";
                this.state.dataCollected.name = this.state.name || "N/A";
                this.state.dataCollected.phone = this.state.phone || "N/A";
                this.state.dataCollected.dob = this.state.dob || "N/A";
                this.state.dataCollected.email = this.state.email || "N/A";
                this.buttonClicked();
            } else {
                this.setState({ registerUsernameError: 'Username already exists.'});
            }
        })
    };

    logoutClicked = () => {
        this.clearAllInput();
    };

    render() {
        return (
            <Fragment>
                <DimissKeyboard>
                    <KeyboardAvoidingView behavior='padding' style={styles.flexView}>
                        <SafeAreaView style={styles.whiteTopSafe}/>
                        <SafeAreaView style={styles.whiteBottomSafe}>
                            <StatusBar barStyle='dark-content' />
                            <this.cardViewDisplay/>
                        </SafeAreaView>
                    </KeyboardAvoidingView>
                </DimissKeyboard>
            </Fragment>
        );
    };
};