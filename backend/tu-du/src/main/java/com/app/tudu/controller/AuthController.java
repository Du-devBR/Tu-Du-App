package com.app.tudu.controller;

import com.app.tudu.entity.UserEntity;
import com.app.tudu.entity.dto.AuthResponseDto;
import com.app.tudu.entity.dto.UserDTO;
import com.app.tudu.service.TokenService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/login")
    public AuthResponseDto authentication(@RequestBody @Valid UserDTO userDTO){
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                new UsernamePasswordAuthenticationToken(userDTO.getUsername(), userDTO.getPassword());
        Authentication authentication = authenticationManager.authenticate(usernamePasswordAuthenticationToken);

        var user = (UserEntity) authentication.getPrincipal();
        String token = tokenService.generateToken(user);
        Long userId = user.getId();
        return new AuthResponseDto(token, userId);
    }
}
