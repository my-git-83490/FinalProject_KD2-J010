package com.sunbeam.service;



	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

import com.sunbeam.dao.CartItemDao;
import com.sunbeam.entities.CartItem;

import java.util.List;

import javax.transaction.Transactional;

	@Service
	@Transactional
	public class CartItemServiceImpl implements CartItemService {

	    @Autowired
	    private CartItemDao cartItemDao;

	    public List<CartItem> getAllCartItems() {
	        return cartItemDao.findAll();
	    }

	    public CartItem getCartItemById(Long id) {
	        return cartItemDao.findById(id).orElse(null);
	    }

	    public CartItem saveCartItem(CartItem cartItem) {
	        return cartItemDao.save(cartItem);
	    }

	    public void deleteCartItem(Long id) {
	    	cartItemDao.deleteById(id);
	    }
	}


