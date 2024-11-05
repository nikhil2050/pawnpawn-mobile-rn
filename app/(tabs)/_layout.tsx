import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar hidden={false} />  

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Products',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'search' : 'search-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="auction"
          options={{
            title: 'Auction',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'hammer' : 'hammer-outline'} color={color} size={26} />
            ),
          }}
        />
        <Tabs.Screen
          name="order"
          options={{
            title: 'Order',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name={focused ? 'briefcase-download' : 'briefcase-download-outline'} color={color} size={26} />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: 'Cart',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'cart' : 'cart-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name={focused ? 'account' : 'account-outline'} color={color} size={26} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
