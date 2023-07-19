import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'

import Welcome from '../components/Welcome'
import PopularJobs from '../components/PopularJobs'
import NearbyJob from '../components/NearbyJob'

const HomeScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <Welcome/>
        <PopularJobs/>
        <NearbyJob/>
      </SafeAreaView>
    </ScrollView>
  )
}

export default HomeScreen