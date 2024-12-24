import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={Styles.ViewStyle}>
        <Text style={Styles.TextStyle}>This is Home Screen</Text>
    </View>
  );
};

const Styles = StyleSheet.create({ 
    ViewStyle: { 
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    TextStyle: {
      fontSize: 24,
    },
});

export default HomeScreen;
