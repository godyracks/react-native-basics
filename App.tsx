
import React from 'react'
import { View, 
  Text,
  SafeAreaView,

 } from 'react-native'
 import  Flatlist1  from './components/Flatlist1'

export default function App() {
  return (
    
    
    <SafeAreaView>
      <View>
      <Text>App</Text>
      <View>
        < Flatlist1 />
      </View>
    </View>
    </SafeAreaView>
  )
}