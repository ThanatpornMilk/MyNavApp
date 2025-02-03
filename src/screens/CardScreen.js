import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import Card from "./Components/Card";
import CustomButton from "./Components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = '@card_data'

const CardScreen = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [cards, setCards] = useState([]);

    const addCard = async () => {
        if (!title.trim() || !content.trim()) {
            alert("กรุณากรอกค่า title และ content");
            return;
        }
        const newCard = { id: Date.now().toString(), title, content };
        const updateCard = [newCard, ...cards]
        setCards(updateCard);
        setTitle('');
        setContent('');

        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updateCard))
        } catch (error) {
            console.error('Error: ', error)
        }
    };

    const deleteCard = async (id) => {
        const updatedCards = cards.filter((card) => card.id !== id);
        setCards(updatedCards);

        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCards))
        } catch (error) {
            console.error('Error: ', error)
        }
    };

    const loadCards = async () => {
        try {
            const storageCards = await AsyncStorage.getItem(STORAGE_KEY);
            if (storageCards) {
                setCards(JSON.parse(storageCards));
            }
        } catch (error) {
            console.error('Failed to load: ', error)
        }
    }

    useEffect(() => {
        loadCards(); //ให้ code ทำงานตอนเปิดหน้าจอ
    }, []) 
    // [] ทำงานแค่ครั้งแรกครั้งเดียว
    // [x] ทำงานทุกครั้งที่ x เปลี่ยน
    // [x,y,z] ใส่ได้มากกว่า 1 ตัว

    return (
        <View style={Styles.Container}>
            <Text style={Styles.Headers}>ทดสอบสร้างการ์ด</Text>
            <TextInput
                style={Styles.Input}
                placeholder="ใส่หัวข้อ..."
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={Styles.Input}
                placeholder="ใส่เนื้อหา..."
                value={content}
                onChangeText={setContent}
                multiline={true}
                numberOfLines={5}
            />
            <CustomButton
                title="เพิ่มการ์ด"
                backgroundColor="#9AC0CD"
                onPress={addCard}
            />
            <FlatList
                data={cards}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        content={item.content}
                        onDelete={() => deleteCard(item.id)}
                    />
                )}
                contentContainerStyle={Styles.CardList}
            />
        </View>
    );
};

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFAFA',
    },
    Headers: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    Input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        marginBottom: 10,
    },
    CardList: {
        marginTop: 10,
    },
});

export default CardScreen;
