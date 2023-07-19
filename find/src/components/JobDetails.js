import { View, Text , RefreshControl, SafeAreaView} from 'react-native'
import React from 'react'
import useFetch from '../../hook/useFetch'


const JobDetails = () => {
    // const {data, isLoading, error,} = useFetch("job-details",{
    //     job_id:Params.id
    // })
  return (
    <SafeAreaView>
      <Text>JobDetails</Text>
    </SafeAreaView>
  )
}

export default JobDetails