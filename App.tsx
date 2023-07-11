
import React from 'react'
import { View, 
  Text,
  SafeAreaView,

 } from 'react-native'
 import  Flatlist1  from './components/Flatlist1'
import Flatlist2 from './components/Flatlist2'

export default function App() {
  return (
    
    
    <SafeAreaView>
      <View>
      <Text>App</Text>
      <View>
        < Flatlist1 />
        
      </View>
      <View>
        < Flatlist2 />
      </View>

    </View>
    </SafeAreaView>
  )
}