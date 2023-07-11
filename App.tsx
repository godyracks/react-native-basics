
import React from 'react'
import { View, 
  Text,
  SafeAreaView,
  ScrollView,

 } from 'react-native'
 import  Flatlist1  from './components/Flatlist1'
import Flatlist2 from './components/Flatlist2'
import ElevatedCards from './components/ElevatedCards'

export default function App() {
  return (
    
    
    <SafeAreaView>

      <ScrollView>
        < Flatlist1 />
        {/* < Flatlist2 /> */}
        <ElevatedCards />
      </ScrollView>
   
    </SafeAreaView>
  )
}