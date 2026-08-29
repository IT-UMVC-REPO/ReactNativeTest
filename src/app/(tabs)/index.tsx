import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView)

/**
 * Renders the app's welcome screen with navigation links to profile, authentication, and subscription routes.
 */
export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-blue-100 p-5">
      <Text className="text-xl font-bold text-red-500">
        Welcome to Nativewind!
      </Text>
      <Link href="/profile" className="mt-4 bg-amber-800 text-white p-2 rounded">
        Go to Profile
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 bg-amber-800 text-white p-2 rounded">
        Go to Sign In
      </Link>
      <Link href="/(auth)/sign-up" className="mt-4 bg-amber-800 text-white p-2 rounded">
        Go to Sign Up
      </Link>

      <Link
        href={{
          pathname: "/subscribe/[id]",
          params: { id: "twitch" },
        }}
        className="mt-4 bg-amber-800 text-white p-2 rounded"
      >
        Twitch Subscriptions
      </Link> 
      <Link href={{
        pathname: "/subscribe/[id]",
        params: { id: "claude" },
      }}
      className="mt-4 bg-amber-800 text-white p-2 rounded"
      >
        Claude Pro Max Ultra
      </Link>
    </SafeAreaView>
  );
}