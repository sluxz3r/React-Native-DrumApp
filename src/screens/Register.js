import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Text, TextInput, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import { register } from '../redux/actions/user';

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    toggleDrop() {
        this.setState((prevState) => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    render() {
        const userRegister = () => {
            this.state.user.push({
                email: this.state.email,
                fullname: this.state.fullname,
                password: this.state.password,
            });

            add()
            this.setState((prevState) => ({
                modal: !prevState.modal
            }));
            console.log(this.state.user);
        };
        let add = async () => {
            await this.props.dispatch(register(this.state.user[0]))
        };
        return (
            <ScrollView>
                <View
                    behavior="padding"
                    style={styles.Wrapper}>
                    <View>
                        <Image source={require('../assets/drum.png')} style={styles.logoSplash} />
                    </View>
                    <TextInput
                        placeholder='Email'
                        underlineColorAndroid='black'
                        placeholderTextColor='black'
                        keyboardType='email-address'
                        style={styles.inputField}
                        onChangeText={val => this.setState({ 'email': val })} />
                    <TextInput
                        placeholder='Full Name'
                        underlineColorAndroid='black'
                        placeholderTextColor='black'
                        style={styles.inputField}
                        onChangeText={val => this.setState({ 'fullname': val })} />
                    <TextInput
                        placeholder='Password'
                        underlineColorAndroid='black'
                        placeholderTextColor='black'
                        secureTextEntry={true}
                        style={styles.inputField}
                        onChangeText={val => this.setState({ 'password': val })} />
                    <TouchableOpacity onPress={userRegister.bind(this)} style={styles.registerButton}>
                        <Text style={{ color: 'white', fontSize: 18 }}>Register &#9835;</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }}>
                        <Text style={{ color: 'black', marginTop: 10 }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    };
};
export default connect(mapStateToProps)(RegisterScreen);
const styles = StyleSheet.create({
    inputField: {
        width: 280,
        color: 'black',
        borderColor: 'black',
        marginTop: 5
    },
    Wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        color: 'black',
        fontSize: 23
    },
    registerButton: {
        backgroundColor: '#3bc1ed',
        marginTop: 40,
        width: 300,
        height: 40,
        elevation: 5,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    register: {
        fontSize: 18,
        padding: 20
    },
    logoSplash: {
        marginTop: 30,
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    }
});