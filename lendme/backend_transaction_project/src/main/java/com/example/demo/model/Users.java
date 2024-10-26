package com.example.demo.model;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="users")
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name= "names")
	private String names;
	
	@Column(name= "numero_phone")
	private String numeroPhone;
	
	@Column(name= "password")
	private String password;
	
	@Column(name="solde")
	private BigDecimal solde;
	
	public BigDecimal getSolde() {
		return solde;
	}
	public void setSolde(BigDecimal solde) {
		this.solde = solde;
	}
	public Users() {
		
	}
	public Users(String name, String numeroPhone, String password) {
		super();
		this.names = name;
		this.numeroPhone = numeroPhone;
		this.password = password;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	public String getNames() {
		return names;
	}
	public void setNames(String names) {
		this.names = names;
	}
	public String getNumeroPhone() {
		return numeroPhone;
	}
	public void setNumeroPhone(String numeroPhone) {
		this.numeroPhone = numeroPhone;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
