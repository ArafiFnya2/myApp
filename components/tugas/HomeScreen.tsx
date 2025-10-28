import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <Image 
            style={{ width: 32, height: 32}}
            source={require("@/assets/images/react-logo.png")}
            />
            <Text style={styles.kodeinText}>Kodein</Text>
            <Text style={styles.notesText}>Notes</Text>
            </View>

            <View style={styles.content}>
                <Text>Content</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "white",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
    },
    kodeinText: {
        fontSize: 20,
        fontWeight: 700,
    },
    notesText: {
        fontSize: 20,
        fontWeight: 700,
        color: "#FF5B13"
    },
    content: {},
})