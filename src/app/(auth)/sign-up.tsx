import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const SignUp = () => {
  return (
    <View>
      <Text>Sign Up</Text>
      <Link href="/(auth)/sign-in" className="mt-4 bg-amber-800 text-white p-2 rounded">
        Go to Sign In
      </Link>
    </View>
  )
}

export default SignUp