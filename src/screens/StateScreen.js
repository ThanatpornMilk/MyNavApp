import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const StateScreen = () => {
    const [value, setvalue] = useState(10);

    return (
        <View style={Styles.Container}>
            <Text style={Styles.Text}>{value}</Text>
            <View style={Styles.Button}>
                <Button 
                    title="increase" 
                    color='#87CEFA'
                    onPress={() => {
                        setvalue(value + 1);
                        console.log(value);
                    }}
                />
                <Button 
                    title="Decrease" 
                    color='#DB7093'
                    onPress={() => {
                        if (value > 0) { // ป้องกันค่าติดลบ
                            setvalue(value - 1);
                            console.log(value);
                        }
                    }}
                />
                <Button 
                    title="Reset" 
                    color='#828282'
                    onPress={() => {
                        setvalue(0);
                        console.log(value);
                    }}
                />
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({ 
    Container: { 
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFAFA',
    },
    Text: {
        fontSize: 200,
        color: '#363636',
    },
    Button: {
        width: 250,
        gap: 5,
    },
});

export default StateScreen;
