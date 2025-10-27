//import Latihan1 from "@/components/latihan/Latihan1";
//import LoginScreen from "@/components/tugas/LoginScreen";
//import Latihan2 from "@/components/latihan/Latihan2";
//import Latihan3 from "@/components/latihan/Latihan3";
//import Latihan4 from "@/components/latihan/Latihan4";
import HomeScreen from "@/components/tugas/HomeScreen";
import React, { useState } from "react";
import { View } from "react-native";

export default function App() {
  const [nama, setNama] = useState("");

  return (
    <View>
      {/*<Latihan1/>*/}
      {/*<LoginScreen />*/}
      {/*<Latihan2/>*/}
      {/*<Latihan3 />*/}
      {/*<Latihan4/>*/}
      <HomeScreen/>
    </View>
  );
}
