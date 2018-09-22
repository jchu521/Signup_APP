import React, { Component } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, ImageBackground } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

class Login extends Component{
    render(){
        return (
            <ImageBackground style={{ width: '100%', height: '100%'}} source={require('../../images/defaultScreen.png')}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{ color: 'white' }} >Login Screen</Text>
                    <Text style={{ color: 'white' }} >App Logo</Text>
                </View>
                <View style={{ flex: 1, paddingHorizontal: '10%' }}>
                    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
                        <Sae
                            label={'Username'}
                            iconClass={FontAwesome}
                            iconName={'user'}
                            iconColor={'#8C88FF'}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                        />
                        <Sae
                            label={'Password'}
                            iconClass={FontAwesome}
                            iconName={'lock'}
                            iconColor={'#8C88FF'}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                        />
                    </KeyboardAvoidingView>
                    <View style={{ flex: 1 }}>                
                        <TouchableOpacity style={{ alignItems:'center', marginVertical: '5%', padding: 20, borderRadius: 25 ,backgroundColor: '#FF3366'}} onPress={ () => console.log('Sign In')} >
                            <Text style={{ color: 'white', fontSize: 20 }}>Sign in</Text>
                        </TouchableOpacity>
                        <View >
                            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingBottom: 10 }}>
                                <Text style={{ color: 'white', textAlign: 'center' }}>Don't have any account? </Text>
                                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => console.log('Sign Up')} >
                                    <Text style={{ color: 'white' }}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => console.log('Forgot Password')} >
                                <Text style={{ color: 'white' }}>Forgot Password</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default Login;