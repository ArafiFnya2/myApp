import Latihan1 from "@/components/latihan/Latihan1";
import React, { useState } from "react";
import { View } from "react-native";

export default function App() {
  const [nama, setNama] = useState("");

  return (
    <View >
      <Latihan1 />
    </View>
  );
}