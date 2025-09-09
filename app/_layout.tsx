import  '../global.css'
import { Stack } from "expo-router";
import { ReactNode } from "react";
import { useEffect } from 'react';
import { SplashScreen } from 'expo-router';
import { useFonts, Quicksand_400Regular, Quicksand_500Medium, Quicksand_700Bold } from "@expo-google-fonts/quicksand";



type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
      const [fontsLoaded, error] = useFonts({
    "quicksand-r" :Quicksand_400Regular,
    "quicksand-m" :Quicksand_500Medium,
    "quicksand-b" :Quicksand_700Bold,
  });

  useEffect(() => {
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  return <Stack screenOptions={{headerShown : false}} />;
}
