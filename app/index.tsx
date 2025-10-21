//import Latihan1 from "@/components/latihan/Latihan1";
import LoginScreen from "@/components/tugas/LoginScreen";
import React, { useState } from "react";
import { View } from "react-native";

export default function App() {
  const [nama, setNama] = useState("");

  return (
    <View >
      {/*<Latihan1/>*/}
      <LoginScreen />
    </View>
  );
}