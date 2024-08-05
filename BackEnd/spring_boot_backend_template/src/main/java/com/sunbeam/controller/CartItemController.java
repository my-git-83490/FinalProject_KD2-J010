package com.sunbeam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sunbeam.entities.CartItem;
import com.sunbeam.service.CartItemService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/cartItems")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;

    @GetMapping
    public List<CartItem> getAllCartItems() {
        return cartItemService.getAllCartItems();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CartItem> getCartItemById(@PathVariable Long id) {
        CartItem cartItem = cartItemService.getCartItemById(id);
        if (cartItem == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(cartItem);
    }

    @PostMapping
    public CartItem createCartItem(@Valid @RequestBody CartItem cartItem) {
        return cartItemService.saveCartItem(cartItem);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CartItem> updateCartItem(@PathVariable Long id, @Valid @RequestBody CartItem cartItemDetails) {
        CartItem cartItem = cartItemService.getCartItemById(id);
        if (cartItem == null) {
            return ResponseEntity.notFound().build();
        }

        cartItem.setCart(cartItemDetails.getCart());
        cartItem.setClothingItem(cartItemDetails.getClothingItem());
        cartItem.setQuantity(cartItemDetails.getQuantity());
        cartItem.setPricePerDay(cartItemDetails.getPricePerDay());

        CartItem updatedCartItem = cartItemService.saveCartItem(cartItem);
        return ResponseEntity.ok(updatedCartItem);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCartItem(@PathVariable Long id) {
        CartItem cartItem = cartItemService.getCartItemById(id);
        if (cartItem == null) {
            return ResponseEntity.notFound().build();
        }

        cartItemService.deleteCartItem(id);
        return ResponseEntity.noContent().build();
    }
}