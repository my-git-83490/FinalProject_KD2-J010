package com.sunbeam.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.ClothingItemDao;
import com.sunbeam.entities.ClothingItem;

import java.util.List;

import javax.transaction.Transactional;

@Transactional
@Service
public class ClothingItemServiceImpl implements ClothingItemService {

    @Autowired
    private ClothingItemDao clothingItemDao;

    @Override
    public List<ClothingItem> getAllClothingItems() {
        return clothingItemDao.findAll();
    }

    @Override
    public ClothingItem getClothingItemById(Long id) {
        return clothingItemDao.findById(id).orElse(null);
    }

    @Override
    public ClothingItem saveClothingItem(ClothingItem clothingItem) {
        return clothingItemDao.save(clothingItem);
    }

    @Override
    public void deleteClothingItem(Long id) {
        clothingItemDao.deleteById(id);
    }

    public List<ClothingItem> getClothingItemsBySellerId(Long sellerId) {
        return clothingItemDao.findBySellerId(sellerId);
    }
}