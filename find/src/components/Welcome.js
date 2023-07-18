import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'

const Welcome = () => {
    const navigation = useNavigation()
  return (
    <View>
      <View className="px-4 mt-2 ">
        <Text  className="text-lg">Hello Gboyega!</Text>
        <Text className="text-lg font-medium">Find your perfect Job</Text>
      </View>

      <View className="flex-row justify-between px-3 mt-3 space-x-1">
        <View className="bg-slate-100 w-80 h-12 rounded-lg">
            <TextInput 
             placeholder='what are you looking for'
             className="ml-3 mt-3"
             />
        </View>

        <View className="mb-2">
            <View className="bg-blue-300 h-12 rounded pt-2">
             <Ionicons name='search-outline' size={30} />
            </View>
        </View>

        
      </View>
    </View>
  )
}

export default Welcome