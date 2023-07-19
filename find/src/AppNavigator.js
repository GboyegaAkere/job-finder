import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import Ionicons from '@expo/vector-icons/Ionicons'
import { TouchableOpacity, View } from 'react-native'
import Search from './components/Search'
import JobDetails from './components/JobDetails'


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
         <Stack.Screen name='Search' component={Search}/>
         <Stack.Screen name='Details' component={JobDetails} options={{
        headerStyle:{backgroundColor:'yellow'}
      }}/>
        
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator          

 