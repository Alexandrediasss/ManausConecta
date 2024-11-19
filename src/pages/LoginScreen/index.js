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
import { Header } from "react-native/Libraries/NewAppScreen";

const LoginScreen = () => {
    const Navigation = useNavigation();

    return(
        <Pressable style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.header}></View>
            <View style={styles.main}>
                <View style={styles.section1}>
                    <Image
                    style={styles.imgLogo}
                    source={require('./img/logo.png')} />
                </View>
                <View style={styles.section2}>
                    <Text style={styles.text}>Login</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Digite seu e-email'
                        placeholderTextColor={'#ccc'}
                        autoCapitalize="none"
                        keyboardType='email-address' />
                    <Text style={styles.text}>Senha</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Digite sua senha'
                        placeholderTextColor={'#ccc'}
                        secureTextEntry />
                </View>
                <View style={styles.section3}>
                    <TouchableOpacity 
                        style={[
                        styles.button,
                        styles.buttonShadow,
                        styles.androidShadow,]}
                        onPress={ () => Navigation.navigate('SplashScreen')}>
                            <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[
                        styles.button_2,
                        styles.buttonShadow,
                        styles.androidShadow]}
                        onPress={ () => Navigation.navigate('CadastroScreen')}>
                            <Text style={styles.textButton_2}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}></View>
        </Pressable>
    );
}

export default LoginScreen;