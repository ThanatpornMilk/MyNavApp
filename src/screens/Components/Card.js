import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Card = ({ title, content, onDelete }) => {
    return (
        <View style={Styles.Card}>
            <View style={Styles.CardHeader}>
                <Text style={Styles.Title}>{title}</Text>
                <TouchableOpacity onPress={onDelete} style={Styles.IconContainer}>
                     <Icon name="trash-can" size={22} color="gray" />
                </TouchableOpacity>
            </View>
            <Text style={Styles.Content}>{content}</Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    Card: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    CardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    Content: {
        fontSize: 16,
    },
    IconContainer: {
        marginTop: 20, 
    },
});

export default Card;
