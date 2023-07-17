import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (

   <View className="flex-1 items-center justify-center">
      <View className ="bg-purple-700 px-6 rounded-2xl">
        <Text className="text-lg">Open App</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

