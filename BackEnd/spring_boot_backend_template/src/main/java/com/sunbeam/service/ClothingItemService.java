package com.sunbeam.service;

import java.util.List;

import com.sunbeam.entities.ClothingItem;

public interface ClothingItemService {

	
	    public List<ClothingItem> getAllClothingItems() ;

	   
	    public ClothingItem getClothingItemById(Long id) ;

	    
	    public ClothingItem saveClothingItem(ClothingItem clothingItem);

	
	    public void deleteClothingItem(Long id) ;

	    public List<ClothingItem> getClothingItemsBySellerId(Long sellerId) ;
}
