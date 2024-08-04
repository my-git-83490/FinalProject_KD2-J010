package com.sunbeam.service;


	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

import com.sunbeam.dao.CartDao;
import com.sunbeam.entities.Cart;

import java.util.List;

import javax.transaction.Transactional;

@Transactional
	@Service
	public class CartServiceImpl implements CartService {
	    @Autowired
	    private CartDao cartRepository;

	    public List<Cart> getAllCarts() {
	        return cartRepository.findAll();
	    }

	    public Cart getCartById(Long id) {
	        return cartRepository.findById(id).orElse(null);
	    }

	    public Cart saveCart(Cart cart) {
	        return cartRepository.save(cart);
	    }

	    public void deleteCart(Long id) {
	        cartRepository.deleteById(id);
	    }
	}

	

