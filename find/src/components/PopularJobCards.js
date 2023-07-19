import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { checkImageURL } from '../../utils'

const PopularJobCards = ({item}) => {
  return (
   <TouchableOpacity className="mt-3 w-60 h-40 bg-white  shadow-xl shadow-gray-100 rounded-xl ">
      <View className="mx-3 mt-2 shadow-zinc-600 ">
        <Image 
          //source={{uri:checkImageURL(item.employer_logo)? item.employer_logo:"https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"}} 
          source={{uri:item.employer_logo}} 
          className="w-10 h-10  rounded-full shadow-black shadow-xl"
          />
          <Text className="mt-1">Upwork</Text>
         </View>

         <TouchableOpacity className="mx-3 mt-5">
          <Text>React Developer</Text>
          <Text>London</Text>
         </TouchableOpacity>
   </TouchableOpacity>
  )
}

export default PopularJobCards