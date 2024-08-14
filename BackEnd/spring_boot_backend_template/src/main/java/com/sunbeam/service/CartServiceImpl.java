package com.sunbeam.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sunbeam.dao.CartDao;
import com.sunbeam.dao.CartItemDao;
import com.sunbeam.entities.Cart;
import java.util.List;
import javax.transaction.Transactional;

@Service
@Transactional
public class CartServiceImpl implements CartService {

    @Autowired
    private CartDao cartDao;

    @Autowired
    private CartItemDao cartItemDao; // Added @Autowired annotation

    @Override
    public Cart getCartByUserId(Long userId) {
        return cartDao.findByUserId(userId);
    }

    @Override
    public Cart saveCart(Cart cart) {
        return cartDao.save(cart);
    }

    @Override
    public List<Cart> getAllCarts() {
        return cartDao.findAll();
    }

    @Override
    public Cart getCartById(Long id) {
        return cartDao.findById(id).orElse(null);
    }

    @Override
    public void deleteCart(Long id) {
        cartDao.deleteById(id);
    }

    @Override
    public void clearCart(Cart cart) {
        cartItemDao.deleteByCart(cart); 
    }
}
