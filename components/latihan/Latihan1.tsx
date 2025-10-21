import { Text, TextInput, View } from "react-native";


export default function Latihan1() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#cfe7d2ff" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
                Aplikasi Data Diri Saya
              </Text>
        
              <View
              style={{
                width: "100%",
                padding: 20,
                backgroundColor: "white",
                
              }}
              />
              <Text>Nama:</Text>
              <TextInput
                placeholder="Masukkan nama kamu"
              />
        
              <Text>Kelas:</Text>
              <TextInput
                placeholder="Masukkan kelas kamu"
              />
        
              <Text>Hobi:</Text>
              <TextInput
                placeholder="Masukkan hobi kamu"
              />
        
              <Text>
                Terima kasih sudah mengisi data!
              </Text>
            </View>
    )
}