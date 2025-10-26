import {Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons";

export default function RootLayout() {
    return <Tabs screenOptions={{tabBarActiveTintColor:'#228B22'}}>
        <Tabs.Screen name="index"
                     options={{
                         title: "Home",
                         tabBarIcon: ({color, size}) => (<Ionicons name="flash-outline" color={color} size={size}/>)
                     }}></Tabs.Screen>
        <Tabs.Screen name="settings"
                     options={{
                         title: "Settings",
                         tabBarIcon: ({color, size}) => (<Ionicons name="settings" color={color} size={size}/>)
                     }}/>
    </Tabs>;
}
