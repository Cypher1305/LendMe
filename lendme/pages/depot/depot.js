import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'react-native-axios';
import { AuthContext } from '../../context/AuthContext';

const Depot = ({ navigation: { navigate } }) => {
  const { idUser, numeroPhones } = useContext(AuthContext); // Récupération de l'ID et du numéro de l'utilisateur
  const [receiverNumeroPhone, setReceiverNumeroPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  // Fonction pour effectuer le dépôt
  const handleDepot = () => {
    setError(''); // Réinitialiser l'erreur à chaque tentative

    // Validation des entrées
    if (!receiverNumeroPhone || !amount) {
      setError('Veuillez entrer un numéro de bénéficiaire et un montant.');
      return;
    }

    if (parseFloat(amount) < 1000) {
      setError('Le montant doit être d\'au moins 1000 FCFA.');
      return;
    }

    // Effectuer la requête vers le backend pour effectuer le dépôt
    axios
      .post(`http://192.168.1.16:8083/transactions/deposit?numeroPhone=${receiverNumeroPhone}&amount=${amount}`)
      .then((response) => {
        console.log('Dépôt réussi:', response.data);
        navigate('SuccessPage'); // Redirection vers la page de succès
      })
      .catch((error) => {
        console.log('Erreur lors du dépôt:', error.response ? error.response.data : error.message);
        setError('Une erreur est survenue lors du dépôt. Vérifiez les informations saisies.');
      });
  };

  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>Dépôt de fonds</Text>
        
        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Numéro du bénéficiaire</Text>
        <TextInput
          style={styles.input}
          onChangeText={setReceiverNumeroPhone} // Simplification de la fonction d'update
          placeholder="Entrer le numéro"
          keyboardType="numeric"
        />

        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Montant</Text>
        <TextInput
          style={styles.input}
          onChangeText={setAmount} // Simplification de la fonction d'update
          placeholder="Entrer le montant"
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleDepot}
      >
        <Text style={{ fontWeight: 'bold', color: "#fff" }}>Valider le dépôt</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Depot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#FFB7A1',
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: "70%",
    height: 60,
    backgroundColor: '#FFB7A1',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  error: {
    color: 'red',
    marginBottom: 20,
  },
});
