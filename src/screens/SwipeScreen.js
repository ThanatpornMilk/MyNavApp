import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

const SwipeScreen = () => {
    const [listdata, setListdata] = useState([
        { id: '1', text: 'รายการที่ 1' },
        { id: '2', text: 'รายการที่ 2' },
        { id: '3', text: 'รายการที่ 3' },
        { id: '4', text: 'รายการที่ 4' },
        { id: '5', text: 'รายการที่ 5' },
    ]);

    const deleteItem = (id) => {
        const newList = listdata.filter((item) => item.id !== id);
        setListdata(newList);
    };

    return (
        <View style={Styles.Container}>
            <Text style={Styles.headerText}>Swipe to Delete</Text>
            <SwipeListView
                data={listdata}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={Styles.listItem}>
                        <Text style={Styles.listItemText}>{item.text}</Text>
                    </View>
                )}
                renderHiddenItem={({ item }) => (
                    <TouchableOpacity
                        style={Styles.actionButton}
                        onPress={() => deleteItem(item.id)}
                    >
                        <Text style={Styles.actionText}>Delete {item.id}</Text>
                    </TouchableOpacity>
                )}
                rightOpenValue={-120} // ระยะการแสดงปุ่มลบ
                disableRightSwipe={true} // ปิดการปัดทางขวา
                onSwipeValueChange={(swipeData) => {
                    const { key, value } = swipeData;
                    if (value <= -240) { // ปัดเกิน -200 จะลบรายการอัตโนมัติ
                        deleteItem(key);
                    }
                }}
            />
        </View>
    );
};

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 16,
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    listItem: {
        backgroundColor: "#FFFAFA",
        padding: 20,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 3,
    },
    listItemText: {
        fontSize: 14,
        color: "#363636",
    },
    actionButton: {
        backgroundColor: "#CD5C5C",
        alignItems: "flex-end",
        justifyContent: "center",
        height: "100%",
        paddingHorizontal: 20,
    },
    actionText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default SwipeScreen;
