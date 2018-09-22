import React, { Component } from 'react';
import { View, Text, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Sae } from 'react-native-textinput-effects';

class SignUp extends Component{
    render() {
        return (
            <ImageBackground source={require('../../images/defaultScreen.png')} style={{ width: '100%', height: '100%' }}>
                <View style={{ flex:1, paddingHorizontal: '10%'}}>
                    <View style={{ flex: 2, justifyContent: 'center' }} >
                        <Text style={{ color: 'white', textAlign: 'center' }} >SignUp Screen</Text>
                        <Text style={{ color: 'white', textAlign: 'center' }} >User Photo</Text>
                    </View>
                    <View style={{ flex: 2 }}>
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
                                label={'Email'}
                                iconClass={MaterialIcons}
                                iconName={'email'}
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
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{ alignItems: 'center', marginVertical: '5%', padding: 20, borderRadius: 25, backgroundColor: '#FF3366' }} onPress={() => console.log('Create')} >
                            <Text style={{ color: 'white', fontSize: 20 }}>Create</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default SignUp;