import { Tabs } from "expo-router";

const tabLayout = () => (
    <Tabs screenOptions={{headerShown: false}}>
        <Tabs.Screen name="index" options={{title: 'Home'}}/>
        <Tabs.Screen name="subscribe" options={{title: 'Subscriptions'}}/>
        <Tabs.Screen name="status" options={{title: 'Status'}}/>
        <Tabs.Screen name="settings" options={{title: 'Settings'}}/>
        <Tabs.Screen name="subscribe/[id]" options={{href: null}}/>
    </Tabs>
)

export default tabLayout;