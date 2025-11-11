import { ImageSourcePropType } from "react-native";

export const notes: Note[] = [
  {
    id: 1,
    image: require("@/assets/images/icon3.png"),
    title: "SMDKAMWMKWA",
    description: "Madwa",
    date: "29 Oktober 2025",
  },
  {
    id: 2,
    image: require("@/assets/images/Icon1.png"),
    title: "Belajar menulis",
    description: "Hai aku bisa menulis",
    date: "30 Oktober 2025",
  },
  {
    id: 3,
    image: require("@/assets/images/icon4.png"),
    title: "Masak bos",
    description: "eh gosong",
    date: "03 November 2025",
  },
  {
    id: 4,
    image: require("@/assets/images/icon2.png"),
    title: "makan",
    description: "gosong",
    date: "05 November 2025",
  },
    {
    id: 5,
    image: require("@/assets/images/icon3.png"),
    title: "SMDKAMWMKWA",
    description: "Madwa",
    date: "29 Oktober 2025",
  },
  {
    id: 6,
    image: require("@/assets/images/Icon1.png"),
    title: "Belajar menulis",
    description: "Hai aku bisa menulis",
    date: "30 Oktober 2025",
  },
  {
    id: 7,
    image: require("@/assets/images/icon4.png"),
    title: "Masak bos",
    description: "eh gosong",
    date: "03 November 2025",
  },
  {
    id: 8,
    image: require("@/assets/images/icon2.png"),
    title: "makan",
    description: "gosong",
    date: "05 November 2025",
  },
];

type Note = {
  id: number;
  image: ImageSourcePropType | { uri: string };
  title: string;
  description: string;
  date: string;
};