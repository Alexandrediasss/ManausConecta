import { View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './style';

import { useNavigation } from '@react-navigation/native';

export default function BackgroundInicial2() {
  const Navigation = useNavigation();

  return (
    <ImageBackground 
    source={require('../../img/fundo.png')}
    style={styles.main}>
        <View style={styles.filho1}>
          <Animatable.Image 
          source={require('../../img/logo.png')} 
          style={styles.imgLogo} 
          animation="flipInY"
          />
        </View>
        <Animatable.View style={styles.filho2} animation="fadeInUp" delay={500}>
          <TouchableOpacity 
            style={styles.button1} 
            onPress={ () => Navigation.navigate('HomeScreen')}>
            <Text style={styles.label1}>Cadastre-se</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button2} 
            onPress={ () => Navigation.navigate('HomeScreen')}>
            <Text style={styles.label2}>Entrar</Text>
          </TouchableOpacity>
        </Animatable.View>
    </ImageBackground>
  );
}