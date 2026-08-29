import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const SignIn = () => {
  return (
    <View>
      <Text>Sign In</Text>
      <Link href="/(auth)/sign-up" className="mt-4 bg-amber-800 text-white p-2 rounded">
        Go to Sign Up
      </Link>
    </View>
  )
}

export default SignIn