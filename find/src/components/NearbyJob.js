import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import useFetch from '../../hook/useFetch'
import NearbyJobCards from './NearbyJobCards'
import { useNavigation } from '@react-navigation/native'

const NearbyJob = () => {
    const navigation = useNavigation()
    const {data, isLoading, error} = useFetch("search",{
        query:"React developer",
        num_pages:1
    })

  return (
    <View className="px-4 mt-4">
        <View className="flex-row justify-between items-center">
            <Text className="text-lg font-bold">Nearby Jobs</Text>
            <TouchableOpacity>
              <Text>Show all</Text>
            </TouchableOpacity>
        </View> 

        <View>
            {isLoading ? (
                <ActivityIndicator size="large" color="red"/>
            ): error ? (
                <Text>something is wrong</Text>
            ):(
                data?.map((job)=>(
                    <NearbyJobCards 
                     job={job}
                     key={`nearby-job- ${job?.job_id}`}
                     handleNavigate={()=>navigation.navigate("Details")}
                     />
                ))
            )}
        </View>
    </View>
  )
}

export default NearbyJob