package org.seminify.app.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.seminify.app.dto.ResponseDTO;
import org.seminify.app.dto.UserDTO;
import org.seminify.app.model.UserEntity;
import org.seminify.app.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@Slf4j
@RequestMapping("auth")
@RestController
public class UserController {
    private final UserService userService;

    @PostMapping("signup")
    public ResponseEntity<?> registerUser(@RequestBody UserDTO userDTO) {
        try {
            if (userDTO == null || userDTO.getPassword() == null) {
                throw new RuntimeException("Invalid Password value.");
            }
            UserEntity user = UserEntity.builder().username(userDTO.getUsername()).password(userDTO.getPassword()).build();
            UserEntity registerdUser = userService.create(user);
            UserDTO responseUserDTO = UserDTO.builder().id(registerdUser.getId()).username(registerdUser.getUsername()).build();
            return ResponseEntity.ok(responseUserDTO);
        } catch (Exception e) {
            ResponseDTO responseDTO = ResponseDTO.builder().error(e.getMessage()).build();
            return ResponseEntity.badRequest().body(responseDTO);
        }
    }

    @PostMapping("signin")
    public ResponseEntity<?> authenticate(@RequestBody UserDTO userDTO) {
        UserEntity user = userService.getByCredentials(userDTO.getUsername(), userDTO.getPassword());
        if (user != null) {
            UserDTO responseUserDTO = UserDTO.builder().username(user.getUsername()).id(user.getId()).build();
            return ResponseEntity.ok(responseUserDTO);
        } else {
            ResponseDTO responseDTO = ResponseDTO.builder().error("Login failed").build();
            return ResponseEntity.badRequest().body(responseDTO);
        }
    }
}
