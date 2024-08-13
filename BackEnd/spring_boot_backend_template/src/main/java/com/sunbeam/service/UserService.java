package com.sunbeam.service;

import com.sunbeam.dto.ForgotPasswordDTO;
import com.sunbeam.dto.LoginDTO;
import com.sunbeam.dto.ResetPasswordDTO;
import com.sunbeam.dto.UserRegistrationDTO;
import com.sunbeam.entities.User;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();
    User getUserById(Long id);
    User saveUser(User user);
    void deleteUser(Long id);
    User registerUser(UserRegistrationDTO userRegistrationDTO);
    User login(LoginDTO loginDTO);
    void generateAndSendOtp(ForgotPasswordDTO forgotPasswordDTO);
    boolean resetPassword(ResetPasswordDTO resetPasswordDTO);
    
}
