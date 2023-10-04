import React from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native'

function Login() {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.usrInput}
                /* onChangeText={onChangeText} */
                /* value={text} */
                placeholder="Username"
            />
            <TextInput
                style={styles.passwdInput}
                /* onChangeText={onChangeText} */
                /* value={text} */
                placeholder="Password"
                secureTextEntry={true}
            />
            <Button title="Login"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    usrInput: {
        height: 50,
        width: 200,
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        paddingStart: 20
    },
    passwdInput: {
        height: 50,
        width: 200,
        borderWidth: 1,
        borderRadius: 10,
        paddingStart: 20,
    }
})

export default Login
