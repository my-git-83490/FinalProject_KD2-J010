package com.sunbeam.service;

import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.ForgotPasswordDTO;
import com.sunbeam.dto.LoginDTO;
import com.sunbeam.dto.ResetPasswordDTO;
import com.sunbeam.dto.UserRegistrationDTO;
import com.sunbeam.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Transactional
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userDao.findByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with email: " + email);
        }
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), new ArrayList<>());
    }

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
        user.setPassword(passwordEncoder.encode(userRegistrationDTO.getPassword()));
        user.setEmail(userRegistrationDTO.getEmail());
        user.setRole(userRegistrationDTO.getRole());
        return userDao.save(user);
    }

    @Override
    public User login(LoginDTO loginDTO) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDTO.getEmail(), loginDTO.getPassword()));
        return userDao.findByEmail(loginDTO.getEmail());
    }

    @Override
    public void generateAndSendOtp(ForgotPasswordDTO forgotPasswordDTO) {
        User user = userDao.findByEmail(forgotPasswordDTO.getEmail());
        if (user != null) {
            String otp = generateOtp();
            user.setOtp(otp);
            user.setOtpExpiryTime(LocalDateTime.now().plusMinutes(10));
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
            user.setPassword(passwordEncoder.encode(resetPasswordDTO.getNewPassword()));
            user.setOtp(null);
            user.setOtpExpiryTime(null);
            userDao.save(user);
            return true;
        }
        return false;
    }

    @Override
    public User getUserByEmail(String email) {
        return userDao.findByEmail(email);
    }
}
