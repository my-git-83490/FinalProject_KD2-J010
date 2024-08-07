package com.sunbeam.service;

	
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

import com.sunbeam.dao.RentalOrderDao;
import com.sunbeam.entities.RentalOrder;

import java.util.List;

import javax.transaction.Transactional;

@Transactional
@Service
	public class RentalOrderServiceImpl implements RentalOrderService {

	    @Autowired
	    private RentalOrderDao rentalOrderDao;

	    public List<RentalOrder> getAllRentalOrders() {
	        return rentalOrderDao.findAll();
	    }

	    public RentalOrder getRentalOrderById(Long id) {
	        return rentalOrderDao.findById(id).orElse(null);
	    }

	    public RentalOrder saveRentalOrder(RentalOrder rentalOrder) {
	        return rentalOrderDao.save(rentalOrder);
	    }

	    public void deleteRentalOrder(Long id) {
	    	rentalOrderDao.deleteById(id);
	    }
	}


