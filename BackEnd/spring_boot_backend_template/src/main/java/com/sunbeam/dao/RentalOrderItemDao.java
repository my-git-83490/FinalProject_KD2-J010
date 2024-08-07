package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.RentalOrderItem;

public interface RentalOrderItemDao extends JpaRepository<RentalOrderItem, Long>{

}
