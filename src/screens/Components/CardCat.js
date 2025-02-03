import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CardCat = ({ title, content, image }) => {
    return (
        <View style={Styles.Card}>
            <Image source={{ uri: image }} style={Styles.Image} />
            <Text style={Styles.Title}>{title}</Text>
            <Text style={Styles.Content}>{content}</Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    Card: {
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    Title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 6,
        marginBottom: 2,
    },
    Content: {
        fontSize: 14,
    },
    Image: {
        width: '100%',
        height: 250,
    },
});

export default CardCat;
