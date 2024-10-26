package com.example.demo.controller;

import com.example.demo.model.Transaction;
import com.example.demo.model.Users;
import com.example.demo.repository.TransactionRepository;
import com.example.demo.repository.UsersRespository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.math.BigDecimal;
import java.util.List;
@RestController
@RequestMapping("/transactions")
public class TransactionController {
    @Autowired
	private UsersRespository usersRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    @PostMapping("/deposit")
    @Transactional
    public Transaction deposit(@RequestParam String numeroPhone, @RequestParam BigDecimal amount) {
        Users user = usersRepository.findByNumeroPhone(numeroPhone).orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        user.setSolde(user.getSolde().add(amount));
        usersRepository.save(user);

        Transaction transaction = new Transaction(user, "DEPOT", amount);
        transactionRepository.save(transaction);

        return transaction;
    }

    // pour effectuer un retrait en utilisant le numéro de téléphone
    @PostMapping("/withdraw")
    @Transactional
    public Transaction withdraw(@RequestParam String numeroPhone, @RequestParam BigDecimal amount) {
        Users user = usersRepository.findByNumeroPhone(numeroPhone).orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        BigDecimal currentBalance = user.getSolde();

        if (currentBalance.compareTo(amount) < 0) {
            throw new RuntimeException("Solde insuffisant");
        }

        // Mettre à jour le solde
        user.setSolde(currentBalance.subtract(amount));
        usersRepository.save(user); // Sauvegarde le nouveau solde

        Transaction transaction = new Transaction(user, "WITHDRAW", amount);
        transactionRepository.save(transaction);

        return transaction;
    }

    // pour effectuer un transfert en utilisant les numéros de téléphone des expéditeurs et des destinataires
    @PostMapping("/transfer")
    @Transactional
    public Transaction transfer(@RequestParam String senderNumeroPhone, @RequestParam String receiverNumeroPhone, @RequestParam BigDecimal amount) {
        Users sender = usersRepository.findByNumeroPhone(senderNumeroPhone).orElseThrow(() -> new RuntimeException("Expéditeur non trouvé"));
        Users receiver = usersRepository.findByNumeroPhone(receiverNumeroPhone).orElseThrow(() -> new RuntimeException("Destinataire non trouvé"));

        BigDecimal senderBalance = sender.getSolde();

        if (senderBalance.compareTo(amount) < 0) {
            throw new RuntimeException("Solde insuffisant pour le transfert");
        }

        // Étiquette de retrait pour l'expéditeur
        Transaction senderTransaction = new Transaction(sender, "TRANSFERT", amount);
        transactionRepository.save(senderTransaction);

        // Étiquette de dépôt pour le destinataire
        Transaction receiverTransaction = new Transaction(receiver, "DEPOT", amount);
        transactionRepository.save(receiverTransaction);

        // Mettre à jour les soldes des utilisateurs
        sender.setSolde(senderBalance.subtract(amount));
        receiver.setSolde(receiver.getSolde().add(amount));

        usersRepository.save(sender);
        usersRepository.save(receiver);

        return receiverTransaction; // Vous pouvez retourner la transaction du destinataire si vous le souhaitez.
    }

    @GetMapping("/getAllTransactions")
    public List<Transaction> listTransactionsForUser(@RequestParam String numeroPhone) {
        Users user = usersRepository.findByNumeroPhone(numeroPhone).orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        return transactionRepository.findByUser(user);
    }

}