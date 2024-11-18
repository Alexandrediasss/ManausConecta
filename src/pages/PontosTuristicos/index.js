import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, Linking} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './style';

import { useNavigation } from '@react-navigation/native';

export default function PontosTuristicos() {
  const Navigation = useNavigation();

  const openPlatao = async () => {
    const url = 'https://maps.app.goo.gl/T58BBGMADbJEomd97';  // Defina o URL que você quer abrir
    const supported = await Linking.canOpenURL(url);  // Verifica se o link pode ser aberto

    if (supported) {
      Linking.openURL(url);  // Se suportado, abre o link
    } else {
      console.log("Não é possível abrir o link");
    }
  };

  const openAgosto = async () => {
    const url = 'https://maps.app.goo.gl/RSam2Ygt6c5nE7Zw5';  // Defina o URL que você quer abrir
    const supported = await Linking.canOpenURL(url);  // Verifica se o link pode ser aberto

    if (supported) {
      Linking.openURL(url);  // Se suportado, abre o link
    } else {
      console.log("Não é possível abrir o link");
    }
  };

  const openAdriano = async () => {
    const url = 'https://maps.app.goo.gl/HMzPi9uvnN8Vmrsh9';  // Defina o URL que você quer abrir
    const supported = await Linking.canOpenURL(url);  // Verifica se o link pode ser aberto

    if (supported) {
      Linking.openURL(url);  // Se suportado, abre o link
    } else {
      console.log("Não é possível abrir o link");
    }
  };

  const openMendes = async () => {
    const url = 'https://maps.app.goo.gl/CERnDQ5jmjFWDUEy6';  // Defina o URL que você quer abrir
    const supported = await Linking.canOpenURL(url);  // Verifica se o link pode ser aberto

    if (supported) {
      Linking.openURL(url);  // Se suportado, abre o link
    } else {
      console.log("Não é possível abrir o link");
    }
  };

  const openAzis = async () => {
    const url = 'https://maps.app.goo.gl/7id23spneLZ65PWA9';  // Defina o URL que você quer abrir
    const supported = await Linking.canOpenURL(url);  // Verifica se o link pode ser aberto

    if (supported) {
      Linking.openURL(url);  // Se suportado, abre o link
    } else {
      console.log("Não é possível abrir o link");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.main}>
        <TouchableOpacity 
        onPress={openPlatao}
        style={styles.pai}>
            <View style={styles.filho1}>
                <Image
                    style={styles.img}
                    source={require('../../../assets/PontosTuristicos/musa.png')}
                />
            </View>
            <View style={styles.filho2}>
                <Text style={styles.label1}>Museu da Amazônia (MUSA)</Text>
                <Text style={styles.label2}>Localização: Avenida Margarita, 6305 (antiga Avenida Uirapuru), Jorge Teixeira– Manaus, AM.</Text>
                <Text style={styles.label2}>Horário de Funcionamento: Diariamente (exceto quartas-feiras), das 8h30 às 17h (entrada permitida até as 16h).</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={openAgosto}
        style={styles.pai}>
            <View style={styles.filho1}>
                <Image
                    style={styles.img}
                    source={require('../../../assets/PontosTuristicos/negra.png')}
                />
            </View>
            <View style={styles.filho2}>
                <Text style={styles.label1}>Praia da Ponta Negra</Text>
                <Text style={styles.label2}>Localização: Bairro Ponta Negra, Manaus, AM (cerca de 13 km do centro da cidade).</Text>
                <Text style={styles.label2}>Horário de Funcionamento: Acesso livre 24 horas por dia.</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={openAdriano}
        style={styles.pai}>
            <View style={styles.filho1}>
                <Image
                    style={styles.img}
                    source={require('../../../assets/PontosTuristicos/ilha.png')}
                />
            </View>
            <View style={styles.filho2}>
                <Text style={styles.label1}>Mirante da Ilha Manaus</Text>
                <Text style={styles.label2}>Localização: Av. Sete de Setembro, 8- Centro, Manaus, AM.</Text>
                <Text style={styles.label2}>Horário de Funcionamento: Segunda a quinta, das 10h às 23h; sexta e sábado, das 10h à meia-noite; domingo, das 10h às 22h.</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={openMendes}
        style={styles.pai}>
            <View style={styles.filho1}>
                <Image
                    style={styles.img}
                    source={require('../../../assets/PontosTuristicos/aguas.png')}
                />
            </View>
            <View style={styles.filho2}>
                <Text style={styles.label1}>Encontro das Águas</Text>
                <Text style={styles.label2}>Fenômeno natural onde os rios Negro e Solimões se encontram, sem se misturar por vários quilômetros.</Text>
                <Text style={styles.label2}>Localização: Perto de Manaus, acessível por passeios de barco organizados por agências de turismo.</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={openAzis}
        style={styles.pai}>
            <View style={styles.filho1}>
                <Image
                    style={styles.img}
                    source={require('../../../assets/PontosTuristicos/seringal.png')}
                />
            </View>
            <View style={styles.filho2}>
                <Text style={styles.label1}>Museu do Seringal</Text>
                <Text style={styles.label2}>Localização: Avenida Santos Dumont, 1.000- Tarumã, Manaus, AM.</Text>
                <Text style={styles.label2}> Horário de Funcionamento: De terça a domingo, das 9h às 17h.</Text>
            </View>
        </TouchableOpacity>
    </ScrollView>  
  );
}