package com.sunbeam.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.ForgotPasswordDTO;
import com.sunbeam.dto.LoginDTO;
import com.sunbeam.dto.ResetPasswordDTO;
import com.sunbeam.dto.UserRegistrationDTO;
import com.sunbeam.entities.User;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Random;

@Transactional
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private JavaMailSender mailSender;

    @Override
    public List<User> getAllUsers() {
        return userDao.findAll();
    }

    @Override
    public User getUserById(Long id) {
        return userDao.findById(id).orElse(null);
    }

    @Override
    public User saveUser(User user) {
        return userDao.save(user);
    }

    @Override
    public void deleteUser(Long id) {
        userDao.deleteById(id);
    }

    @Override
    public User registerUser(UserRegistrationDTO userRegistrationDTO) {
        User user = new User();
        user.setFullName(userRegistrationDTO.getFullName());
        user.setPassword(userRegistrationDTO.getPassword());
        user.setEmail(userRegistrationDTO.getEmail());
        user.setRole(userRegistrationDTO.getRole());
        return userDao.save(user);
    }

    @Override
    public User login(LoginDTO loginDTO) {
        User user = userDao.findByEmail(loginDTO.getEmail());
        if (user != null && user.getPassword().equals(loginDTO.getPassword())) {
            return user;
        }
        return null;
    }

    @Override
    public void generateAndSendOtp(ForgotPasswordDTO forgotPasswordDTO) {
        User user = userDao.findByEmail(forgotPasswordDTO.getEmail());
        if (user != null) {
            String otp = generateOtp();
            user.setOtp(otp);
            user.setOtpExpiryTime(LocalDateTime.now().plusMinutes(10)); // OTP valid for 10 minutes
            userDao.save(user);
            sendOtpEmail(user.getEmail(), otp);
        }
    }

    private String generateOtp() {
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        return String.valueOf(otp);
    }

    private void sendOtpEmail(String email, String otp) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Password Reset OTP");
        message.setText("Your OTP for password reset is: " + otp);
        mailSender.send(message);
    }

    @Override
    public boolean resetPassword(ResetPasswordDTO resetPasswordDTO) {
        User user = userDao.findByEmail(resetPasswordDTO.getEmail());
        if (user != null && user.getOtp() != null &&
                user.getOtp().equals(resetPasswordDTO.getOtp()) &&
                user.getOtpExpiryTime().isAfter(LocalDateTime.now())) {
            user.setPassword(resetPasswordDTO.getNewPassword());
            user.setOtp(null);  // Clear OTP after successful password reset
            user.setOtpExpiryTime(null);
            userDao.save(user);
            return true;
        }
        return false;
    }
}
