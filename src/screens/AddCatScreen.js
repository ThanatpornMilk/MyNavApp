import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";

const AddCatScreen = ({ navigation }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");

    const handleAddCat = () => {
        if (!title || !content || !image) {
            Alert.alert("กรุณากรอกข้อมูลให้ครบ");
        } else {
            const newCat = {
                id: Date.now().toString(),
                title,
                content,
                image,
            };

            navigation.navigate("CatScreen", { newCat });
        }
    };

    return (
        <View style={Styles.Container}>
            <TextInput
                style={Styles.Input}
                placeholder="Enter Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={Styles.Input}
                placeholder="Enter Content"
                value={content}
                onChangeText={setContent}
            />
            <TextInput
                style={Styles.Input}
                placeholder="Enter Image URL"
                value={image}
                onChangeText={setImage}
            />
            <Button title="Add Cat" color="#87CEFA" onPress={handleAddCat} />
        </View>
    );
};

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#D3D3D3',
    },
    Input: {
        backgroundColor: "#F8F8F8",
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default AddCatScreen;
