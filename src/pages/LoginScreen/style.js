import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "#06421D"
    },
    imgLogo: {
        width: "70%",
        height: "70%",
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
        color: '#FFFFFF',
        marginTop: 15,
        marginBottom: 15

    },
    input: {
        backgroundColor: '#FFFFFF',
        width: 350,
        height: 50,
        marginBottom:5,
        fontSize: 10,
        borderRadius: 7,
        padding:7,
        
    },
    buttonContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '40%', 
        marginTop: 15, 
    },
    buttonAcessar: {
        backgroundColor: '#FFEDD0',
        width: 350,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 7,

    },
    textAcessar: {
        color: '#06421D',
        fontSize: 15
    },
    buttonSemCadastro: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        color:'#06421D'
    },
    textSemCadastro: {
        color: '#FFFFFF',
        fontSize: 13,
        marginVertical: 15, //AAAAAA

    },
    inputWithIcon: {
        backgroundColor: '#FFFFFF',
        width: 350,
        height: 50,  
        marginBottom: 145,
        color: '#000',
        fontSize: 10,
        borderRadius: 7,
        padding: 7,
          
    },
    iconInsideInput: {
        position: 'absolute',  // Torna a posição do ícone relativa ao TextInput
        right: 10,  // Coloca o ícone à direita dentro do TextInput
        fontSize: 32,
        top: '-45%',  // Alinha verticalmente no centro do campo
        color: '#06421D'
    },

    containerInPass: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 350  
    }
    

  });

export default styles