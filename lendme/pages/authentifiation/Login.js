import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState,useCallback, useContext } from "react";
import { TextInput } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { AuthContext } from "../../context/AuthContext";
import * as SplashScreen from "expo-splash-screen";
import axios from "react-native-axios"
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

SplashScreen.preventAutoHideAsync();

const Login = ({ navigation: { replace } }) => {
  const [fontsLoaded] = useFonts({
    "Zona-regular": require("../../assets/font/ZonaPro-Regular.ttf"),
    "Zona-bold": require("../../assets/font/ZonaPro-Bold.otf"),
    "Zona-semibold": require("../../assets/font/ZonaPro-SemiBold.otf"),
    "Zona-Light": require("../../assets/font/ZonaPro-Light.otf"),
  });
  const [numeroPhone,setNumeroPhone]=useState('')
  const [password,setPassword]=useState('')
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const handleLogin=()=>{
    axios.post('http://192.168.1.16:8083/users/login', {
      numeroPhone: numeroPhone,
      password:password
    })
    .then(function (response) {
      console.log(response.data);
      setNumeroPhones(numeroPhone)
      setIdUser(response.data.id)
      setNavigate(true);

    })
    .catch(function (error) {
      console.log(error);
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'numero de téléphone ou mots de passe incorrect',
        button: 'close',
      })
    });
  }

  const { setNavigate , setNumeroPhones, setIdUser } = useContext(AuthContext);
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
     
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          marginVertical: 20,

          marginHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 25, fontFamily: "Zona-semibold" }}>
          Authentifiez vous
        </Text>
      </View>

      <View
        style={{
          gap: 22,
          flex: 1,
          marginTop: 25,
          marginHorizontal: 20,
        }}
      >
        <View style={{ gap: 7 }}>
          <Text style={{ fontSize: 17, fontFamily: "Zona-regular" }}>
            Numero Téléphone
          </Text>
          <TextInput
            style={{
              paddingVertical: 8,
              paddingHorizontal: 10,
              borderColor: "rgba(255, 183, 161, 0.29)",

              borderWidth: 2,
              borderRadius: 9,
            }}
            onChangeText={(text)=>setNumeroPhone(text)}

          />
        </View>
        
        <View style={{ gap: 7 }}>
          <Text style={{ fontSize: 17, fontFamily: "Zona-regular" }}>
            Mot de passe
          </Text>
          <TextInput
            style={{
              paddingVertical: 8,
              paddingHorizontal: 10,
              borderColor: "rgba(255, 183, 161, 0.29)",

              borderWidth: 2,
              borderRadius: 9,
            }}
            onChangeText={(text)=>setPassword(text)}
            
          />
        </View>
      </View>
      <AlertNotificationRoot>

</AlertNotificationRoot>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 20,
          gap: 10,
        }}
      >
        <Pressable
          style={{
            width: "80%",
            paddingVertical: 15,
            backgroundColor: "#FFB7A1",
            borderRadius: 15,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            handleLogin()
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Zona-semibold",
              color: "white",
            }}
          >
            Connexion
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
