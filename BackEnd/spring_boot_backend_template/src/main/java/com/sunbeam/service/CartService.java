package com.sunbeam.service;

import java.util.List;

import com.sunbeam.entities.Cart;

public interface CartService {
  
	
	    Cart getCartByUserId(Long userId);
	
	    void clearCart(Cart cart);
	

	
    public List<Cart> getAllCarts() ;

    public Cart getCartById(Long id); 

    public Cart saveCart(Cart cart); 

    public void deleteCart(Long id); 
}
