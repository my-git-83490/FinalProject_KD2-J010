package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sunbeam.entities.ClothingItem;
import java.util.List;

public interface ClothingItemDao extends JpaRepository<ClothingItem, Long> {
    List<ClothingItem> findBySellerId(Long sellerId);
}
