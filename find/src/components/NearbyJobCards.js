import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { checkImageURL } from '../../utils'

const NearbyJobCards = ({job,handleNavigate}) => {
  return (
      <View>
        <TouchableOpacity  onPress={handleNavigate} className="ml-3 flex-row items-center space-x-3 bg-white m-3 shadow-black shadow-sm h-20 pl-3 rounded-lg">
          <View className="bg-white shadow-black shadow-sm rounded-full">
            <Image 
            //source={{uri:checkImageURL(job.employer_logo)? job.employer_logo:"https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"}}
            source={{uri:job.employer_logo}} 
            className="w-10 h-10 rounded-full mt-2 self-center"/>
          </View>

          <View>
            <Text className="font-bold">{job.job_title}</Text>
            <Text className="font-light mt-1">{job.job_employment_type}</Text>
          </View>

        </TouchableOpacity>
      </View> 
  )
}

export default NearbyJobCards