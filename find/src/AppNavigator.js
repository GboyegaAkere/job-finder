import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import Ionicons from '@expo/vector-icons/Ionicons'
import { TouchableOpacity, View } from 'react-native'


const Stack = createNativeStackNavigator()

const AppNavigator = () => {
 
  return (
  
   <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name='Home' component={HomeScreen}
         options={
          {headerStyle:{backgroundColor:"white"},
          headerShadowVisible:false,
          headerTitle:"",
          headerLeft:() =>{
           return(
            <TouchableOpacity>
              <Ionicons name='reorder-three-outline' color="blue" size={35}/>
            </TouchableOpacity>
           )
          },
          headerRight:() =>{
            return(
            <TouchableOpacity>
              <Ionicons name='person-outline' color="blue" size={35}/>
            </TouchableOpacity>
            )
           }
        }}
         />
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator          

 