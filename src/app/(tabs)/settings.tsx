import "@/global.css";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView)

const settings = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-blue-100 p-5">
      <Text>Settings</Text>
    </SafeAreaView>
  )
}

export default settings