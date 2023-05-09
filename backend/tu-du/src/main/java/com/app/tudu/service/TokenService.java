package com.app.tudu.service;

import com.app.tudu.entity.UserEntity;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {
    @Value("${tudu.jwt.expiration}")
    private String expiration;

    @Value("${tudu.jwt.secret}")
    private String secret;

    public String generateToken(UserEntity user){
        return JWT.create()
                .withIssuer("tudu")
                .withSubject(user.getUsername())
                .withClaim("id", user.getId())
                .withClaim("nome", user.getName())
                .withClaim("sobrenome", user.getLastname())
                .withExpiresAt(LocalDateTime.now()
                        .plusMinutes(30)
                        .toInstant(ZoneOffset.of("-03:00")))
                .sign(Algorithm.HMAC256(secret));
    }

    public String getSubject(String token) {
        return JWT.require(Algorithm.HMAC256(secret))
                .withIssuer("tudu")
                .build().verify(token).getSubject();
    }
}
