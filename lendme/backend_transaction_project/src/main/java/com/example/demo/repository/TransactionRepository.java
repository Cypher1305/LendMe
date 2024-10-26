package com.example.demo.repository;

import com.example.demo.model.Transaction;
import com.example.demo.model.Users;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
	List<Transaction> findByUser(Users user);
}
