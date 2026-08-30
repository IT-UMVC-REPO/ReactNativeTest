import { tabs } from "@/constants/data";
import { colors, components } from "@/constants/theme";
import clsx from "clsx";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TabBar = components.tabBar;

const TabIcon = ({ color, focused, icon }: TabIconProps) => (
    <View className="size-11 items-center justify-center">
        <View
            className={clsx(
                "size-11 items-center justify-center rounded-full",
                focused ? "bg-accent" : "bg-transparent",
            )}
        >
            <Image
                source={icon}
                resizeMode="contain"
                className={clsx(focused ? "opacity-100" : "opacity-60")}
                style={{
                    height: 20,
                    width: 20,
                    tintColor: color,
                }}
            />
        </View>
    </View>
);

const tabLayout = () => {
    const insets = useSafeAreaInsets();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.background,
                tabBarInactiveTintColor: colors.background,
                tabBarStyle: {
                    position: "absolute",
                    bottom: Math.max(insets.bottom, TabBar.horizontalInset),
                    height: TabBar.height,
                    marginHorizontal: TabBar.horizontalInset,
                    borderRadius: TabBar.radius,
                    backgroundColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarItemStyle: {
                    paddingVertical: TabBar.itemPaddingVertical,
                    justifyContent: "center",
                    alignItems: "center",
                },
                tabBarIconStyle: {
                    width: TabBar.iconFrame,
                    height: TabBar.iconFrame,
                    alignItems: "center",
                },
            }}
        >
            {tabs.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon color={color} focused={focused} icon={tab.icon} />
                        ),
                    }}
                />
            ))}
        </Tabs>
    );
};

export default tabLayout;
