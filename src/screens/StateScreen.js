import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const initialState = {count: 0}

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + 1}
        case "DECREMENT":
            return {count: state.count > 0 ? state.count - 1 : 0 }
        case "RESET":
            return {count: 0}
        default:
            return state;
    }
}

const StateScreen = () => {
    // const [value, setvalue] = useState(10);
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <View style={Styles.Container}>
            <Text style={Styles.Text}>{state.count}</Text>
            <View style={Styles.Button}>
                <Button 
                    title="Increase" 
                    color='#87CEFA'
                    onPress={
                        () => dispatch({ type: "INCREMENT" })
                    //     setvalue(value + 1);
                    //     console.log(value);
                    }
                />
                <Button 
                    title="Decrease" 
                    color='#DB7093'
                    onPress={
                        () => dispatch({ type: "DECREMENT" })
                    //     if (value > 0) { // ป้องกันค่าติดลบ
                    //         setvalue(value - 1);
                    //         console.log(value);
                    //     }
                    }
                />
                <Button 
                    title="Reset" 
                    color='#828282'
                    onPress={
                        () => dispatch({ type: "RESET" })
                    //     setvalue(0);
                    //     console.log(value);
                    }
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
