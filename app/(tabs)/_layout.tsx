import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '@/hooks/useTheme';

export default function RootLayout() {
    const { colors } = useTheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    backgroundColor: colors.surface,
                    borderColor: colors.border,
                },
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='flash-outline'
                            color={color}
                            size={size}
                        />
                    ),
                }}
            ></Tabs.Screen>
            <Tabs.Screen
                name='settings'
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='settings' color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    );
}
