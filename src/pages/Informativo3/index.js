import { View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './style';

import { useNavigation } from '@react-navigation/native';

export default function Informativo3() {
  const Navigation = useNavigation();

  return (
    <View style={styles.main}>
        <View style={styles.filho1}>
            <Image
            style={styles.imgLogo}
            source={require('../../img/logoBaje.png')}
            />
        </View>
        <View style={styles.filho2}>
            <Text style={styles.textFilho2}>Explore histórias e</Text>
            <Text style={styles.textFilho2}>notícias de Manaus</Text>
        </View>
        <View style={styles.filho3}>
            <ImageBackground
                style={styles.imgFilho3}
                source={require('../../img/imgInformativo3.png')}
                resizeMode='cover'
                >
                <View style={styles.container1}>
                    <TouchableOpacity
                    style={styles.button} 
                    onPress={ () => Navigation.navigate('Informativo2')}>
                    <Text style={styles.textButton}>➜</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container2}>
                    <TouchableOpacity
                    style={styles.button} 
                    onPress={ () => Navigation.navigate('HomeScreen')}>
                    <Text style={styles.textButton}>➜</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
        <View style={styles.filho4}>
            <View style={styles.bola2}><Text style={styles.textSeta}>➜</Text></View>
            <View style={styles.bola2}><Text style={styles.textSeta}>➜</Text></View>
            <View style={styles.bola1}><Text style={styles.textSeta}>➜</Text></View>
        </View>
    </View>
  );
}