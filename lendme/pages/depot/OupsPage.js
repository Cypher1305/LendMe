import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const OupsPage = ({ navigation: { navigate } }) => {
  const { roles } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/oops.png')} // Assurez-vous d'avoir une image appropriée
        style={styles.image}
      />
      <Text style={styles.title}>Oups !</Text>
      <Text style={styles.message}>
        Seuls les agents peuvent effectuer des dépôts.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Accueil')} // Remplacez 'Home' par le nom de votre écran d'accueil
      >
        <Text style={styles.buttonText}>Retour à l'accueil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFB7A1',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OupsPage;
