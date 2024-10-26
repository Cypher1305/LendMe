import { TouchableOpacity,Pressable,StyleSheet, Text, View } from 'react-native'
import React, { useCallback,useContext, useEffect, useRef, useState } from "react";
import { TextInput } from 'react-native-gesture-handler'
import ContactsDetail from '../../components/transfert/ContactsDetail'
import axios from "react-native-axios"
import { AuthContext } from "../../context/AuthContext";



const Etape1 =({ navigation: { navigate } }) => {
const { setReceiverNumeroPhone } = useContext(AuthContext);

  return (
    <View>
      {/* <Pressable
        style={{
          paddingVertical: 7,
          paddingHorizontal: 10,
          backgroundColor: "red",
        }}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text>Bihar</Text>
      </Pressable> */}
      <View style={{marginHorizontal:20}}>
        <Text style={{fontSize:22,fontWeight:'bold',marginBottom:20}}>Numero du recepteur</Text>
        <TextInput style={{borderWidth:1,borderColor:"#FFB7A1",height:60,borderRadius:10}}
        onChangeText={(text)=>setReceiverNumeroPhone(text)}
        ></TextInput>
      </View>
      <View style={{marginHorizontal:20,marginTop:20}}> 
        <Text style={{fontSize:18,fontWeight:'bold',marginBottom:20}}>Contacts récents</Text>
        <View></View>
        <View>
          <Text style={{fontSize:18,fontWeight:'bold',marginBottom:20}}>Contacts</Text>
          <View>
           <ContactsDetail /> 
          </View>
        </View>
      </View>
      <TouchableOpacity style={{width:"70%",height:60,backgroundColor:'#FFB7A1',alignSelf:'center',alignItems:'center',justifyContent:'center',marginTop:200,borderRadius:10}}
      onPress={()=> navigate("Etape2")}
      >
        <Text style={{fontWeight:'bold',color:"#ffff"}}>Valider</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Etape1

const styles = StyleSheet.create({})