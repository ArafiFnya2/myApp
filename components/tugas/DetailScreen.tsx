/* eslint-disable @typescript-eslint/no-require-imports */
import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailScreen() {
    return(
    <SafeAreaView style={styles.container}>
        <View style={styles.appBar}>
            <Ionicons name="arrow-back" size={24} color="#FF5B13"/>
            <Text style={styles.appBarTitle}>Note Detail</Text>
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 140 }}>
            <Image
              style={{ width: "100%", height: 220}}
              source={require("@/assets/images/Detail.png")}
            />
            <View style={styles.content}>
                <Text style={styles.title}>Belajar Menulis Lorem ipsum</Text>
                <Text style={styles.date}>Selasa, 04, November 2025</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati harum quibusdam voluptas repudiandae hic error ipsam numquam veritatis perspiciatis distinctio!</Text>
            </View>
        </ScrollView>

        <View style={styles.bottomBar}>
          <TouchableOpacity style={[styles.btn, styles.btnUpdate]} onPress={() => { /* handle update */ }}>
            <Text style={styles.btnText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.btnDelete]} onPress={() => { /* handle delete */ }}>
            <Text style={styles.btnText}>Delete</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    appBar: {
        backgroundColor: "white",
        height: 56,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
    },
    appBarTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 8,
    },
    content: {
        paddingHorizontal: 16,
        paddingVertical: 15,
    },
    title:{
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 6,
    },
    date:{
        fontSize: 14,
        color: "gray",
        marginBottom: 8,
    },
    description:{
        fontSize: 14,
        textAlign: "justify",
        lineHeight: 20,
    },

    bottomBar: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      flexDirection: "row",
      padding: 16,
      backgroundColor: "transparent",
    },
    btn: {
      flex: 1,
      height: 52,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 8,
    },
    btnUpdate: {
      backgroundColor: "#FF5B13", 
    },
    btnDelete: {
      backgroundColor: "#FF3530", 
    },
    btnText: {
      color: "#fff",
      fontWeight: "700",
      fontSize: 16,
    },

})