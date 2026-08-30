import "@/global.css";
import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-5 pb-32 pt-4"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-sm font-sans-semibold text-muted-foreground">
              Good to see you
            </Text>
            <Text className="mt-1 text-3xl font-sans-extrabold text-primary">
              Yeowza
            </Text>
          </View>

          <Link href="/profile" asChild>
            <Pressable
              accessibilityLabel="Open profile"
              className="size-12 items-center justify-center overflow-hidden rounded-2xl border border-border bg-card"
            >
              <Image source={icons.home} className="size-5 opacity-75" resizeMode="contain" />
            </Pressable>
          </Link>
        </View>

        <View className="mt-7 overflow-hidden rounded-[32px] bg-primary p-6">
          <View className="absolute -right-12 -top-16 size-44 rounded-full bg-accent/90" />
          <View className="absolute -bottom-20 right-16 size-32 rounded-full bg-white/10" />

          <View className="relative">
            <View className="self-start rounded-full bg-white/10 px-3 py-1.5">
              <Text className="text-xs font-sans-bold uppercase tracking-[1px] text-background/75">
                Subscription hub
              </Text>
            </View>

            <Text className="mt-5 max-w-64 text-3xl font-sans-extrabold leading-9 text-background">
              Keep every renewal in one place.
            </Text>
            <Text className="mt-3 max-w-64 text-sm font-sans-medium leading-5 text-background/70">
              Stay on top of what is active, what is next, and what is no longer worth keeping.
            </Text>

            <Link href="/subscribe" asChild>
              <Pressable className="mt-6 self-start flex-row items-center rounded-2xl bg-accent px-5 py-3.5">
                <Text className="font-sans-bold text-primary">View subscriptions</Text>
                <Text className="ml-3 text-lg font-sans-bold text-primary">→</Text>
              </Pressable>
            </Link>
          </View>
        </View>

        <View className="mt-8">
          <Text className="text-xl font-sans-extrabold text-primary">Quick access</Text>
          <Text className="mt-1 text-sm font-sans-medium text-muted-foreground">
            Pick up where you left off
          </Text>
        </View>

        <View className="mt-4 flex-row gap-3">
          <Link href="/profile" asChild>
            <Pressable className="flex-1 rounded-3xl border border-border bg-card p-4">
              <View className="size-11 items-center justify-center rounded-2xl bg-accent/15">
                <Text className="text-xl">◌</Text>
              </View>
              <Text className="mt-5 text-base font-sans-bold text-primary">Profile</Text>
              <Text className="mt-1 text-xs font-sans-medium leading-4 text-muted-foreground">
                Manage your details
              </Text>
            </Pressable>
          </Link>

          <Link href="/(auth)/sign-in" asChild>
            <Pressable className="flex-1 rounded-3xl border border-border bg-card p-4">
              <View className="size-11 items-center justify-center rounded-2xl bg-subscription/50">
                <Text className="text-xl">↗</Text>
              </View>
              <Text className="mt-5 text-base font-sans-bold text-primary">Account</Text>
              <Text className="mt-1 text-xs font-sans-medium leading-4 text-muted-foreground">
                Sign in or create one
              </Text>
            </Pressable>
          </Link>
        </View>

        <View className="mb-4 mt-8 flex-row items-center justify-between">
          <View>
            <Text className="text-xl font-sans-extrabold text-primary">Explore plans</Text>
            <Text className="mt-1 text-sm font-sans-medium text-muted-foreground">
              Open a subscription to see more
            </Text>
          </View>
          <Link href="/subscribe" asChild>
            <Pressable className="rounded-full border border-primary/15 px-4 py-2">
              <Text className="text-xs font-sans-bold text-primary">See all</Text>
            </Pressable>
          </Link>
        </View>

        <Link
          href={{ pathname: "/subscribe/[id]", params: { id: "twitch" } }}
          asChild
        >
          <Pressable className="flex-row items-center rounded-3xl border border-border bg-card p-4">
            <View className="size-14 items-center justify-center rounded-2xl bg-[#9146ff]/10">
              <Image source={icons.wallet} className="size-6" resizeMode="contain" />
            </View>
            <View className="ml-4 min-w-0 flex-1">
              <Text className="text-base font-sans-bold text-primary">Twitch</Text>
              <Text className="mt-1 text-sm font-sans-medium text-muted-foreground">
                Subscription details
              </Text>
            </View>
            <Text className="text-xl font-sans-bold text-primary/45">›</Text>
          </Pressable>
        </Link>

        <Link
          href={{ pathname: "/subscribe/[id]", params: { id: "claude" } }}
          asChild
        >
          <Pressable className="mt-3 flex-row items-center rounded-3xl border border-border bg-card p-4">
            <View className="size-14 items-center justify-center rounded-2xl bg-accent/15">
              <Image source={icons.claude} className="size-8" resizeMode="contain" />
            </View>
            <View className="ml-4 min-w-0 flex-1">
              <Text className="text-base font-sans-bold text-primary">Claude</Text>
              <Text className="mt-1 text-sm font-sans-medium text-muted-foreground">
                Subscription details
              </Text>
            </View>
            <Text className="text-xl font-sans-bold text-primary/45">›</Text>
          </Pressable>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}
