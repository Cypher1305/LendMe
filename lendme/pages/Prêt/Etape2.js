import {TextInput, StyleSheet, Text, View } from 'react-native'
import React, { useCallback,useContext, useEffect, useRef, useState } from "react";
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AuthContext } from "../../context/AuthContext";
import axios from "react-native-axios"
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';


const T_Etape2 =({ navigation: { navigate } }) => {
 
  const { numeroPhones,receiverNumeroPhone, setAmount,amount  } = useContext(AuthContext);
  const handleTransfer=()=>{
    axios.post(`http://192.168.1.16:8083/transactions/transfer?senderNumeroPhone=${numeroPhones}&receiverNumeroPhone=${receiverNumeroPhone}&amount=${amount}`)
    .then(function (response) {
      console.log(response.data);
      navigate("Etape3")
    })
    .catch(function (error) {
      console.log(error);
       Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'numero non existant / montant insuffisant',
        button: 'close',
      })
    });
  
  }
 

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
      
      <View style={{marginHorizontal:20,marginTop:20}}> 
        <Text style={{fontSize:18,fontWeight:'bold',marginBottom:20}}>Contacts sélectionnée(s)</Text>
        <View></View>
        <View>
          <View>
          
          </View>
      </View>
        <Text style={{fontSize:22,fontWeight:'bold',marginBottom:20}}>Montant du prêt</Text>
        <TextInput style={{borderWidth:1,borderColor:"#FFB7A1",height:60,borderRadius:10}} placeholder='Minimum 1000 FCFA'
        onChangeText={(text)=>setAmount(text)}
        
        ></TextInput>
      </View>
      <View>
        <View style={{display:'flex',flexDirection:"row-reverse",marginHorizontal:20,marginTop:25}}>
          <Text>Avec les frais 1%</Text>
        </View>
        <View style={{display:'flex',flexDirection:"column",marginHorizontal:20,marginTop:25}}>
          <Text>Montant reçu</Text>
          <Text style={{fontSize:22,fontWeight:'bold',marginTop:20}}>{amount - amount*0.01} FCFA</Text>
        </View>
      </View>
      <AlertNotificationRoot>

</AlertNotificationRoot>
      <TouchableOpacity style={{width:"70%",height:60,backgroundColor:'#FFB7A1',alignSelf:'center',alignItems:'center',justifyContent:'center',marginTop:200,borderRadius:10}}
      onPress={()=>handleTransfer() }
      >
        <Text style={{fontWeight:'bold',color:"#ffff"}}>Valider</Text>
      </TouchableOpacity>
    </View>
  )
}

export default T_Etape2

const styles = StyleSheet.create({})