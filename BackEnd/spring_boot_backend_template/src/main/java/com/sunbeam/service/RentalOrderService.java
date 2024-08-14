package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.RentalOrderCreationDTO;
import com.sunbeam.entities.RentalOrder;

public interface RentalOrderService {
    RentalOrder createRentalOrderFromCart(RentalOrderCreationDTO rentalOrderCreationDTO);
    List<RentalOrder> getRentalOrdersByUserId(Long userId);
}
