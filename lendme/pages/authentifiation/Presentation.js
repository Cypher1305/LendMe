import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Presentation = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Zona-regular": require("../../assets/font/ZonaPro-Regular.ttf"),
    "Zona-bold": require("../../assets/font/ZonaPro-Bold.otf"),
    "Zona-semibold": require("../../assets/font/ZonaPro-SemiBold.otf"),
    "Zona-Light": require("../../assets/font/ZonaPro-Light.otf"),
  });

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current; // Valeur pour le fondu
  const slideAnim = useRef(new Animated.Value(0)).current; // Valeur pour le glissement
  const [showButtons, setShowButtons] = useState(false); // État pour contrôler l'affichage des boutons

  useEffect(() => {
    const startAnimation = () => {
      // Étape 1 : Apparition en fondu
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000, // Durée du fondu
        useNativeDriver: true,
      }).start(() => {
        // Étape 2 : Glissement après le fondu
        Animated.timing(slideAnim, {
          toValue: 1,
          duration: 3000, // Durée du glissement
          useNativeDriver: true,
        }).start(() => {
          // Affichage des boutons après le glissement
          setShowButtons(true);
        });
      });
    };

    startAnimation();
  }, [fadeAnim, slideAnim]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // Transformation pour le glissement vers le haut
  const slideUp = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 0], // Glisse du bas (200px) vers sa position finale (0px)
  });

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {/* Vue animée avec fondu et glissement */}
      <Animated.View
        style={[
          styles.header,
          {
            opacity: fadeAnim, // Applique le fondu
            transform: [{ translateY: slideUp }], // Applique le glissement
          },
        ]}
      >
        <Text
          style={{
            fontSize: 45,
            fontFamily: "Zona-bold",
            textAlign: "center",
          }}
        >
          LendMe
        </Text>
        <Text
          style={{
            fontSize: 12, // Taille modifiée pour une meilleure visibilité
            fontFamily: "Zona-semibold",
            textAlign: "center",
          }}
        >
          Projet de Middleware de transactions
        </Text>
      </Animated.View>

      {/* Boutons apparaissent après l'animation */}
      {showButtons && (
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.buttonLogin}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.buttonText}>Connexion</Text>
          </Pressable>
          <Pressable
            style={styles.buttonSignUp}
            onPress={() => {
              navigation.navigate("Sign");
            }}
          >
            <Text style={styles.buttonText}>Inscription</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Presentation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    position: "absolute", // Fixe l'élément pour l'animation
    top: "30%", // Position initiale
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    position: "absolute", // Boutons fixes en bas
    bottom: 40,
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
  buttonLogin: {
    width: "80%",
    paddingVertical: 15,
    backgroundColor: "#FFB7A1", // Couleur pour Connexion
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSignUp: {
    width: "80%",
    paddingVertical: 15,
    backgroundColor: "#606061", // Couleur pour Inscription
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Zona-semibold",
    color: "white",
  },
});
