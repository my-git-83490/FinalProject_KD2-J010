package com.sunbeam.service;

import com.sunbeam.dto.AddClothingItemDTO;
import com.sunbeam.entities.ClothingItem;

import java.util.List;

public interface ClothingItemService {
    List<ClothingItem> getAllClothingItems();
    ClothingItem getClothingItemById(Long id);
    ClothingItem saveClothingItem(AddClothingItemDTO clothingItemDTO);
    ClothingItem updateClothingItem(Long id, AddClothingItemDTO clothingItemDTO);
    void deleteClothingItem(Long id);
    
}