import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100%",
        backgroundColor: '#70845F'
    },
    filho1:{
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    filho2:{
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: "15%",
    },
    img:{
        width: "55%",
        height: "40%",
        borderWidth: 5,       
        borderColor: 'black',
    },
    imgBackground:{
      flex: 1,
      justifyContent: 'center',
      width: "100%",
      height: "100%",
    },
    label1:{
      color: '#70845F',
      fontSize: 15,      
      fontWeight: 'bold',
    },
    label2:{
      color: '#E3E0E0',
      fontSize: 15,      
      fontWeight: 'bold',
    },
    imgLogo:{
      width: '70%',
      height: '70%',
    },
    textLogo:{
      color: '#FFEDD0',
      fontSize: 100,
      fontWeight: '200',
    },
      button1: {
      alignItems: 'center',
      padding: 10,
      borderRadius: 10,         
      borderWidth: 2,           
      borderColor: '#E3E0E0',     
      justifyContent: 'center',
      width: "80%",
      height: "15%",
      backgroundColor: '#E3E0E0',
      marginBottom: 10,
    },
    button2: {
      alignItems: 'center',
      padding: 10,
      borderRadius: 10,         
      borderWidth: 2,           
      borderColor: '#E3E0E0',     
      justifyContent: 'center',
      width: "80%",
      height: "15%",
      backgroundColor: 'transparent',
    },
  });

export default styles