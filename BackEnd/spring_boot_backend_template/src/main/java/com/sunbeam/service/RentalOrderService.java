package com.sunbeam.service;

import java.util.List;

import com.sunbeam.entities.RentalOrder;

public interface RentalOrderService {

	public List<RentalOrder> getAllRentalOrders(); 

    public RentalOrder getRentalOrderById(Long id); 

    public RentalOrder saveRentalOrder(RentalOrder rentalOrder); 

    public void deleteRentalOrder(Long id); 
}
