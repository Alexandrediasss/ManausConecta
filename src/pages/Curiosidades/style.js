import { StyleSheet, TextInputBase } from "react-native";

const styles = StyleSheet.create({
    main:{
        backgroundColor: '#919B8F',
        alignItems: 'center',
        flexGrow: 1,
        paddingBottom: 5,
    },
    scroll: {
        flexGrow: 1, // Garante que o ScrollView cresça com o conteúdo
        alignItems: 'center', // Centraliza o conteúdo horizontalmente (opcional)
        paddingBottom: 20, // Espaço extra no final para melhor rolagem
    },    
    pai:{
        width: "90%",
        height: 400,
        marginTop: 20,
        backgroundColor: '#242F1F',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        elevation: 5,
    },
    filho1:{
        flex: 1,
        width: "90%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    filho2:{
        width: "90%",
        height: 340,
        marginBottom: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    img:{
        width: "90%",
        height: "70%",
    },
    imgArtigo:{
        width: "10%",
        height: "55%",
    },
    titulo:{
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: "10%",
    },
    descricao:{
        fontSize: 12,
        width:"90%",
        marginTop: 5,
        textAlign: 'justify',
    },
  });

export default styles