import React, { createRef, useState } from 'react'
import { Text, 
    View, 
    TouchableOpacity, 
    StyleSheet, 
    Modal, 
    TextInput, 
    SafeAreaView,
    Platform} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const MyInput = (props) => {
    const [modalVisible, setmodalVisible] = useState(false)
    const inputRef = createRef()
    
    function setVisibility(value) {
        setmodalVisible(value)
        props.overlay(value)
    }
    function setFocus() {
        if(Platform.OS == 'android') {
            setTimeout(() => inputRef.current.focus(), 50)
        }
    }
    return (
        <TouchableOpacity activeOpacity={1} style={styles.inputContainer} onPress={()=>setVisibility(true)}>
            <Text style={[styles.inputText, { color: props.value === '' ? '#878080' : '#000' }]}>
                {props.value === '' ? props.placeholder : props.secureTextEntry ? '•'.repeat(props.value.length) : props.value}
            </Text>

            <Modal 
                visible={modalVisible} 
                onRequestClose={() => {
                    setVisibility(false)
                }}
                onShow={setFocus}
                animationType='slide'
                transparent>
                <SafeAreaView style={{ flex: 1 }}>
                    <TouchableOpacity 
                    style={styles.outside} 
                    onPress={() => {
                        setVisibility(false);
                    }} />
                    <View style={styles.inputWrapper}>
                        <TextInput {...props}
                        ref={inputRef}
                        autoFocus={Platform.OS === 'ios'} 
                        onBlur={() => setVisibility(false)}
                        onSubmitEditing={() => setVisibility(false)} />
                    </View>
                </SafeAreaView>
            </Modal>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#E3E0E0',
        justifyContent: 'center',
        borderRadius: 10,
        width: '80%',
        height: hp(6),
        marginTop: wp(3),
        paddingLeft: 10,
        paddingHorizontal: 20,
    },
    inputWrapper: {
        flex: Platform.OS == 'ios' ? 1 : 0,
        backgroundColor: '#242F1F',
        paddingTop: 20,
        paddingBottom: Platform.OS === 'ios' ? 0 : 20,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    outside: {
        flex: 1,
    }
})

export default MyInput;