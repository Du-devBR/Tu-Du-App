package com.app.tudu.service;

import com.app.tudu.entity.UserEntity;
import com.app.tudu.exception.ResourceNotFoundException;
import com.app.tudu.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository repository;

    public UserEntity saveUser(UserEntity user){
        return repository.save(user);
    }

    public void updatePassword(Long id, String email, String newPassword) throws ResourceNotFoundException {
        Optional<UserEntity> userEntity = repository.findByEmail(email);
        if(userEntity.isPresent() && userEntity.get().getId().equals(id)){
            UserEntity user = userEntity.get();
            user.setPassword(newPassword);
            repository.save(user);

        }else{
            throw new ResourceNotFoundException("Email não cadastrado ou encontrado");
        }
    }

}
