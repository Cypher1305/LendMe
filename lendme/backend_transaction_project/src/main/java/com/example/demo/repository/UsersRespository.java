package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Users;
import java.util.Optional;
@Repository
public interface UsersRespository extends JpaRepository <Users,Long> {
    Optional<Users> findByNumeroPhone(String numeroPhone);

}
