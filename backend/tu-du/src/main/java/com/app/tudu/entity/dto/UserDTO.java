package com.app.tudu.entity.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private String username;
    private  String password;

    public UsernamePasswordAuthenticationToken convertUser(){
        return new UsernamePasswordAuthenticationToken(this.username, this.password);
    }

}
