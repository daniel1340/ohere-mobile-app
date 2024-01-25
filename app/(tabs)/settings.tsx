import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//icons
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import SettingButton from '../components/SettingButton';
import Colors from '../../constants/Colors';
import Login from '../pages/Login';
import SignUp from '../pages/Signup';

export const SettingsTab = () => {
    const [currentPage, setCurrentPage] = useState<string>('home');

    return (
        <>
            <View style={styles.container}>
                {
                    currentPage === 'home' &&
                    (
                        <View>
                            <Text style={styles.headerText}>Settings</Text>
                            <SettingButton 
                                icon={<Entypo name="login" size={30} color={Colors.primary} />}
                                title={'Login'}
                                action={setCurrentPage}
                            />
                            <SettingButton 
                                icon={<MaterialIcons name="privacy-tip" size={30} color={Colors.primary} />}
                                title={'Privacy Policy'}
                                action={setCurrentPage}
                            />
                            <SettingButton 
                                icon={<FontAwesome name="file-text-o" size={30} color={Colors.primary} />}
                                title={'Terms Of User'}
                                action={setCurrentPage}
                            />
                            <SettingButton 
                                icon={<FontAwesome5 name="star" size={30} color={Colors.primary} />}
                                title={'Rate Us'}
                                action={setCurrentPage}
                            />
                        </View>
                    )
                }
                {
                    currentPage === 'Login' &&
                    (
                        <Login action={setCurrentPage} />
                    )
                }
                {
                    currentPage === 'Sign Up' &&
                    (
                        <SignUp action={setCurrentPage} />
                    )
                }
                {
                    currentPage === 'Privacy Policy' &&
                    (
                        <SignUp action={setCurrentPage} />
                    )
                }
                {
                    currentPage === 'Terms Of User' &&
                    (
                        <SignUp action={setCurrentPage} />
                    )
                }
                {
                    currentPage === 'Rate Us' &&
                    (
                        <SignUp action={setCurrentPage} />
                    )
                }
            </View>
        </>
    )
}

export default SettingsTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 10,
        backgroundColor: Colors.black,
    },
    headerText: {
        fontSize: 30,
        fontFamily: 'Poppins',
        textAlign: 'center',
        marginBottom: 20,
        color: Colors.white
    }
})