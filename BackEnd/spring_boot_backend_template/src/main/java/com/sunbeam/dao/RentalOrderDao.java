package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.RentalOrder;

public interface RentalOrderDao extends JpaRepository<RentalOrder, Long>{
	 List<RentalOrder> findByUserId(Long userId);
}
