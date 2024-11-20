import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from "react-native";
// import * as Animatable from 'react-native-animatable';
import styles from "./style";
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function LoginScreen() {
  const Navigation = useNavigation();
  const [viewPass, setViewPass] = useState(true);

  function onViewPass() {
    setViewPass(!viewPass);
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
        <Image
          source={require('../../img/logoBaje.png')}
          style={styles.imgLogo}
        />
      </View>

      <View style={styles.containerLogo}>
        <Text style={styles.textInput}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o seu email"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <Text style={styles.textInput}>Senha</Text>

        <View style={styles.containerInPass}>
          <TextInput
            style={styles.inputWithIcon}
            placeholder="Informe a sua senha"
            autoCorrect={false}
            secureTextEntry={viewPass}
            onChangeText={() => {}}
          />
          <TouchableOpacity onPress={() => { onViewPass() }}>
            {viewPass === true && (
              <MaterialCommunityIcons name="eye-off-outline" size={24} color="black" style={styles.iconInsideInput} />
            )}
            {viewPass === false && (
              <MaterialCommunityIcons name="eye-outline" size={24} color="black" style={styles.iconInsideInput} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonAcessar}
            onPress={() => Navigation.navigate('HomeScreen')}
          >
            <Text style={styles.textAcessar}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttonSemCadastro}>
          <Text style={styles.textSemCadastro}> </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
