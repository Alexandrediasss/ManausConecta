import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, Linking} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './style';

import { useNavigation } from '@react-navigation/native';

export default function Hospitais() {
  const Navigation = useNavigation();

  const openPlatao = async () => {
    const url = 'https://maps.app.goo.gl/WtAPLVPJCv26bD1w9';  // Defina o URL que você quer abrir
    const supported = await Linking.canOpenURL(url);  // Verifica se o link pode ser aberto

    if (supported) {
      Linking.openURL(url);  // Se suportado, abre o link
    } else {
      console.log("Não é possível abrir o link");
    }
  };

  const openAgosto = async () => {
    const url = 'https://maps.app.goo.gl/s9w8kMtwB4WmPKGn7';  // Defina o URL que você quer abrir
    const supported = await Linking.canOpenURL(url);  // Verifica se o link pode ser aberto

    if (supported) {
      Linking.openURL(url);  // Se suportado, abre o link
    } else {
      console.log("Não é possível abrir o link");
    }
  };

  const openAdriano = async () => {
    const url = 'https://maps.app.goo.gl/v9ZA1gY14YVmGagv5';  // Defina o URL que você quer abrir
    const supported = await Linking.canOpenURL(url);  // Verifica se o link pode ser aberto

    if (supported) {
      Linking.openURL(url);  // Se suportado, abre o link
    } else {
      console.log("Não é possível abrir o link");
    }
  };

  const openMendes = async () => {
    const url = 'https://maps.app.goo.gl/UXNr6mfhub1L9DbA6';  // Defina o URL que você quer abrir
    const supported = await Linking.canOpenURL(url);  // Verifica se o link pode ser aberto

    if (supported) {
      Linking.openURL(url);  // Se suportado, abre o link
    } else {
      console.log("Não é possível abrir o link");
    }
  };

  const openAzis = async () => {
    const url = 'https://maps.app.goo.gl/PsxRtGmh2xzDASfv7';  // Defina o URL que você quer abrir
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
                    source={require('../../../assets/Hospitais/platao.png')}
                />
            </View>
            <View style={styles.filho2}>
                <Text style={styles.label1}>Hospital e Pronto-Socorro Dr. Aristóteles Platão Bezerra De Araújo </Text>
                <Text style={styles.label2}>Horário de atendimento: Aberto 24 horas.</Text>
                <Text style={styles.label2}>Endereço: Av. Autaz Mirim, s/n - Jorge Teixeira, Manaus-AM.</Text>
                <Text style={styles.label2}>Telefone: (92) 3647-4101.</Text>
                <Text style={styles.label2}>Linhas de Ônibus: 352, 355, 418, 600.</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={openAgosto}
        style={styles.pai}>
            <View style={styles.filho1}>
                <Image
                    style={styles.img}
                    source={require('../../../assets/Hospitais/agosto.png')}
                />
            </View>
            <View style={styles.filho2}>
                <Text style={styles.label1}>Hospital e Pronto-Socorro 28 de Agosto</Text>
                <Text style={styles.label2}>Horário de atendimento: Aberto 24 horas.</Text>
                <Text style={styles.label2}>Endereço: Av. Mário Ypiranga, 1581, Adrianópolis, Manaus-AM.</Text>
                <Text style={styles.label2}>Telefone: (92) 3643-7100.</Text>
                <Text style={styles.label2}>Linhas de Ônibus: 118, 215, 304, 323, 359, 415, 550.</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={openAdriano}
        style={styles.pai}>
            <View style={styles.filho1}>
                <Image
                    style={styles.img}
                    source={require('../../../assets/Hospitais/adrianojorge.png')}
                />
            </View>
            <View style={styles.filho2}>
                <Text style={styles.label1}>Hospital Fundação Adriano Jorge</Text>
                <Text style={styles.label2}>Horário de atendimento: Aberto 24 horas.</Text>
                <Text style={styles.label2}>Endereço: Rua Belém, 1449 - São Francisco, Manaus-AM.</Text>
                <Text style={styles.label2}>Telefone: (92) 3612-2200.</Text>
                <Text style={styles.label2}>Linhas de Ônibus: 013, 118, 128, 212, 328, 351, 414, 446, 505, 507</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={openMendes}
        style={styles.pai}>
            <View style={styles.filho1}>
                <Image
                    style={styles.img}
                    source={require('../../../assets/Hospitais/medes.png')}
                />
            </View>
            <View style={styles.filho2}>
                <Text style={styles.label1}>Hospital do Coração Francisca Mendes</Text>
                <Text style={styles.label2}>Horário de atendimento: Aberto 24 horas.</Text>
                <Text style={styles.label2}>Endereço: Av. Camapuã, 108, Cidade Nova II, Manaus-AM.</Text>
                <Text style={styles.label2}>Telefone: (92) 3649-2750.</Text>
                <Text style={styles.label2}>Linhas de Õnibus: 408, 422, 640, 641, 352.</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={openAzis}
        style={styles.pai}>
            <View style={styles.filho1}>
                <Image
                    style={styles.img}
                    source={require('../../../assets/Hospitais/azis.png')}
                />
            </View>
            <View style={styles.filho2}>
                <Text style={styles.label1}>Hospital Delphina Rinaldi Abdel Aziz</Text>
                <Text style={styles.label2}>Horário de atendimento: Aberto 24 horas.</Text>
                <Text style={styles.label2}>Endereço: Av. Torquato Tapajós, 9250, Colônia Terra Nova, Manaus-AM.</Text>
                <Text style={styles.label2}>Telefone: (92) 3090-0500</Text>
                <Text style={styles.label2}>Linhas de Ônibus: 028, 316.1, 321, 356.</Text>
            </View>
        </TouchableOpacity>
    </ScrollView>  
  );
}