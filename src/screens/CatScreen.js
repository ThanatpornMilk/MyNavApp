import React from "react";
import { FlatList, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform, View } from "react-native";  
import CardCat from "./Components/CardCat";

const CatScreen = ({ navigation, route }) => {
    const [searchTitle, setSearchTitle] = React.useState(""); 
    const [filteredCats, setFilteredCats] = React.useState([]); 
    const [cats, setCats] = React.useState([ 
        {
            id: "1",
            title: "Siamese",
            content: "แรกเกิดมีขนสีขาว พอโตจะเปลี่ยนเป็นสีครีมอ่อน มีแต้มสีน้ำตาล 9 จุด ตาสีฟ้าสดใส เลี้ยงไว้จะนำความเจริญรุ่งเรือง",
            image: "https://s359.kapook.com//pagebuilder/19ea5a87-37be-497e-a78f-8e1c085a87ec.jpg",
        },
        {
            id: "2",
            title: "Khao Manee",
            content: "เป็นแมวขนาดกลางขนสั้นสีขาวสะอาด ตาสีฟ้า สีเหลือง หรือสองสี นิสัยขี้เล่น เป็นมิตร อายุเฉลี่ย 10-12 ปี",
            image: "https://s359.kapook.com//pagebuilder/57bc4e94-ea16-49e7-9adb-f23d10d03818.jpg",
        },
        {
            id: "3",
            title: "Silver Blue",
            content: "ขนสั้นสีสวาด ตาสีเขียวหรือเหลือง หัวรูปหัวใจ หูตั้ง ขายาว นิสัยฉลาด ขี้อ้อน ชอบเล่นและเป็นจ่าฝูง",
            image: "https://s359.kapook.com//pagebuilder/8f4f7a51-8818-46e2-a7f4-477d127d4433.jpg",
        },
    ]);

    React.useEffect(() => {
        if (route.params?.newCat) {
            setCats((prevCats) => [...prevCats, route.params.newCat]);
        }
    }, [route.params?.newCat]);

    React.useEffect(() => {
        setFilteredCats(cats);
    }, [cats]);

    const handleSearch = (text) => {
        setSearchTitle(text);
        const filtered = text
            ? cats.filter((cat) =>
                cat.title.toLowerCase().includes(text.toLowerCase())
            )
            : cats; 
        setFilteredCats(filtered);
    };

    const renderItem = ({ item }) => (
        <CardCat
            title={item.title}
            content={item.content}
            image={item.image}
        />
    );

    return (
        <KeyboardAvoidingView
            style={Styles.Container}
            behavior={Platform.OS === "ios" ? "padding" : null}
        >
            <FlatList
                data={filteredCats}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={(
                    <View>
                        <TextInput
                            style={Styles.SearchTitle}
                            placeholder="Search by Name"
                            value={searchTitle}
                            onChangeText={handleSearch}
                        />
                        <View style={Styles.ButtonContainer}>
                            <View style={Styles.Button}>
                                <Button
                                    title="Add New Cat"
                                    color="#87CEFA"
                                    onPress={() => navigation.navigate("AddCatScreen")}
                                />
                            </View>
                        </View>
                    </View>
                )}
            />
        </KeyboardAvoidingView>
    );
};

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#D3D3D3',
    },
    SearchTitle: {
        backgroundColor: 'white',
        height: 40,
        paddingLeft: 10,
        marginBottom: 10,
    },
    ButtonContainer: {
        marginBottom: 10,
        alignItems: 'center',
    },
    Button: {
        width: '100%', 
    },
});

export default CatScreen;
