package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Cart;

public interface CartDao extends JpaRepository<Cart, Long> {

}
