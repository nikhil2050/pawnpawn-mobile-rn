import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const fgColor = '#FFD700';
  const bgColor = '#0D0D0D';

  return (
    <>
      <StatusBar hidden={false} />  

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: fgColor,   //Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarInactiveTintColor: fgColor, // Inactive tab text/icon color (optional)
          tabBarStyle: {
            backgroundColor: bgColor,       // Set tab bar background color to black
          },
      
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Products',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={fgColor} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'search' : 'search-outline'} color={fgColor} />
            ),
          }}
        />
        <Tabs.Screen
          name="auction"
          options={{
            title: 'Auction',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'hammer' : 'hammer-outline'} color={fgColor} size={26} />
            ),
          }}
        />
        <Tabs.Screen
          name="order"
          options={{
            title: 'Order',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name={focused ? 'briefcase-download' : 'briefcase-download-outline'} color={fgColor} size={26} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name={focused ? 'account' : 'account-outline'} color={fgColor} size={26} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
