import { StyleSheet, TextInputBase } from "react-native";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#70845F'
    },
    imgLogo:{
        width: "50%",
    },
    filho1:{
        flex:1.5,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    filho2:{
        flex:0.5,
        backgroundColor: '#FFEDD0',
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    filho3:{
        flex:1.5, 
        alignItems:'center',
        justifyContent: 'center',
        width: "100%",
    },
    filho4:{
        flex:0.5,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    imgFilho3:{
        flex: 1,
        width: "100%",
        alignContent:'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    container1:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        transform: [{ rotate: '180deg' }],
    },
    container2:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },

    textFilho2:{
        color: '#CA643C',
        fontSize: 30,
        textAlign: 'center',
        textShadowColor: '#a2a2a2', // Cor da sombra
        textShadowOffset: { width: -1, height: 2.5 }, // Deslocamento da sombra
        textShadowRadius: 2, // Raio de desfoque da sombra  
    },

    button: {
        backgroundColor: '#FFEDD0',
        borderRadius: 25,    
        width: 50,          
        height: 50,
        justifyContent: 'center', 
        alignItems: 'center',     
        margin: 5,
    },
    textButton: {
        color: '#CA643C',
        fontSize: 20,   
    },
    textSeta:{
        color: 'transparent',
        fontSize: 20,  
    },
    bola1:{
        backgroundColor: '#FFEDD0',
        borderRadius: 25,  
        borderWidth: 2,  
        borderColor: '#FFEDD0',
        width: 25,          
        height: 25,
        justifyContent: 'center', 
        alignItems: 'center',
        marginRight: 5,
        marginLeft: 5,
    },
    bola2:{
        borderRadius: 25,  
        borderWidth: 2,  
        borderColor: '#FFEDD0',
        width: 25,          
        height: 25,
        justifyContent: 'center', 
        alignItems: 'center',
        marginRight: 5,
        marginLeft: 5,
    },
  });

export default styles