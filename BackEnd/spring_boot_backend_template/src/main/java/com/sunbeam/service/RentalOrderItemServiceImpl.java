package com.sunbeam.service;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

import com.sunbeam.dao.RentalOrderItemDao;
import com.sunbeam.entities.RentalOrderItem;

import java.util.List;

import javax.transaction.Transactional;

	@Service
	@Transactional
	public class RentalOrderItemServiceImpl  implements RentalOrderItemService{

	    @Autowired
	    private RentalOrderItemDao rentalOrderItemDao;

	    public List<RentalOrderItem> getAllRentalOrderItems() {
	        return rentalOrderItemDao.findAll();
	    }

	    public RentalOrderItem getRentalOrderItemById(Long id) {
	        return rentalOrderItemDao.findById(id).orElse(null);
	    }

	    public RentalOrderItem saveRentalOrderItem(RentalOrderItem rentalOrderItem) {
	        return rentalOrderItemDao.save(rentalOrderItem);
	    }

	    public void deleteRentalOrderItem(Long id) {
	    	rentalOrderItemDao.deleteById(id);
	    }
	}


