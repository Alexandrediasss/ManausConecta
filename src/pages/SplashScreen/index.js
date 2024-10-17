import { View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './style';

import { useNavigation } from '@react-navigation/native';

export default function BackgroundInicial2() {
  const Navigation = useNavigation();

  return (
    <View style={styles.main}>
        <View style={styles.filho1}>
          <Animatable.Image 
          source={require('../../img/manausconectaverde.png')} 
          style={styles.textContainer} 
          animation="flipInY"
          />
        </View>
        <Animatable.View style={styles.filho2} animation="fadeInUp" delay={500}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={ () => Navigation.navigate('Informativo1')}>
            <Text style={styles.label1}>Continuar</Text>
          </TouchableOpacity>
        </Animatable.View>
    </View>
  );
}