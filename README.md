# LendMe

LendMe est un projet de classe conçu pour mettre en place une application de prêt et de transfert d'argent en utilisant un middleware. 
Ce projet utilise le **middleware de transaction JTA (Java Transaction API)** pour gérer les transactions de manière sécurisée et fiable.

## Table des matières

- [Prérequis](#Prérequis)
- [Installation](#Installation)
- [Contributions](#Contributions)
- [Screenshots](#Screenshots)

## Prérequis

Avant de commencer, assurez-vous d'avoir installés :

- **WAMP Server** (ou un autre serveur local équivalent)
- **ORACLE JDK 23**
- **Node Js**
- **React Native**
- **Spring Boot**
- **MySQL Workbench 8.0 CE** : créez un schéma nommé `bd_transaction`
- **Expo CLI**
- **Expo Go** (pour les tests sur mobile)

## Installation

1. **Télécharger ou cloner le projet** :

   ```bash
   git clone https://github.com/Cypher1305/LendMe.git
   cd LendMe
   ```
2. **Installer les dependances** :

   ```npm install```

2. **Lancer l'interface mobile avec Expo** :
   - Accédez au dossier `lendme` :

     ```bash
     cd lendme
     npx expo start
     ```

   - Ouvrez l'application **Expo Go** sur votre mobile, puis scannez le code QR affiché dans la console.

3. **Configurer le backend** :
   - Dans une nouvelle fenêtre de votre éditeur de code, accédez au dossier backend :

     ```bash
     cd backend_transaction
     ```

   - Dans le **Spring Boot Dashboard**, exécutez l'application `backend-transaction_project` depuis le dossier `APPS`.
  
## Contributions
Les contributions sont les bienvenues ! Si vous souhaitez améliorer le projet, veuillez suivre les étapes suivantes :

1. Forkez le projet.
2. Créez une nouvelle branche (git checkout -b ma-nouvelle-fonctionnalité).
3. Effectuez vos modifications et ajoutez des tests si nécessaire.
4. Commitez vos modifications
     ```bash
     git commit -m 'Ajout d\'une nouvelle fonctionnalité'
     ```
5. Poussez votre branche
     ```bash
     git push origin ma-nouvelle-fonctionnalité
     ```
6. Ouvrez une Pull Request.

**Je serai ravi de recevoir vos suggestions et améliorations.🤗**

## Screenshots
Suivez les étapes ci-dessus pour démarrer l'application front-end avec Expo et le backend avec Spring Boot. 
L'interface mobile de LendMe vous permettra de tester les fonctionnalités de prêt et de transfert d'argent en temps réel.

| ![Écran de connexion](images/lendme_6.jpeg) | ![Écran d'accueil](images/lendme_4.jpeg) | ![Écran de transfert](images/lendme_5.jpeg) |
| --- | --- | --- |
| L'écran de connexion de l'application. | Interface d'accueil de l'application. | Interface de transfert d'argent. |
| ![Écran de dépôt réussi](images/lendme_2.jpeg) | ![Écran 404 dépôt](images/lendme_3.jpeg) | ![Écran de prêt réussi](images/lendme_1.jpeg) |
| Interface de dépôt d'argent (réussi). | Interface de dépôt (erreur). | Interface de prêt d'argent (réussi). |


XoXo😘❤️❤️❤️

