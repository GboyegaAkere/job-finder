import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'


const jobTypes = ['Full-Time', 'Part-Time', "Freelance", "Contractor",]

const Welcome = () => {
    const navigation = useNavigation()
    const [activeJobType, setActiveJobtype] = React.useState("Full-time")
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
            <TouchableOpacity className="bg-blue-300 h-12 rounded-full pt-2">
             <Ionicons name='search-outline' size={30} />
            </TouchableOpacity>
        </View>
      </View>


      <View className="mt-3 px-2">
          <FlatList
           data={jobTypes}
           renderItem={({item})=>{
            return(
              <TouchableOpacity 
              className="m-1 bg-white rounded-full h-9 border-4 border-stone-950"
               onPress={()=>{ 
                setActiveJobtype(item)
                navigation.navigate("Search")}}
              >
                <Text className="px-2 pt-1">{item}</Text>
              </TouchableOpacity>
            )
           }}
           keyExtractor={item=>item}
           contentContainerStyle ={{columnGap:3}}
           horizontal
           showsHorizontalScrollIndicator="false"
          />
        </View>
    </View>
  )
}

export default Welcome