package com.sunbeam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sunbeam.entities.RentalOrderItem;
import com.sunbeam.service.RentalOrderItemService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/rentalOrderItems")
public class RentalOrderItemController {

    @Autowired
    private RentalOrderItemService rentalOrderItemService;

    @GetMapping
    public List<RentalOrderItem> getAllRentalOrderItems() {
        return rentalOrderItemService.getAllRentalOrderItems();
    }

    @GetMapping("/{id}")
    public ResponseEntity<RentalOrderItem> getRentalOrderItemById(@PathVariable Long id) {
        RentalOrderItem rentalOrderItem = rentalOrderItemService.getRentalOrderItemById(id);
        if (rentalOrderItem == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(rentalOrderItem);
    }

    @PostMapping
    public RentalOrderItem createRentalOrderItem(@Valid @RequestBody RentalOrderItem rentalOrderItem) {
        return rentalOrderItemService.saveRentalOrderItem(rentalOrderItem);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RentalOrderItem> updateRentalOrderItem(@PathVariable Long id, @Valid @RequestBody RentalOrderItem rentalOrderItemDetails) {
        RentalOrderItem rentalOrderItem = rentalOrderItemService.getRentalOrderItemById(id);
        if (rentalOrderItem == null) {
            return ResponseEntity.notFound().build();
        }

        rentalOrderItem.setRentalOrder(rentalOrderItemDetails.getRentalOrder());
        rentalOrderItem.setClothingItem(rentalOrderItemDetails.getClothingItem());
        rentalOrderItem.setQuantity(rentalOrderItemDetails.getQuantity());
        rentalOrderItem.setPricePerDay(rentalOrderItemDetails.getPricePerDay());
        rentalOrderItem.setRentalDate(rentalOrderItemDetails.getRentalDate());
        rentalOrderItem.setReturnDate(rentalOrderItemDetails.getReturnDate());
        rentalOrderItem.setStatus(rentalOrderItemDetails.getStatus());

        RentalOrderItem updatedRentalOrderItem = rentalOrderItemService.saveRentalOrderItem(rentalOrderItem);
        return ResponseEntity.ok(updatedRentalOrderItem);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRentalOrderItem(@PathVariable Long id) {
        RentalOrderItem rentalOrderItem = rentalOrderItemService.getRentalOrderItemById(id);
        if (rentalOrderItem == null) {
            return ResponseEntity.notFound().build();
        }

        rentalOrderItemService.deleteRentalOrderItem(id);
        return ResponseEntity.noContent().build();
    }
}