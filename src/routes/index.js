import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from '../pages/SplashScreen'
import LoginScreen from '../pages/LoginScreen'
import Informativo1 from "../pages/Informativo1";
import Informativo2 from "../pages/Informativo2";
import Informativo3 from "../pages/Informativo3";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{headerShown: false}}  
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
        </Stack.Navigator>
    )
}