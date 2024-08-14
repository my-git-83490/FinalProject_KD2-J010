package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Cart;
import com.sunbeam.entities.CartItem;

public interface CartItemDao extends JpaRepository<CartItem, Long> {
	void deleteByCart(Cart cart); 
	
}
