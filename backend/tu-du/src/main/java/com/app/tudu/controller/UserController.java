package com.app.tudu.controller;

import com.app.tudu.entity.UserEntity;
import com.app.tudu.exception.ResourceNotFoundException;
import com.app.tudu.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    UserService service;

    @PostMapping
    public UserEntity createUser(@RequestBody UserEntity user){
        return service.saveUser(user);
    }

    @PutMapping("/{id}/password")
    public ResponseEntity<Void> updatePassword(
            @PathVariable Long id, @RequestParam String email, @RequestParam String password
    ) throws ResourceNotFoundException {
        service.updatePassword(id, email, password);
        return ResponseEntity.noContent().build();
    }

}