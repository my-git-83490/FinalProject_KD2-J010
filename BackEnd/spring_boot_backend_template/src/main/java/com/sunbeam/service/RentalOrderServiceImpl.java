package com.sunbeam.service;

import com.sunbeam.dto.RentalOrderCreationDTO;
import com.sunbeam.entities.*;
import com.sunbeam.dao.RentalOrderDao;
import com.sunbeam.dao.RentalOrderItemDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


import java.util.Set;
import java.util.stream.Collectors;

@Service
public class RentalOrderServiceImpl implements RentalOrderService {

    @Autowired
    private CartService cartService;

    @Autowired
    private RentalOrderDao rentalOrderRepository;

    @Autowired
    private RentalOrderItemDao rentalOrderItemRepository;

    @Override
    @Transactional
    public RentalOrder createRentalOrderFromCart(RentalOrderCreationDTO rentalOrderCreationDTO) {
        Cart cart = cartService.getCartByUserId(rentalOrderCreationDTO.getUserId());
        System.out.println("cart " +cart);
        Set<CartItem> cartItemsSet = cart.getCartItems();
        
        // Convert Set<CartItem> to List<CartItem>
        List<CartItem> cartItems = cartItemsSet.stream().collect(Collectors.toList());

        if (cartItems.isEmpty()) {
            throw new IllegalStateException("The cart is empty. Cannot create a rental order.");
        }

        RentalOrder rentalOrder = new RentalOrder();
        rentalOrder.setUser(cart.getUser());
        rentalOrder.setRentalPeriodStart(rentalOrderCreationDTO.getRentalPeriodStart());
        rentalOrder.setRentalPeriodEnd(rentalOrderCreationDTO.getRentalPeriodEnd());
        rentalOrder.setOrderDate(LocalDate.now());

        double totalPrice = 0.0;
        List<RentalOrderItem> rentalOrderItems = new ArrayList<>();
        for (CartItem cartItem : cartItems) {
            RentalOrderItem rentalOrderItem = new RentalOrderItem();
            rentalOrderItem.setRentalOrder(rentalOrder);
            rentalOrderItem.setClothingItem(cartItem.getClothingItem());
            rentalOrderItem.setQuantity(cartItem.getQuantity());
            rentalOrderItem.setPricePerDay(cartItem.getClothingItem().getPricePerDay());
            rentalOrderItem.setRentalDate(LocalDate.now());
            rentalOrderItem.setReturnDate(rentalOrderCreationDTO.getRentalPeriodEnd());
            rentalOrderItem.setStatus(RentalItemStatus.RENTED);

            double itemTotalPrice = rentalOrderItem.getPricePerDay() * rentalOrderItem.getQuantity();
            totalPrice += itemTotalPrice;

            rentalOrderItems.add(rentalOrderItem);
        }
        rentalOrder.setTotalPrice(totalPrice); 
        rentalOrder.setRentalOrderItems(rentalOrderItems);

        rentalOrderRepository.save(rentalOrder);
        rentalOrderItemRepository.saveAll(rentalOrderItems);

        cartService.clearCart(cart);

        return rentalOrder;
    }
    
    @Override
    public List<RentalOrder> getRentalOrdersByUserId(Long userId) {
        return rentalOrderRepository.findByUserId(userId);
    }
}
