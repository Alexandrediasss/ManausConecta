import React, { useEffect } from "react";
import {
    View,
    Text,
    SafeAreaView, 
    ScrollView,
    TouchableOpacity,
    Image} from "react-native";
import styles from "./style";
import MyInput from "./components/MyInput";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { auth } from "../../../firebase/firebase";

const CadastroScreen = () => {
    const Navigation = useNavigation() 
    const [name,setName] = useState('')
    const [overlay, setOverlay] = useState(false)
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user
                console.log('Registrado como', user.email)
                Navigation.navigate('LoginScreen')
            })
            .catch(error => alert(error.message))
    }

    return (
        <SafeAreaView style={styles.container}>
                <ScrollView style={styles.main} scrollEnabled={false}>
                    <View style={styles.section1} >
                        <Image
                        style={styles.imgLogo}
                        source={require('../../img/logonova.png')} />
                    </View>
                    <View style={styles.section2}>
                        <Text style={styles.text}>Nome</Text>
                        <MyInput 
                        style={styles.input}
                        placeholder='Informe o seu nome'
                        value={name}
                        onChangeText={setName}
                        placeholderTextColor={'#878080'}
                        overlay={(v) => setOverlay(v)} />

                        <Text style={styles.text}>Data</Text>
                        <MyInput 
                        style={styles.input} 
                        placeholder='Informe a sua data de nascimento' 
                        value={age} 
                        onChangeText={setAge}
                        placeholderTextColor={'#878080'}
                        keyboardType='numbers-and-punctuation'
                        overlay={(v) => setOverlay(v)} />

                        <Text style={styles.text}>Email</Text>
                        <MyInput 
                        style={styles.input} 
                        placeholder='Informe o seu e-mail' 
                        value={email} 
                        onChangeText={setEmail}
                        placeholderTextColor={'#878080'}
                        autoCapitalize="none"
                        keyboardType='email-address'
                        overlay={(v) => setOverlay(v)} />

                        <Text style={styles.text}>Senha</Text>
                        <MyInput 
                        style={styles.input} 
                        placeholder='Informe a sua senha' 
                        value={password} 
                        onChangeText={setPassword}
                        placeholderTextColor={'#878080'}
                        overlay={(v) => setOverlay(v)}
                        secureTextEntry />
                    </View>
                    <View style={styles.section3}>
                    <TouchableOpacity 
                            style={[
                            styles.button, 
                            styles.buttonShadow,
                            styles.androidShadow]}
                            onPress={handleSignUp}>
                            <Text style={styles.textButton}>Finalizar cadastro</Text>
                    </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                </View>
            {overlay ? <View style={styles.overlay} />:null}
        </SafeAreaView>
    )
}

export default CadastroScreen;