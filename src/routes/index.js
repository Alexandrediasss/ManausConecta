import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from '../pages/SplashScreen'
import LoginScreen from '../pages/LoginScreen'
import Informativo1 from "../pages/Informativo1";
import Informativo2 from "../pages/Informativo2";
import Informativo3 from "../pages/Informativo3";
import HomeScreen from "../pages/HomeScreen";
import Hospitais from "../pages/Hospitais";
import PontosTuristicos from "../pages/PontosTuristicos";
import Curiosidades from "../pages/Curiosidades";
import CadastroScreen from "../pages/CadastroScreen";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="CadastroScreen"
                component={CadastroScreen}
                options={{
                    headerShown: true,
                    headerTitle: '',
                    headerBackTitle: 'Voltar',
                    headerStyle: { backgroundColor: '#242F1F' },
                    headerTintColor: '#fff',
            }}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                headerShown: true,
                headerTitle: '',
                headerBackTitle: 'Voltar',
                headerStyle: { backgroundColor: '#242F1F' },
                headerTintColor: '#fff',
            }}
            />
            <Stack.Screen
                name="Informativo1"
                component={Informativo1}
                options={{headerShown: false}}  
            />
            <Stack.Screen
                name="Informativo2"
                component={Informativo2}
                options={{headerShown: false}}  
            />
            <Stack.Screen
                name="Informativo3"
                component={Informativo3}
                options={{headerShown: false}}  
            />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{headerShown: false}}  
            />
            <Stack.Screen
                name="Hospitais"
                component={Hospitais}
                options={{
                    headerShown: true, 
                    headerBackTitle: 'Voltar',
                    headerStyle: { backgroundColor: '#242F1F' },
                    headerTintColor: '#fff',
            }} 
            />
            <Stack.Screen
                name="Pontos"
                component={PontosTuristicos}
                options={{
                    headerShown: true, 
                    headerTitle: 'Pontos Turísticos',
                    headerBackTitle: 'Voltar',
                    headerStyle: { backgroundColor: '#242F1F' },
                    headerTintColor: '#fff',
            }} 
            />
            <Stack.Screen
                name="Curiosidades"
                component={Curiosidades}
                options={{
                    headerShown: true, 
                    headerTitle: 'Curiosidades',
                    headerBackTitle: 'Voltar',
                    headerStyle: { backgroundColor: '#242F1F' },
                    headerTintColor: '#fff',
            }} 
            />
        </Stack.Navigator>
    )
}