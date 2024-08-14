package com.sunbeam.service;

import com.sunbeam.entities.CartItem;
import java.util.List;

public interface CartItemService {
    List<CartItem> getAllCartItems();
    CartItem getCartItemById(Long id);
    CartItem saveCartItem(CartItem cartItem);
    void deleteCartItem(Long id);
}
