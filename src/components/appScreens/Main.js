import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

export default class Main extends Component{
    render(){
        return(
            <View style={{ width: '100%', height: '100%', alignItems: 'center'}}>
                <Text h3 style={{ justifyContent: 'center', alignItems: 'center' }} >Main Screen</Text>
            </View>
        )
    }
}