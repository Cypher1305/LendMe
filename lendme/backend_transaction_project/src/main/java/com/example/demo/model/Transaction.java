package com.example.demo.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "transactions")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;

    @Column(name = "transaction_type")
    private String transactionType;

    @Column(name = "amount")
    private BigDecimal amount;

    public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public String getTransactionType() {
		return transactionType;
	}

	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public Transaction() {}

    public Transaction(Users user, String transactionType, BigDecimal amount) {
        this.user = user;
        this.transactionType = transactionType;
        this.amount = amount;
    }

   
}
