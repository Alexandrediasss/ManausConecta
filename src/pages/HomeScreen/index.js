import { View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './style';

import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const Navigation = useNavigation();

  return (
    <ImageBackground 
    source={require('../../../assets/HomeScreen/fundoHome.png')}
    style={styles.main}>
        <View style={styles.filho1}>
            <Image 
                source={require('../../img/logoBaje.png')}
                style={styles.imgLogo}
            />
        </View>
        <View style={styles.filho2}>
            <TouchableOpacity 
                style={styles.button1} 
                onPress={ () => Navigation.navigate('HomeScreen')}>
                <Image
                    style={styles.imgIcone}
                    source={require('../../../assets/HomeScreen/configuracoes.png')}
                />
                <Text style={styles.label1}>Configurações</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button1} 
                onPress={ () => Navigation.navigate('Hospitais')}>
                    <Image
                    style={styles.imgIcone}
                    source={require('../../../assets/HomeScreen/hospital.png')}
                />
                <Text style={styles.label1}>Hospitais</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button1} 
                onPress={ () => Navigation.navigate('Informativo1')}>
                    <Image
                    style={styles.imgIcone}
                    source={require('../../../assets/HomeScreen/programacao.png')}
                />
                <Text style={styles.label1}>Programação</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.filho3}>
            <TouchableOpacity 
                style={styles.button1} 
                onPress={ () => Navigation.navigate('Curiosidades')}>
                <Image
                    style={styles.imgIcone}
                    source={require('../../../assets/HomeScreen/curiosidades.png')}
                />
                <Text style={styles.label1}>Curiosidades</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button1} 
                onPress={ () => Navigation.navigate('Pontos')}>
                <Image
                    style={styles.imgIcone}
                    source={require('../../../assets/HomeScreen/pontos.png')}
                />
                <Text style={styles.label1}>Pontos</Text>
                <Text style={styles.label1}>turísticos</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button1} 
                onPress={ () => Navigation.navigate('HomeScreen')}>
                <Image
                    style={styles.imgIcone}
                    source={require('../../../assets/HomeScreen/conosco.png')}
                />
                <Text style={styles.label1}>Fale conosco</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.filho4}>
            <View style={styles.box}>
                <Text style={styles.label}>Bem Vindo ao ManausConecta</Text>
            </View>
        </View>
    </ImageBackground>
  );
}