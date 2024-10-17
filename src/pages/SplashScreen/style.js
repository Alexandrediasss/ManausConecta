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
      fontSize: 12,      
      fontWeight: 'bold',
    },
    textContainer:{
      width: "50%",
    },
    textLogo:{
      color: '#FFEDD0',
      fontSize: 100,
      fontWeight: '200',
    },
      button: {
      alignItems: 'center',
      padding: 10,
      borderRadius: 10,         
      borderWidth: 2,           
      borderColor: '#FFEDD0',     
      justifyContent: 'center',
      width: "80%",
      height: "15%",
      backgroundColor: '#FFEDD0',
    },
  });

export default styles