import {StyleSheet, Text, View} from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>Welcome To The Future!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    link:{
        fontSize: 16,
        textDecorationLine: "underline",
        color: "#0000FF",
    }
})