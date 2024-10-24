import React from "react";
import {
    View,
    Text,
    SafeAreaView, 
    ScrollView,
    TouchableOpacity} from "react-native";
import styles from "./style";
import MyInput from "./components/MyInput";
import { useState } from "react";

const CadastroScreen = () => {
    const [name,setName] = useState('')
    const [overlay, setOverlay] = useState(false)
    const [email, setEmail] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [age, setAge] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirm_password] = useState('')

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <ScrollView style={styles.main} scrollEnabled={false}>
                    <View style={styles.section1}>
                        <Text style={styles.text}>Nome</Text>
                        <MyInput 
                        style={styles.input}
                        placeholder='Digite seu nome'
                        value={name}
                        onChangeText={setName}
                        placeholderTextColor={'#ccc'}
                        overlay={(v) => setOverlay(v)} />
                        
                        <Text style={styles.text}>E-mail</Text>
                        <MyInput 
                        style={styles.input} 
                        placeholder='Digite seu e-mail' 
                        value={email} 
                        onChangeText={setEmail}
                        placeholderTextColor={'#ccc'}
                        autoCapitalize="none"
                        keyboardType='email-address'
                        overlay={(v) => setOverlay(v)} />

                        <Text style={styles.text}>Telefone</Text>
                        <MyInput 
                        style={styles.input} 
                        placeholder='Ex: (00) 00000-0000' 
                        value={phone_number} 
                        onChangeText={setPhone_number}
                        placeholderTextColor={'#ccc'}
                        keyboardType='phone-pad'
                        overlay={(v) => setOverlay(v)} />

                        <Text style={styles.text}>Idade</Text>
                        <MyInput 
                        style={styles.input} 
                        placeholder='Digite sua idade' 
                        value={age} 
                        onChangeText={setAge}
                        placeholderTextColor={'#ccc'}
                        keyboardType = 'number-pad'
                        overlay={(v) => setOverlay(v)} />

                        <Text style={styles.text}>Senha</Text>
                        <MyInput 
                        style={styles.input} 
                        placeholder='Digite sua senha' 
                        value={password} 
                        onChangeText={setPassword}
                        placeholderTextColor={'#ccc'}
                        overlay={(v) => setOverlay(v)}
                        secureTextEntry />

                        <Text style={styles.text}>Confirme a senha</Text>
                        <MyInput
                        style={styles.input}
                        placeholder='Confirme sua senha'
                        value={confirm_password}
                        onChangeText={setConfirm_password}
                        placeholderTextColor={'#ccc'}
                        overlay={(v) => setOverlay(v)}
                        secureTextEntry />
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <TouchableOpacity 
                        style={[
                        styles.button, 
                        styles.buttonShadow,
                        styles.androidShadow]}>
                            <Text style={styles.textButton}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {overlay ? <View style={styles.overlay} />:null}
        </SafeAreaView>
    )
}

export default CadastroScreen;