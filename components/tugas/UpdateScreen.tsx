import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView, } from "react-native-safe-area-context";

const images = [
    require("@/assets/images/Icon1.png"),
    require("@/assets/images/icon2.png"),
    require("@/assets/images/icon3.png"),
    require("@/assets/images/icon4.png"),
]

export default function AddScreen() {
    const [selectedImage, setSelectedImage] = useState<number>(0)

    return(
        <SafeAreaView style={styles.container}>
               <View style={styles.appBar}>
            <Ionicons name="arrow-back" size={24} color="#FF5B13"/>
            <Text style={styles.appBarTitle}>Note Detail</Text>
        </View>
            <Text>Add Screen</Text>
        <View style={styles.form}>
            <TextInput 
            style={styles.inputTitle}
             placeholder="Note Title"
             selectionColor={"#FF5B13"}
             />
             <TextInput
             style={styles.inputContent}
             placeholder="Note Content"
             selectionColor={"#FF5B13"}
             textAlignVertical="top"
             multiline={true}
             />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {images.map((img, Index) => (
                <TouchableOpacity 
                key={Index} 
                style={[
                    styles.boxImage,
                    selectedImage === Index && styles.imageSelected,
                ]}
                onPress={() => setSelectedImage(Index)}
                >
                <Image 
                style={styles.image}
                source={img}
                />
             </TouchableOpacity>
                ))}
             </ScrollView>
            </View>
           <View style={styles.bottomBar}>
             <TouchableOpacity style={[styles.btn, styles.btnUpdate]} onPress={() => {}}>
               <Text style={styles.btnText}>Update</Text>
             </TouchableOpacity>
           </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
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
    form: {
        padding: 10,
        paddingBottom: 120,
    },
    inputTitle:{
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#CCC",
        padding: 15,
    },
    inputContent:{
         borderWidth: 1,
        borderRadius: 8,
        borderColor: "#CCC",
        padding: 15,
        marginBottom: 10,
        height: 150,
    },
    boxImage:{
        height: 100,
        width: 100,
        borderColor: "#CCC",
        borderWidth: 1,
        borderRadius: 8,
        marginRight: 10,
        overflow: "hidden",
    },
    image:{
        width: "100%",
        height: "100%",
        borderRadius: 8,
    },
    imageSelected:{
        borderColor: "#FF5B13",
        borderWidth: 2,
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
    btnText: {
      color: "#fff",
      fontWeight: "700",
      fontSize: 16,
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
})