package com.app.tudu.controller;

import com.app.tudu.entity.TaskEntity;
import com.app.tudu.entity.UserEntity;
import com.app.tudu.exception.ResourceNotFoundException;
import com.app.tudu.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UserController {

    @Autowired
    UserService service;

    @PostMapping("/user")
    public UserEntity createUser(@RequestBody UserEntity user){
        return service.saveUser(user);
    }

//    @PutMapping("/user/{id}/password")
//    public ResponseEntity<Void> updatePassword(
//            @PathVariable Long id, @RequestParam String email, @RequestParam String password
//    ) throws ResourceNotFoundException {
//        service.updatePassword(id, email, password);
//        return ResponseEntity.noContent().build();
//    }


}
