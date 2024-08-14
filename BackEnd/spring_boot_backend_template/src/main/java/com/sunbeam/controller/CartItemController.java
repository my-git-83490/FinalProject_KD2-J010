package com.sunbeam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sunbeam.dto.CartItemDTO;
import com.sunbeam.entities.Cart;
import com.sunbeam.entities.CartItem;
import com.sunbeam.entities.ClothingItem;
import com.sunbeam.entities.User;
import com.sunbeam.service.CartItemService;
import com.sunbeam.service.CartService;
import com.sunbeam.service.ClothingItemService;
import com.sunbeam.service.UserService; // Ensure UserService is added to your services

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/cartItems")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;

    @Autowired
    private CartService cartService;

    @Autowired
    private ClothingItemService clothingItemService;

    @Autowired
    private UserService userService; // Use UserService to get User by ID

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
    public ResponseEntity<CartItem> createCartItem(@Valid @RequestBody CartItemDTO cartItemDTO) {
        // Check if cart exists for the user
        Cart cart = cartService.getCartByUserId(cartItemDTO.getUserId());
        if (cart == null) {
            // Create a new cart if none exists
            User user = userService.getUserById(cartItemDTO.getUserId());
            if (user == null) {
                return ResponseEntity.badRequest().build(); // Return bad request if user does not exist
            }
            cart = new Cart();
            cart.setUser(user);
            cart = cartService.saveCart(cart); // Save the new cart
        }

        // Retrieve the ClothingItem by ID
        ClothingItem clothingItem = clothingItemService.getClothingItemById(cartItemDTO.getClothingItemId());
        if (clothingItem == null) {
            return ResponseEntity.badRequest().build(); // Return bad request if clothing item does not exist
        }

        // Create and save the new CartItem
        CartItem cartItem = new CartItem();
        cartItem.setCart(cart);
        cartItem.setClothingItem(clothingItem);
        cartItem.setQuantity(cartItemDTO.getQuantity());
        cartItem.setPricePerDay(clothingItem.getPricePerDay()); // Assuming price per day comes from the clothing item

        CartItem savedCartItem = cartItemService.saveCartItem(cartItem);
        return ResponseEntity.ok(savedCartItem);
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
