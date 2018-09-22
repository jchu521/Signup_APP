import React, { Component } from 'react';
import { Avatar, Text } from 'react-native-elements';
import { View } from 'react-native';
var ImagePicker = require('react-native-image-picker');

class UserPhoto extends Component{

    state = {
        avatarSource: null,
    }

    cameraAction = () => {
        const options = {
            title: 'Select Avatar',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        console.log('test');

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: 'data:image/jpeg;base64,' + response.data };
                console.log('test');

                this.setState({
                    avatarSource: source
                });
            }
        });

    }

    render(){
        const { avatarSource } = this.state;

        return(
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Avatar
                    xlarge
                    rounded
                    icon={{ name: 'user', type: 'font-awesome' }}
                    source={avatarSource}
                    onPress={() => this.cameraAction()}
                    activeOpacity={0.7}
                />
            </View>
        )
    }
}

export default UserPhoto;
