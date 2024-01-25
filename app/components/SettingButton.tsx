import React, { FC, ReactNode } from 'react';
import { View, Text, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

type Props = {
    icon: ReactNode,
    title: string,
    action: (title: string) => any
}

const SettingButton: FC<Props> = ({ icon, title, action }: Props) => {
    return (
        <>
            <TouchableOpacity style={styles.container} onPress={() => action && action(title)}>
                <View style={styles.flexBox}>
                    { icon && icon }
                    <Text style={styles.titleText}>{ title }</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default SettingButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.grey,
        marginVertical: 10,
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    flexBox: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 24,
        color: Colors.black,
        fontWeight: '500'
    }
})