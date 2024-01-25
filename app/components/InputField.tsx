import { FC, ReactNode } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native';
import Colors from '../../constants/Colors';

type Props = {
    label?: string,
    rightIcon?: ReactNode,
    leftIcon?: ReactNode,
    value: string | number | any,
    type: KeyboardTypeOptions,
    placeholder?: string,
    showPassword?: boolean
    onChangeText: (data: any) => any
}

const InputField: FC<Props> = ({ 
    label, 
    rightIcon, 
    leftIcon,
    value,
    type, 
    placeholder,
    showPassword,
    onChangeText
}) => {
    return (
        <>
            <View style={{marginVertical: 10}}>
                {label !== '' && <Text style={styles.label}>{label}</Text>}
                <View style={styles.inputBox}>
                    {rightIcon && rightIcon}
                    <TextInput
                        style={styles.inputField}
                        value={value}
                        keyboardType={type}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        placeholderTextColor={'#F2F1F1'}
                        secureTextEntry={!showPassword ? true : false}
                        
                    />
                    {leftIcon && leftIcon}
                </View>
            </View>
        </>
    )
}

export default InputField

const styles = StyleSheet.create({

    label: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'normal',
        marginBottom: 5
    },
    inputBox: {
        backgroundColor: Colors.white,
        paddingVertical: 6,
        paddingHorizontal: 10,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 10,
        borderRadius: 8,
        alignItems: 'center'
    },
    inputField: {
        flex: 1,
        textAlign: 'left',
        alignItems: 'flex-start',
        height: 40,
        color: Colors.black,
        fontSize: 18,
    }
})