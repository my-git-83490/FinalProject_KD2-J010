package com.sunbeam.service;

import java.util.List;

import com.sunbeam.entities.CartItem;

public interface CartItemService {
	 public List<CartItem> getAllCartItems(); 

	    public CartItem getCartItemById(Long id); 
	    public CartItem saveCartItem(CartItem cartItem); 

	    public void deleteCartItem(Long id); 
}
