package com.example.demo.controller;

import com.example.demo.model.Users;
import com.example.demo.repository.UsersRespository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UsersController {
    @Autowired
	private UsersRespository usersRepository;

    // pour l'inscription d'un nouvel utilisateur
    @PostMapping("/register")
    @Transactional
    public Users registerUser(@RequestBody Users newUser) {
        // Vérifier si un utilisateur avec le même numéro de téléphone existe déjà
        Optional<Users> existingUser = usersRepository.findByNumeroPhone(newUser.getNumeroPhone());
        if (existingUser.isPresent()) {
            throw new RuntimeException("Un utilisateur avec ce numéro de téléphone existe déjà.");
        }

        // Initialiser le solde du compte à zéro
        newUser.setSolde(BigDecimal.ZERO);

        // Enregistrer le nouvel utilisateur
        return usersRepository.save(newUser);
    }

    // pour la connexion de l'utilisateur
    @PostMapping("/login")
    public Users loginUser(@RequestBody  Users newUser) {
        String numeroPhone = newUser.getNumeroPhone();
        String password = newUser.getPassword();

        Optional<Users> user = usersRepository.findByNumeroPhone(numeroPhone);

        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return user.get();
        } else {
            throw new RuntimeException("Identifiants invalides");
        }
    }


    // pour récupérer les informations de l'utilisateur connecté
    @GetMapping("/{userId}")
    public Users getUserInfo(@PathVariable long userId) {
        return usersRepository.findById(userId).orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
    }
    
    
}
