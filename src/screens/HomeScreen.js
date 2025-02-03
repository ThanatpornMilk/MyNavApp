import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import CustomButton from "./Components/CustomButton";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={Styles.ViewStyle}>
            <Text style={Styles.TextStyle}>List of Screen</Text>

            <View style={Styles.ButtonContainer}>
                <Button 
                    title="Go to List Screen" 
                    color="#9370DB" 
                    onPress={() => navigation.navigate('List')} 
                />
            </View>

            <View style={Styles.ButtonContainer}>
                <Button 
                    title="Go to State Demo" 
                    color="#6495ED" 
                    onPress={() => navigation.navigate('State')} 
                />
            </View>

            <View style={Styles.ButtonContainer}>
                <Button 
                    title="Go to Swipe Demo" 
                    color="#7CCD7C" 
                    onPress={() => navigation.navigate('Swipe')} 
                />
            </View>

            <View style={Styles.ButtonContainer}>
                <Button 
                    title="Go to Modal Demo" 
                    color="#EE9572" 
                    onPress={() => navigation.navigate('Modal')} 
                />
            </View>
            
            <View style={Styles.ButtonContainer}>
                <CustomButton 
                    title="Go to Card Screen" 
                    onPress={() => navigation.navigate('Card')}
                    backgroundColor='#EE799F' 
                />
            </View>

            <View style={Styles.ButtonContainer}>
                <Button 
                    title="Go to Cat Screen" 
                    color='#e85378'
                    onPress={() => navigation.navigate('CatScreen')} 
                />
            </View>

            <View style={Styles.ButtonContainer}>
                <Button 
                    title="Go to use Effect" 
                    color='#CC0033'
                    onPress={() => navigation.navigate('LoadUsr')} 
                />
            </View>


            
            {/* <Card title = 'card title' content = 'card content'/> */}

            {/* <CustomButton 
                title="Submit" 
                onPress={() => navigation.navigate('List')}
                backgroundColor='#DB7093' 
            /> */}

            {/* <CustomButton 
                title="Cancel" 
                onPress={() => navigation.navigate('List')}
                backgroundColor='#e14c4c' 
            /> */}

            {/* <CardScreen
                title="Cancel" 
                onPress={() => navigation.navigate('List')}
                backgroundColor='#B03060'
            /> */}
        </View>
    );
};

const Styles = StyleSheet.create({ 
    ViewStyle: { 
        backgroundColor: '#FFFACD',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    TextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    ButtonContainer: { 
        marginVertical: 2, 
        width: '50%',  
    },
});

export default HomeScreen;
