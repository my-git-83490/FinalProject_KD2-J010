package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.RentalOrder;

public interface RentalOrderDao extends JpaRepository<RentalOrder, Long>{

}
