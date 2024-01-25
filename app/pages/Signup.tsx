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

const SignUp: FC<Props> = ({action}) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    const handleSubmit = (): void => {
        console.log('Logged In');
        Alert.alert('Logged In');
        action('home')
    }

    const toggleShowPassword = () => setShowPassword(!showPassword)
    const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword)

    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView keyboardDismissMode='on-drag'>
                    <Text style={styles.headerText}>Thanks for choosing us</Text>
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

                    <InputField 
                        label="Confirm Password"
                        rightIcon={<FontAwesome5 name="lock" size={24} color={Colors.primary} />}
                        type={'default'}
                        placeholder={'confirm password'}
                        value={confirmPassword}
                        showPassword={showConfirmPassword}
                        onChangeText={setConfirmPassword}
                        leftIcon={
                            <TouchableOpacity onPress={toggleShowConfirmPassword}>
                                {
                                    !showConfirmPassword ?
                                    <FontAwesome name="eye" size={24} color={Colors.primary} /> :
                                    <FontAwesome name="eye-slash" size={24} color={Colors.primary} />
                                }
                            </TouchableOpacity>
                        }
                    />


                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>

                </ScrollView>
            </KeyboardAvoidingView>
        </>
    )
}

export default SignUp;

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