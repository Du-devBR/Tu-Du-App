package com.app.tudu.repository;

import com.app.tudu.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;



public interface UserRepository extends JpaRepository<UserEntity, Long> {
//    Optional<UserEntity> findByEmail(String username);
    Optional<UserEntity> findByUsername(String username);
}
