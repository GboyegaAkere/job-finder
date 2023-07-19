import { View, Text, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native'
import React from 'react'
import PopularJobCards from './PopularJobCards'
import useFetch from '../../hook/useFetch'
import { useNavigation } from '@react-navigation/native'

// const isLoading = false
// const error = false

const PopularJobs = () => {
    const navigation = useNavigation()

    const {data, isLoading, error} = useFetch("search",{
        query:"React developer",
        num_pages:1
    })

    // console.log(data)
    
  return (
    <View className='mt-3 px-4'>
        <View className="flex-row justify-between items-center">
            <Text className="text-lg font-bold">Popular Jobs</Text>
            <TouchableOpacity><Text>Show all</Text></TouchableOpacity>
        </View> 

        <View>
            {isLoading ? (
                <ActivityIndicator size="large" color="red"/>
            ): error ? (
                <Text>something is wrong</Text>
            ):(
                <FlatList
                    data={data} //THIS IS THE DATA FROM THE API
                    renderItem={({item})=>{
                        return (
                            <PopularJobCards item={item}/>
                        )
                    }}
                    keyExtractor={item => item?.job_id}
                    contentContainerStyle={{columnGap:10}}
                    horizontal
                    showsHorizontalScrollIndicator="false"
                />
            )}
        </View>
    </View>
  )
}

export default PopularJobs