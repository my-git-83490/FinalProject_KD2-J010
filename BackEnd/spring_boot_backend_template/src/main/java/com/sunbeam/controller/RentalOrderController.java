package com.sunbeam.controller;

import com.sunbeam.dto.RentalOrderCreationDTO;
import com.sunbeam.entities.RentalOrder;
import com.sunbeam.service.RentalOrderService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/rental-orders")
public class RentalOrderController {

    @Autowired
    private RentalOrderService rentalOrderService;

    @PostMapping("/create")
    public ResponseEntity<RentalOrder> createRentalOrder(@RequestBody RentalOrderCreationDTO rentalOrderCreationDTO) {
        RentalOrder rentalOrder = rentalOrderService.createRentalOrderFromCart(rentalOrderCreationDTO);
        return ResponseEntity.ok(rentalOrder);
    }
    
    
    @GetMapping("/user/{userId}")
    public List<RentalOrder> getRentalOrdersByUserId(@PathVariable Long userId) {
        return rentalOrderService.getRentalOrdersByUserId(userId);
}

}