import { View, Text, SafeAreaView} from 'react-native'
import React from 'react'

import Welcome from '../components/Welcome'

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Welcome/>
    </SafeAreaView>
  )
}

export default HomeScreen