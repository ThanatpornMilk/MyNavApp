import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import CustomButton from "./Components/CustomButton";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={Styles.ViewStyle}>
            <Text style={Styles.TextStyle}>List of Screen</Text>

            <View style={Styles.ButtonContainer}>
                <CustomButton
                    title="Go to List Screen" 
                    backgroundColor="#9370DB" 
                    onPress={() => navigation.navigate('List')} 
                />
            </View>

            <View style={Styles.ButtonContainer}>
                <CustomButton
                    title="Go to State Demo" 
                    backgroundColor="#6495ED" 
                    onPress={() => navigation.navigate('State')} 
                />
            </View>

            <View style={Styles.ButtonContainer}>
                <CustomButton 
                    title="Go to Swipe Demo" 
                    backgroundColor="#7CCD7C" 
                    onPress={() => navigation.navigate('Swipe')} 
                />
            </View>

            <View style={Styles.ButtonContainer}>
                <CustomButton
                    title="Go to Modal Demo" 
                    backgroundColor="#EE9572" 
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
                <CustomButton 
                    title="Go to Cat Screen" 
                    backgroundColor='#e85378'
                    onPress={() => navigation.navigate('CatScreen')} 
                />
            </View>

            <View style={Styles.ButtonContainer}>
                <CustomButton
                    title="Go to use Effect" 
                    backgroundColor='#CC0033'
                    onPress={() => navigation.navigate('LoadUsr')} 
                />
            </View>

            <View style={Styles.ButtonContainer}>
                <CustomButton
                    title="Go to Register" 
                    backgroundColor='#b70000'
                    onPress={() => navigation.navigate('Regis')} 
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
    },
    TextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 5,
    },
    ButtonContainer: { 
        //marginVertical: 5, 
        width: '50%',  
    },
});

export default HomeScreen;
