import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import CustomButton from "./Components/CustomButton";

const RegisForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', email: '', password: '' })

    //พิมพ์แล้ว text ที่แจ้ง error จะหายทันที
    const handleChange = (field, value) => {
        switch (field) {
            case 'username':
                setUsername(value)
                setErrors((preErrors) => ({ ...preErrors, username: '' }))
                break;
            case 'email':
                setEmail(value)
                setErrors((preErrors) => ({ ...preErrors, email: '' }))
                break;
            case 'password':
                setPassword(value)
                setErrors((preErrors) => ({ ...preErrors, password: '' }))
                break;
            default:
                break;
        }
    }
    const validateField = (field, value) => {
        let error = ''
        if (!value) { 
            error = 'This Field is required'
        } else {
            if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) {//ขึ้นต้นด้วยสตริง1ตัวขึ้นไปตามด้วย@ตามด้วยสตริง1ตัวขึ้นไปตามด้วย.ตามด้วยสตริง เช็คแบบหลวมๆ
                error = 'Invalid email address'
            }else if (field === 'password' && value.length < 8) {
                error = "Invalid password format"
            }
        }
        
        setErrors((preErrors) => ({ ...preErrors, [field]: error }))
        return error
    }

    const CheckSubmit = () => {
        const usernameError = validateField('username', username)
        const emailError = validateField('email', email)
        const passwordError = validateField('password', password)

        if (!usernameError && !emailError && !passwordError) {
            Alert.alert("Registration Result: ", 'SUCCESS !!')
            setUsername('')
            setEmail('')
            setPassword('')
            setErrors({ username: '', email: '', password: '' })
        }
    }

    return (
        <View style={Styles.Container}>
            <Text style={Styles.Title}>Registration from</Text>
            <TextInput
                style={Styles.Input}
                placeholder="Username"
                value={username}
                // onChangeText={(value) => setUsername(value)}
                onChangeText={(value) => handleChange('username',value)}
                onBlur={() => validateField('username',username)} //ไม่ต้องรอกดปุ่มregisterแค่กดไปช่องอื่นก็ขึ้นtextแดงเลย
            />
            {errors.username ? (
                <Text style={Styles.ErrorText}>{errors.username}</Text>
            ) : null}
            
            <TextInput
                style={Styles.Input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                // onChangeText={(value) => setEmail(value)}
                onChangeText={(value) => handleChange('email',value)}
                onBlur={() => validateField('email',email)}
            />
            {errors.email ? (
                <Text style={Styles.ErrorText}>{errors.email}</Text>
            ) : null}

           <TextInput
                style={Styles.Input}
                placeholder="Password"
                secureTextEntry
                value={password}
                // onChangeText={(value) => setPassword(value)}
                onChangeText={(value) => handleChange('password',value)}
                onBlur={() => validateField('password',password)}
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
