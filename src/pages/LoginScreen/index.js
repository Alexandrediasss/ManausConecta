import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard,
    ScrollView} from "react-native";
import styles from "../LoginScreen/style";
import { useNavigation } from '@react-navigation/native';
import { auth } from "../../../firebase";

const LoginScreen = () => {
    const Navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        auth 
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user
                console.log('Login realizado como', user.email)
                Navigation.navigate('HomeScreen')
            })
            .catch(error => alert(error.message))
    }
    return(
        <ScrollView style={styles.container} onPress={Keyboard.dismiss} scrollEnabled={false}>
            <View style={styles.header}></View>
            <View 
            style={styles.main}>
                <View style={styles.section1}>
                    <Image
                    style={styles.imgLogo}
                    source={require('../../img/logonova.png')} />
                </View>
                <View style={styles.section2}>
                    <Text style={styles.text}>Email</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Informe o seu e-mail'
                        placeholderTextColor={'#878080'}
                        autoCapitalize="none"
                        keyboardType='email-address'
                        onChangeText={text => setEmail(text)} />
                    
                    <Text style={styles.text}>Senha</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Informe a sua senha'
                        placeholderTextColor={'#878080'}
                        secureTextEntry
                        onChangeText={text => setPassword(text)} />
                </View>
                <View style={styles.section3}>
                    <TouchableOpacity 
                        style={[
                        styles.button,
                        styles.buttonShadow,
                        styles.androidShadow,]}
                        onPress={handleLogin}>
                            <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}></View>
        </ScrollView>
    );
}

export default LoginScreen;