package com.sunbeam.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.CategoryDao;
import com.sunbeam.dao.ClothingItemDao;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.AddClothingItemDTO;
import com.sunbeam.entities.Category;
import com.sunbeam.entities.ClothingItem;
import com.sunbeam.entities.User;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class ClothingItemServiceImpl implements ClothingItemService {

    @Autowired
    private ClothingItemDao clothingItemDao;

    @Autowired
    private CategoryDao categoryDao;

    @Autowired
    private UserDao userDao;

    @Override
    public List<ClothingItem> getAllClothingItems() {
        return clothingItemDao.findAll();
    }

    @Override
    public ClothingItem getClothingItemById(Long id) {
        return clothingItemDao.findById(id).orElse(null);
    }

    @Override
    public List<ClothingItem> getClothingItemsBySellerId(Long sellerId) {
        return clothingItemDao.findBySellerId(sellerId);
    }

    @Override
    public ClothingItem saveClothingItem(AddClothingItemDTO clothingItemDTO) {
        ClothingItem clothingItem = new ClothingItem();
        clothingItem.setName(clothingItemDTO.getName());
        clothingItem.setDescription(clothingItemDTO.getDescription());
        clothingItem.setPricePerDay(clothingItemDTO.getPricePerDay());
        clothingItem.setSize(clothingItemDTO.getSize());
        clothingItem.setColor(clothingItemDTO.getColor());

        Category category = categoryDao.findById(clothingItemDTO.getCategoryId()).orElse(null);
        clothingItem.setCategory(category);

        User seller = userDao.findById(clothingItemDTO.getSellerId()).orElse(null);
        clothingItem.setSeller(seller);

        clothingItem.setImageUrl(clothingItemDTO.getImageUrl());

        return clothingItemDao.save(clothingItem);
    }

    @Override
    public ClothingItem updateClothingItem(Long id, AddClothingItemDTO clothingItemDTO) {
        ClothingItem clothingItem = clothingItemDao.findById(id).orElse(null);
        if (clothingItem != null) {
            clothingItem.setName(clothingItemDTO.getName());
            clothingItem.setDescription(clothingItemDTO.getDescription());
            clothingItem.setPricePerDay(clothingItemDTO.getPricePerDay());
            clothingItem.setSize(clothingItemDTO.getSize());
            clothingItem.setColor(clothingItemDTO.getColor());

            Category category = categoryDao.findById(clothingItemDTO.getCategoryId()).orElse(null);
            clothingItem.setCategory(category);

            User seller = userDao.findById(clothingItemDTO.getSellerId()).orElse(null);
            clothingItem.setSeller(seller);

            clothingItem.setImageUrl(clothingItemDTO.getImageUrl());

            return clothingItemDao.save(clothingItem);
        }
        return null;
    }

    @Override
    public void deleteClothingItem(Long id) {
        clothingItemDao.deleteById(id);
    }
}
