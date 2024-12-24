import React from "react";
import { View, Text, StyleSheet, FlatList, Alert, TouchableOpacity} from "react-native";

const ListScreen = () => {
    const history = [
        { name: 'Kitty'         , status: 'Phone'   , day: 'Monday' },
        { name: 'Mymelody (2)'  , status: 'Mobile'  , day: 'Monday' },
        { name: 'Kuromi'        , status: 'Phone'   , day: 'Tuesday' },
        { name: 'Pompom'        , status: 'Mobile'  , day: 'Wednesday' },
        { name: 'Gudetama'      , status: 'Phone'   , day: 'Friday' },
        { name: 'Keroro'        , status: 'Phone'   , day: 'Friday' },
        { name: 'Badmaru'       , status: 'Phone'   , day: 'Saturday' },
        { name: 'Pochacco'      , status: 'Phone'   , day: 'Saturday' },
    ];

    return (
        <View style={Styles.ViewStyle}>
            <Text style={Styles.TextTitle}>Recents</Text>
            <FlatList
                keyExtractor={(item, index) => index.toString()} 
                data={history}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => Alert.alert('Calling',(item.name))}>
                            <View style={Styles.ListItem}>
                                <View style={Styles.Profile}>
                                    <Text style={Styles.ProfileText}>
                                        {item.name.charAt(0).toUpperCase()} 
                                    </Text>
                                </View>
                                <View style={Styles.Info}>
                                    <Text style={Styles.NameText}>{item.name}</Text>
                                    <Text style={Styles.StatusText}>{item.status}</Text>
                                </View>
                                <Text style={Styles.DayText}>{item.day}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const Styles = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10,
    },
    TextTitle: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    ListItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#2D2D2D',
    },
    Profile: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#919ba5',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    ProfileText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    Info: { // ให้ name กับ status เรียงกันแนวตั้ง
        flexDirection: 'column',
        flex: 1,
    },
    NameText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    StatusText: {
        color: '#A9A9A9',
        fontSize: 12,
    },
    DayText: {
        color: '#A9A9A9',
        fontSize: 14,
    },
});

export default ListScreen;
