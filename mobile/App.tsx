import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";
import blurBg from "./src/assets/luz.png";
import Stripes from "./src/assets/stripes.svg";
import Logo from "./src/assets/timelogo.svg";
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
      className="bg-gray-900 px-8 py-10 flex-1 items-center justify-center"
    >
      <StyledStripes className="absolute left-2" />
      <View className="flex-1 items-center justify-center gap-6">
        <Logo />
        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Your Time Capsule
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Look at your memories through time
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          className="rounded-full bg-green-500 px-5 py-3"
        >
          <Text className="font-alt text-sm oppercase text-black">
            Register memories
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Made with 💜 in NLW from Rocketseat
      </Text>
      <StatusBar style="light" translucent />
    </ImageBackground>
  );
}
