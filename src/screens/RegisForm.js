import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import CustomButton from "./Components/CustomButton";

const RegisForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', email: '', password: '', confirmPassword: '' });

    // พิมพ์แล้ว text ที่แจ้ง error จะหายทันที
    const handleChange = (field, value) => {
        switch (field) {
            case 'username':
                setUsername(value);
                setErrors((prevErrors) => ({ ...prevErrors, username: '' }));
                break;
            case 'email':
                setEmail(value);
                setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
                break;
            case 'password':
                setPassword(value);
                setErrors((prevErrors) => ({ ...prevErrors, password: '', confirmPassword: '' }));
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: '' }));
                break;
            default:
                break;
        }
    };

    const validateField = (field, value) => {
        let error = '';
        if (!value) {
            error = 'This field is required';
        } else {
            if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) { 
                error = 'Invalid email address';
            } else if (field === 'password' && value.length < 8) {
                error = 'Password must be at least 8 characters';
            } else if (field === 'confirmPassword' && value !== password) {
                error = 'Passwords do not match';
            }
        }

        setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
        return error;
    };

    const CheckSubmit = () => {
        const usernameError = validateField('username', username);
        const emailError = validateField('email', email);
        const passwordError = validateField('password', password);
        const confirmPasswordError = validateField('confirmPassword', confirmPassword);

        if (!usernameError && !emailError && !passwordError && !confirmPasswordError) {
            Alert.alert("Registration Result:", "SUCCESS !!");
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setErrors({ username: '', email: '', password: '', confirmPassword: '' });
        }
    };

    return (
        <View style={Styles.Container}>
            <Text style={Styles.Title}>Registration Form</Text>
            
            <TextInput
                style={Styles.Input}
                placeholder="Username"
                value={username}
                onChangeText={(value) => handleChange('username', value)}
                onBlur={() => validateField('username', username)}
            />
            {errors.username ? <Text style={Styles.ErrorText}>{errors.username}</Text> : null}

            <TextInput
                style={Styles.Input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={(value) => handleChange('email', value)}
                onBlur={() => validateField('email', email)}
            />
            {errors.email ? <Text style={Styles.ErrorText}>{errors.email}</Text> : null}

            <TextInput
                style={Styles.Input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(value) => handleChange('password', value)}
                onBlur={() => validateField('password', password)}
            />
            {errors.password ? <Text style={Styles.ErrorText}>{errors.password}</Text> : null}

            <TextInput
                style={Styles.Input}
                placeholder="Confirm Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={(value) => handleChange('confirmPassword', value)}
                onBlur={() => validateField('confirmPassword', confirmPassword)}
            />
            {errors.confirmPassword ? <Text style={Styles.ErrorText}>{errors.confirmPassword}</Text> : null}

            <CustomButton
                title="Register"
                backgroundColor="#3CB371"
                onPress={CheckSubmit}
            />
        </View>
    );
};

const Styles = StyleSheet.create({ 
    Container: { 
        flex: 1,
        padding: 20,
        backgroundColor: '#F2F2F2',
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
        color: 'red',
        marginBottom: 8,
        marginLeft: 5,
        fontSize: 12,
    },
});

export default RegisForm;
