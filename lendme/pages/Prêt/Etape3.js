import {Pressable,TouchableOpacity, StyleSheet, Text, Image,View } from "react-native";
import React, { useCallback,useContext, useEffect, useRef, useState } from "react";
import axios from "react-native-axios"
import { AuthContext } from "../../context/AuthContext";

const Etape3 =({ navigation: { navigate } }) => {
  const { amount } = useContext(AuthContext);

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
      <View style={{marginTop:30}}>
          <Image 
          source={require("../../assets/img_Users/user_default.png")}
          style={{width: 125,height:125,alignSelf:'center'}}/>
        <Text style={{width:"70%",fontSize:25,textAlign:'center',alignSelf:'center'}}>Votre contact à bien reçu le prêt de <Text style={{fontWeight:'bold'}}> {amount} FCFA </Text></Text>
      </View>
      <TouchableOpacity style={{width:"70%",height:60,backgroundColor:'#FFB7A1',alignSelf:'center',alignItems:'center',justifyContent:'center',marginTop:100,borderRadius:10}}
      onPress={()=> navigate("Accueil")}
      >
        <Text style={{fontWeight:'bold',color:"#ffff"}}>Terminer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width:"70%",height:60,backgroundColor:'black',alignSelf:'center',alignItems:'center',justifyContent:'center',marginTop:20,borderRadius:10}}
      onPress={()=> navigate("Accueil")}
      >
        <Text style={{fontWeight:'bold',color:"#ffff"}}>Télécharger la reconnaissance de dette</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Etape3;

const styles = StyleSheet.create({});
