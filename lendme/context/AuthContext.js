import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [navigate, setNavigate] = useState(false);
  const [numeroPhones, setNumeroPhones] = useState('');
  const [idUser,setIdUser]=useState(0)
   const [role, setRole] = useState(''); // Ajout du rôle de l'utilisateur
  const [amount,setAmount]=useState(0)
  const [receiverNumeroPhone,setReceiverNumeroPhone]= useState('')

  return (
    <AuthContext.Provider
      value={{
        navigate,
        setNavigate,
        numeroPhones,  
        setNumeroPhones,
        idUser,
        setIdUser,
        role, // Fournir le rôle
        setRole, // Fournir la fonction pour définir le rôle
        amount,
        setAmount,
        receiverNumeroPhone,
        setReceiverNumeroPhone
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};