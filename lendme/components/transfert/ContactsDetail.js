import { View, Text } from 'react-native'
import React from 'react'

export default function ContactsDetail(props) {
  return (
    <View style={{display:"flex",flexDirection:'row'}}>
        <View style={{ width: 44,height: 44,borderRadius: 44/2,borderWidth:1,marginRight:10}}> 

        </View>
        <View>
        <Text style={{fontWeight:'bold'}}>Yann</Text>
        <Text style={{color:'gray'}}>+225 0151750600</Text>
        </View>
        
    </View>
  )
}