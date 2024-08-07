package com.sunbeam.service;

import java.util.List;

import com.sunbeam.entities.RentalOrderItem;

public interface RentalOrderItemService {


    public List<RentalOrderItem> getAllRentalOrderItems();
   

    public RentalOrderItem getRentalOrderItemById(Long id); 
    public RentalOrderItem saveRentalOrderItem(RentalOrderItem rentalOrderItem) ;

    public void deleteRentalOrderItem(Long id); 
}

