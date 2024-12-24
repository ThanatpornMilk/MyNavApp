import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";

const ModalScreen = ({ navigation }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={Styles.Container}>
            <Text> This is Modal Screen</Text>
            <TouchableOpacity
                style={Styles.okButton}
                onPress={() => setIsVisible(true)}
            >
                <Text style={Styles.okButtonText}>Open Modal</Text>
            </TouchableOpacity>
            <Modal transparent={true} animationType="fade" visible={isVisible}>
                <View style={Styles.modalOverlay}>
                    <View style={Styles.modalContainer}>
                        <Text style={Styles.title}>Welcome Message.</Text>
                        <Text style={Styles.msg}>ยินดีต้อนรับ เข้าสู่โลกแห่งจินตนาการ</Text>
                        <TouchableOpacity 
                            style={Styles.okButton}
                            onPress={() => {
                                setIsVisible(false);
                                navigation.navigate('List');
                            }}
                        >
                            <Text style={Styles.okButtonText}>เข้าสู่ระบบ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const Styles = StyleSheet.create({ 
    Container: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFAFA',
    },
    modalOverlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, .5)'
    },
    modalContainer: {
        width: 300,
        backgroundColor: '#FFFAFA',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        elevation: 5,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    msg: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    okButton: {
        backgroundColor: '#B2DFEE',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    okButtonText: {
        fontSize: 18,
        fontWeight: 'semibold',
        color: "black",
    },
});

export default ModalScreen;
