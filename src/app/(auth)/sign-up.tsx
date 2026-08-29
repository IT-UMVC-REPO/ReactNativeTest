import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView)

const SignUp = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-blue-100 p-5">
      <Text>Sign Up</Text>
      <Link href="/(auth)/sign-in" className="mt-4 bg-amber-800 text-white p-2 rounded">
        Go to Sign In
      </Link>
    </SafeAreaView>
  )
}

export default SignUp