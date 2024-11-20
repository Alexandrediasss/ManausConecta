import React from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Pressable,
    Keyboard} from "react-native";
import styles from "../LoginScreen/style";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const Navigation = useNavigation();

    return(
        <Pressable style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.header}></View>
            <View 
            style={styles.main}>
                <View style={styles.section1}>
                    <Image
                    style={styles.imgLogo}
                    source={require('../../img/logo.png')} />
                </View>
                <View style={styles.section2}>
                    <Text style={styles.text}>Email</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Informe o seu e-mail'
                        placeholderTextColor={'#878080'}
                        autoCapitalize="none"
                        keyboardType='email-address' />
                    <Text style={styles.text}>Senha</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Informe a sua senha'
                        placeholderTextColor={'#878080'}
                        secureTextEntry />
                </View>
                <View style={styles.section3}>
                    <TouchableOpacity 
                        style={[
                        styles.button,
                        styles.buttonShadow,
                        styles.androidShadow,]}
                        onPress={ () => Navigation.navigate('CadastroScreen')}>
                            <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}></View>
        </Pressable>
    );
}

export default LoginScreen;