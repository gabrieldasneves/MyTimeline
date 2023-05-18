import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";
import blurBg from "./src/assets/luz.png";
import Stripes from "./src/assets/stripes.svg";
import { styled } from "nativewind";

const StyledStripes = styled(Stripes);

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });

  if (!hasLoadedFonts) {
    return null;
  }

  return (
    <ImageBackground
      imageStyle={{ position: "absolute" }}
      source={blurBg}
      className="bg-gray-900 flex-1 items-center justify-center"
    >
      <StyledStripes className="absolute left-2" />

      <StatusBar style="light" translucent />
    </ImageBackground>
  );
}
