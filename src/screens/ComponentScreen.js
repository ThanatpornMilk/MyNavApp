import React from "react";
import { View, Text, StyleSheet, Image, Button, Alert, TouchableOpacity} from "react-native";

const ComponentScreen = () => {
    const name = 'Kitty';

    const ShowAlert = (message) => {
        Alert.alert('Kitty Said:', message, [
            { text: 'Ok', onPress: () => console.log('Click Ok') },
            { text: 'Cancel', onPress: () => console.log('Click Cancel') },
        ]);
    };

    return (
        <View style={Styles.ViewStyle}>
            <TouchableOpacity onPress={() => ShowAlert('สวัสดี!')}>
                <Image 
                    style={Styles.ImageStyle}
                    source={require('../img/baby.jpg')}
                />
            </TouchableOpacity> 
            <Text style={Styles.TextStyle}>This is Component Screen</Text>
            <Text style={Styles.TextStyle}>By {name}</Text>
            <View style={Styles.ButtonStyle}>
                <Button 
                    title="Say Hi!" 
                    color= '#FFB5C5'
                    onPress={() => ShowAlert('I love u!')}
                />
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({ 
    ViewStyle: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFACD',
    },
    TextStyle: {
        fontSize: 24,
        color: '#A2B5CD',
    },
    ImageStyle: {
        width: 150, 
        height: 150, 
        margin: 5, 
        borderWidth: 4, 
        borderColor: '#FFB5C5', 
        borderRadius: 75,
    },
    ButtonStyle: {
        marginTop: 15,
        width: 150,
    },
});

export default ComponentScreen;
