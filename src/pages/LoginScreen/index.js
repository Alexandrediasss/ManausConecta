import React, { useState } from "react";
import {View, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity} from "react-native";
//import * as Animatable from 'react-native-animatable';
import styles from "./style";
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function LoginScreen(){
    const Navigation = useNavigation();
    const [viewPass, setViewPass] = useState(true);

    function onViewPass() {
        setViewPass(!viewPass)
    }
    
    return(
    <KeyboardAvoidingView style={styles.background}>
        <View style= {styles.container}>
         <Image
         source={require('../../img/manausconectaverde.png')}
         />
        </View>

        <View style= {styles.containerLogo}>
            <Text style={styles.textInput}>Login</Text>
            <TextInput
            style = {styles.input}
            placeholder="Fulano@gmail.com"
            autoCorrect={false}
            onChangeText={()=>{}}
            />
            
            

            <Text style={styles.textInput}>Senha</Text>

            <View style={styles.containerInPass}>
    <TextInput
        style={styles.inputWithIcon}
        placeholder="Senha"
        autoCorrect={false}
        secureTextEntry={viewPass}
        onChangeText={() => {}}
    />
    <TouchableOpacity onPress={() => { onViewPass() }}>
        {viewPass == true && <MaterialCommunityIcons name="eye-outline" size={24} color="black" style={styles.iconInsideInput} />}
        {viewPass == false &&<MaterialCommunityIcons name="eye-off-outline" size={24} color="black" style= {styles.iconInsideInput} />}
    </TouchableOpacity>
</View>




                <View style={styles.buttonContainer}>

                    <TouchableOpacity style={styles.buttonCadastrar}>
                        <Text style={styles.textCadastrar}>Cadastrar-se</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonAcessar}>
                        <Text style={styles.textAcessar}>Entrar</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                style={styles.buttonSemCadastro}
                onPress={ () => Navigation.navigate('Informativo1')}>
                        <Text style={styles.textSemCadastro}>Entrar sem cadastro</Text>
                        
                    </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
        
    );
}
