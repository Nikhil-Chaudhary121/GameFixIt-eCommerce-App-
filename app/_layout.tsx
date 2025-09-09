import "../global.css";
import { Stack, SplashScreen } from "expo-router";
import { useEffect } from "react";
import {
  useFonts as useQuicksand,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import {
  useFonts as useNunito,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import {
  useFonts as useRighteous,
  Righteous_400Regular,
} from "@expo-google-fonts/righteous";
import {
  useFonts as useJaro,
  Jaro_400Regular,
} from "@expo-google-fonts/jaro";

export default function RootLayout() {
  const [qLoaded, qError] = useQuicksand({
    "quicksand-r": Quicksand_400Regular,
    "quicksand-m": Quicksand_500Medium,
    "quicksand-b": Quicksand_700Bold,
  });

  const [nLoaded, nError] = useNunito({
    "nunito-r": Nunito_400Regular,
    "nunito-sb": Nunito_600SemiBold,
    "nunito-b": Nunito_700Bold,
  });

  const [rLoaded, rError] = useRighteous({
    "righteous": Righteous_400Regular,
  });

  const [jLoaded, jError] = useJaro({
    "jaro": Jaro_400Regular,
  });

  const fontsLoaded = qLoaded && nLoaded && rLoaded && jLoaded;
  const error = qError || nError || rError || jError;

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
