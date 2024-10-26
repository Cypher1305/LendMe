import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Details = ({ route, navigation: { navigate } }) => {
  return (
    <View>
      <Text>Details de transaction</Text>
      <Pressable
        style={{
          paddingVertical: 7,
          paddingHorizontal: 10,
          backgroundColor: "red",
        }}
        onPress={() => {
          navigate("Login");
        }}
      >
        <Text>{route.params.user.contact}</Text>
      </Pressable>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
