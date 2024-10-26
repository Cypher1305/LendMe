import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useContext, useState } from 'react';

const SuccessPage = ({ navigation: { navigate } }) => {
  const handleGoHome = () => {
    navigate('Accueil'); // Naviguer vers la page d'accueil
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/success.png')} // Assurez-vous d'ajouter une image de succès dans votre dossier assets
        style={styles.successImage}
      />
      <Text style={styles.title}>Dépôt réussi !</Text>
      <Text style={styles.message}>
        Votre dépôt a été effectué avec succès. Merci de votre confiance !
      </Text>
      
      <TouchableOpacity style={styles.button} onPress={handleGoHome}>
        <Text style={styles.buttonText}>Retour à l'accueil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF', // Couleur de fond douce
    padding: 20,
  },
  successImage: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFB7A1', // Couleur principale
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#333', // Couleur du texte
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FFB7A1', // Couleur du bouton
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
