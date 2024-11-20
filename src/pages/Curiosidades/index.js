import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, Linking} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './style';

import { useNavigation } from '@react-navigation/native';

export default function Curiosidades() {
  const Navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.main}>
        <View style={styles.pai}>
            <View style={styles.filho1}>
                <Image
                style={styles.imgArtigo}
                source={require('../../../assets/Curiosidades/artigo.png')}
                />
                <Text style={styles.titulo}>História de Manaus</Text>
                <Image
                style={styles.imgArtigo}
                source={require('../../../assets/Curiosidades/artigo.png')}
                />
            </View>
            <View style={styles.filho2}>
                <Text style={styles.descricao}> Fundada em 1669 com a construção da Fortaleza de São José do Rio Negro. Seu desenvolvimento está ligado ao Ciclo da Borracha, que trouxe riqueza e modernização no final do século XIX e início do século XX. Manaus é conhecida por sua diversidade cultural, influenciada por indígenas, africanos e europeus.</Text>
                <Image
                    style={styles.img} 
                    source={require('../../../assets/Curiosidades/teatroamazonas.png')}
                    resizeMode='contain'
                />
            </View>
        </View>
        <View style={styles.pai}>
            <View style={styles.filho1}>
                <Image
                style={styles.imgArtigo}
                source={require('../../../assets/Curiosidades/artigo.png')}
                />
                <Text style={styles.titulo}>UFAM</Text>
                <Image
                style={styles.imgArtigo}
                source={require('../../../assets/Curiosidades/artigo.png')}
                />
            </View>
            <View style={styles.filho2}>
                <Text style={styles.descricao}>A primeira universidade do Brasil foi fundada em Manaus: Escola Universitária Livre de Manáos (hoje UFAM). Forte influência inglesa, com construções como o Mercado Municipal e o Porto, além da introdução da luz elétrica e bondes.</Text>
                <Image
                    style={styles.img} 
                    source={require('../../../assets/Curiosidades/ufam.png')}
                    resizeMode='contain'
                />
            </View>
        </View>
    </ScrollView>  
  );
}