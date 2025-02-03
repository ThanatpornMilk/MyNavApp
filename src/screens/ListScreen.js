import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SwipeListView } from 'react-native-swipe-list-view';

const ListScreen = () => {
    const [isVisible, setIsVisible] = useState(false); 
    const [callingName, setCallingName] = useState(""); 

    const [history, setHistory] = useState([
        { id: '1', name: 'Kitty', status: 'Phone', day: 'Monday' },
        { id: '2', name: 'Mymelody (2)', status: 'Mobile', day: 'Monday' },
        { id: '3', name: 'Kuromi', status: 'Phone', day: 'Tuesday' },
        { id: '4', name: 'Pompom', status: 'Mobile', day: 'Wednesday' },
        { id: '5', name: 'Gudetama', status: 'Phone', day: 'Friday' },
        { id: '6', name: 'Keroro', status: 'Phone', day: 'Friday' },
        { id: '7', name: 'Badmaru', status: 'Phone', day: 'Saturday' },
        { id: '8', name: 'Pochacco', status: 'Phone', day: 'Saturday' },
    ]);

    const handleCall = (name) => {
        setCallingName(name);  
        setIsVisible(true);
    };

    const handleEndCall = () => {
        setIsVisible(false);
    };

    const deleteItem = (id) => {
        const newHistory = history.filter((item) => item.id !== id);
        setHistory(newHistory); 
    };

    const currentProfile = history.find(item => item.name === callingName);

    return (
        <View style={Styles.ViewStyle}>
            <Text style={Styles.TextTitle}>Recents</Text>

            <SwipeListView
                data={history}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableWithoutFeedback onPress={() => handleCall(item.name)}>
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
                        </TouchableWithoutFeedback>
                    );
                }}
                renderHiddenItem={({ item }) => (
                    <TouchableWithoutFeedback
                        onPress={() => deleteItem(item.id)} 
                    >
                        <View style={Styles.deleteButton}>
                            <Icon name="trash-can" size={24} color="white" />
                        </View>
                    </TouchableWithoutFeedback>
                )}
                rightOpenValue={-75} 
                disableRightSwipe={true} 
                onSwipeValueChange={(swipeData) => {
                    const { key, value } = swipeData;
                    if (value <= -250) { 
                        deleteItem(key); 
                    }
                }}
            />

            <Modal transparent={true} animationType="fade" visible={isVisible}>
                <View style={Styles.modalOverlay}>
                    <View style={Styles.modalContainer}>
                        {currentProfile && (
                            <>
                                <View style={Styles.ProfileLarge}>
                                    <Text style={Styles.ProfileTextLarge}>
                                        {currentProfile.name.charAt(0).toUpperCase()}
                                    </Text>
                                </View>
                                <Text style={Styles.modalName}>{currentProfile.name}</Text>
                                <Text style={Styles.callingText}>Calling...</Text>
                            </>
                        )}
                        <View style={Styles.modalButtons}>
                            <TouchableWithoutFeedback onPress={handleEndCall}>
                                <View style={Styles.callButton}>
                                    <Icon name="phone-hangup" size={28} color="white" />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
            </Modal>
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
        backgroundColor: 'black',
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
    Info: {
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
    modalOverlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, .5)',
    },
    modalContainer: {
        width: 280,
        backgroundColor: '#FFFAFA',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        elevation: 5,
    },
    ProfileLarge: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#919ba5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    ProfileTextLarge: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
    },
    modalName: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    callingText: {
        fontSize: 16,
        color: '#888',
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    callButton: {
        backgroundColor: '#CD5C5C',
        padding: 15,
        borderRadius: 30,
        marginHorizontal: 10,
        alignItems: 'center',
    },
    deleteButton: {
        backgroundColor: "#CD5C5C",
        alignItems: "flex-end",
        justifyContent: "center",
        height: "100%",
        paddingHorizontal: 20,
    },
});

export default ListScreen;
