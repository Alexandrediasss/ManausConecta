import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "#FFEDD0"
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        flexDirection: 'row',
        
    },
    textInput: {
        color: '#CA643C',
        marginTop: 15,
        marginBottom: 15

    },
    input: {
        backgroundColor: '#70845F',
        width: 350,
        marginBottom:15,
        color:'#fff',
        fontSize: 15,
        borderRadius: 2,
        padding:7,
        
    },
    buttonContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '40%', 
        marginTop: 15, 
    },
    buttonAcessar: {
        backgroundColor: '#CA643C',
        width: '100%',
        height:60,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 15,

    },
    buttonCadastrar: {
        backgroundColor: '#fff',
        width: '100%',
        height:60,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 15,
        marginRight: 20

    },
    textAcessar: {
        color: '#FFEDD0',
        fontSize: 15

    },
    textCadastrar: {
        color: '#CA643C',
        fontSize: 15

    },
    buttonSemCadastro: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25


    },
    textSemCadastro: {
        color: '#CA643C',
        fontSize: 13

    },
    inputWithIcon: {
        backgroundColor: '#70845F',
        width: 350,  
        marginBottom: 15,
        color: '#fff',
        fontSize: 15,
        borderRadius: 2,
        padding: 7,
          
    },
    iconInsideInput: {
        position: 'absolute',  // Torna a posição do ícone relativa ao TextInput
        right: 10,  // Coloca o ícone à direita dentro do TextInput
        top: '-35%',  // Alinha verticalmente no centro do campo
        color: '#FFEDD0'
    },

    containerInPass: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 350  
    }
    

  });

export default styles