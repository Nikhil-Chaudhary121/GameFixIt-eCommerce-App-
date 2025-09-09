import { Redirect, Slot } from 'expo-router'


export default function _layout() {
    const isAuthanticated = true;
      if(!isAuthanticated) return <Redirect href={"/sign-in"} />
  return <Slot/>
}