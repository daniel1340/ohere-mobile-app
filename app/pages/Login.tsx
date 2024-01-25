import { FC, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

//icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import InputField from '../components/InputField';

type Props = {
    action: (title: string) => any
}

const Login: FC<Props> = ({action}) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleSubmit = (): void => {
        console.log('Logged In');
        Alert.alert('Logged In');
        action('home')
    }

    const toggleShowPassword = () => setShowPassword(!showPassword)

    return (
        <>
            <KeyboardAvoidingView
                behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
            >
                <ScrollView keyboardDismissMode='on-drag'>
                    <Text style={styles.headerText}>Welcome Back</Text>
                    <InputField 
                        label="Email"
                        rightIcon={<MaterialCommunityIcons name="email" size={24} color={Colors.primary} />}
                        type="email-address"
                        placeholder={'email address'}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <InputField 
                        label="Password"
                        rightIcon={<FontAwesome5 name="lock" size={24} color={Colors.primary} />}
                        type={'default'}
                        placeholder={'password'}
                        value={password}
                        showPassword={showPassword}
                        onChangeText={setPassword}
                        leftIcon={
                            <TouchableOpacity onPress={toggleShowPassword}>
                                {
                                    !showPassword ?
                                    <FontAwesome name="eye" size={24} color={Colors.primary} /> :
                                    <FontAwesome name="eye-slash" size={24} color={Colors.primary} />
                                }
                            </TouchableOpacity>
                        }
                    />

                    <Text style={{ fontSize: 16, color: Colors.white, marginTop: 10}}>
                        Forgot Password? <Text style={{color: Colors.primary}}>Click here</Text>
                    </Text>

                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 16, alignItems: 'center', color: Colors.white}}>
                        Do not have an account?  
                        <TouchableOpacity style={{alignItems: 'center', marginVertical: 'auto'}} onPress={() => action('Sign Up')}>
                            <Text style={{fontSize: 16, color: Colors.primary}}> Click here</Text>
                        </TouchableOpacity>
                    </Text>
                </ScrollView>

            </KeyboardAvoidingView>
        </>
    )
}

export default Login;

const styles = StyleSheet.create({
    headerText: {
        fontSize: 30,
        fontFamily: 'Poppins',
        textAlign: 'center',
        marginBottom: 20,
        color: Colors.white
    },
    button: {
        height: 40,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: Colors.primary,
        marginVertical: 20
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: Colors.white
    }
})