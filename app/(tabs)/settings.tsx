import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import useTheme from '@/hooks/useTheme';

export default function Settings() {
    const { toggleDarkMode } = useTheme();

    return (
        <View style={styles.container}>
            <Text>This is Settings Page</Text>
            <TouchableOpacity onPress={toggleDarkMode}>
                <Text>Toggle Theme</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        fontSize: 16,
        textDecorationLine: 'underline',
        color: '#0000FF',
    },
});
