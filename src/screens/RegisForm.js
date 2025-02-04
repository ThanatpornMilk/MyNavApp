import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import CustomButton from "./Components/CustomButton";

const RegisForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', email: '', password: '' })

    const validateField = (field, value) => {
        let error = ''
        if (!value) { 
            error = 'This Field is required'
        }
        setErrors((preErrors) => ({ ...preErrors, [field]: error }))
        return error
    }

    const CheckSubmit = () => {
        const usernameError = validateField('username', username)
        const emailError = validateField('email', email)
        const passwordError = validateField('password', password)
    }

    return (
        <View style={Styles.Container}>
            <Text style={Styles.Title}>Registration from</Text>
            <TextInput
                style={Styles.Input}
                placeholder="Username"
                value={username}
                onChangeText={(value) => setUsername(value)}
            />
            {errors.username ? (
                <Text style={Styles.ErrorText}>{errors.username}</Text>
            ) : null}
            
            <TextInput
                style={Styles.Input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={(value) => setEmail(value)}
            />
            {errors.email ? (
                <Text style={Styles.ErrorText}>{errors.email}</Text>
            ) : null}

           <TextInput
                style={Styles.Input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(value) => setPassword(value)}
            />
            {errors.password ? (
                <Text style={Styles.ErrorText}>{errors.password}</Text>
            ) : null}

            <CustomButton
                title='Register'
                backgroundColor='#3CB371'
                onPress={CheckSubmit}
            />
        </View>

    );
};

const Styles = StyleSheet.create({ 
    Container: { 
        flex: 1,
        padding: 20,
        backgroundColor:'#F2F2F2',
    },
    Title: {
        marginBottom: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#363636',
    },
    Input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        marginBottom: 10,
    },
    ErrorText: {
        color:'red',
        marginBottom: 8,
        marginLeft: 5,
        fontSize: 12,
    }
});

export default RegisForm;
