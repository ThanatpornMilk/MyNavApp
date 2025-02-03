import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator} from "react-native";

const LoadUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log('Loading data...');
    
        const fetchData = async() => {
            try {
                //Load or Fetch Data
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()
                setUsers(data);
            } catch (error) {
                //Show Error
                console.log('Error: ',error)
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    },[]);

    return (
        <View style={Styles.Container}>
            {loading?(
                <ActivityIndicator size='large' color='#6CA6CD'/>
            ):<FlatList
                data = {users}
                keyExtractor = {(item) => item.id}
                renderItem = {({item}) => (
                    <Text style={Styles.Text}> 
                        {item.name} [{item.email}]
                    </Text>
                )}
            />}
        </View>
    );
};

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#f2fce0',
        padding: 20,
    },
    Text: {
        fontSize: 13,
        marginBottom: 10,
    },
    ListItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#2D2D2D',
        backgroundColor: 'black',
    },
});

export default LoadUsers;
