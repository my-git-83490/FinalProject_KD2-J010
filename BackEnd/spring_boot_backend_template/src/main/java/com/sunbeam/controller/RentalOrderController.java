package com.sunbeam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sunbeam.entities.RentalOrder;
import com.sunbeam.service.RentalOrderService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/rentalOrders")
public class RentalOrderController {

    @Autowired
    private RentalOrderService rentalOrderService;

    @GetMapping
    public List<RentalOrder> getAllRentalOrders() {
        return rentalOrderService.getAllRentalOrders();
    }

    @GetMapping("/{id}")
    public ResponseEntity<RentalOrder> getRentalOrderById(@PathVariable Long id) {
        RentalOrder rentalOrder = rentalOrderService.getRentalOrderById(id);
        if (rentalOrder == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(rentalOrder);
    }

    @PostMapping
    public RentalOrder createRentalOrder(@Valid @RequestBody RentalOrder rentalOrder) {
        return rentalOrderService.saveRentalOrder(rentalOrder);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RentalOrder> updateRentalOrder(@PathVariable Long id, @Valid @RequestBody RentalOrder rentalOrderDetails) {
        RentalOrder rentalOrder = rentalOrderService.getRentalOrderById(id);
        if (rentalOrder == null) {
            return ResponseEntity.notFound().build();
        }

        rentalOrder.setUser(rentalOrderDetails.getUser());
        rentalOrder.setTotalPrice(rentalOrderDetails.getTotalPrice());
        rentalOrder.setOrderDate(rentalOrderDetails.getOrderDate());
        rentalOrder.setRentalPeriodStart(rentalOrderDetails.getRentalPeriodStart());
        rentalOrder.setRentalPeriodEnd(rentalOrderDetails.getRentalPeriodEnd());
        rentalOrder.setStatus(rentalOrderDetails.getStatus());

        RentalOrder updatedRentalOrder = rentalOrderService.saveRentalOrder(rentalOrder);
        return ResponseEntity.ok(updatedRentalOrder);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRentalOrder(@PathVariable Long id) {
        RentalOrder rentalOrder = rentalOrderService.getRentalOrderById(id);
        if (rentalOrder == null) {
            return ResponseEntity.notFound().build();
        }

        rentalOrderService.deleteRentalOrder(id);
        return ResponseEntity.noContent().build();
    }
}