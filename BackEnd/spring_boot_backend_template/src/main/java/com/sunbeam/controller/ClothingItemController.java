package com.sunbeam.controller;

import com.sunbeam.dto.ClothingItemDTO;
import com.sunbeam.entities.Category;
import com.sunbeam.entities.ClothingItem;
import com.sunbeam.service.CategoryService;
import com.sunbeam.service.ClothingItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/api/clothingItems")
@CrossOrigin(origins = "http://localhost:3000")
public class ClothingItemController {

    private static final String UPLOAD_DIR = "images/";

    @Autowired
    private ClothingItemService clothingItemService;

    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public List<ClothingItem> getAllClothingItems() {
        return clothingItemService.getAllClothingItems();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClothingItem> getClothingItemById(@PathVariable Long id) {
        ClothingItem clothingItem = clothingItemService.getClothingItemById(id);
        if (clothingItem == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(clothingItem);
    }

    @GetMapping("/seller/{sellerId}")
    public List<ClothingItem> getClothingItemsBySellerId(@PathVariable Long sellerId) {
        return clothingItemService.getClothingItemsBySellerId(sellerId);
    }

    @PostMapping
    public ResponseEntity<ClothingItem> createClothingItem(@Valid @RequestPart("clothingItem") ClothingItemDTO clothingItemDTO,
                                                           @RequestPart("file") MultipartFile file) throws IOException {
        Category category = categoryService.getCategoryById(clothingItemDTO.getCategoryId());
        if (category == null) {
            return ResponseEntity.badRequest().body(null);
        }

        // Save the file to the upload directory
        String fileName = saveFile(file);

        ClothingItem clothingItem = new ClothingItem();
        clothingItem.setName(clothingItemDTO.getName());
        clothingItem.setDescription(clothingItemDTO.getDescription());
        clothingItem.setPricePerDay(clothingItemDTO.getPricePerDay());
        clothingItem.setSize(clothingItemDTO.getSize());
        clothingItem.setColor(clothingItemDTO.getColor());
        clothingItem.setCategory(category);
        clothingItem.setImageUrl(fileName);

        ClothingItem createdClothingItem = clothingItemService.saveClothingItem(clothingItem);
        return ResponseEntity.ok(createdClothingItem);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ClothingItem> updateClothingItem(@PathVariable Long id, @Valid @RequestPart("clothingItem") ClothingItemDTO clothingItemDTO,
                                                           @RequestPart("file") MultipartFile file) throws IOException {
        ClothingItem clothingItem = clothingItemService.getClothingItemById(id);
        if (clothingItem == null) {
            return ResponseEntity.notFound().build();
        }

        Category category = categoryService.getCategoryById(clothingItemDTO.getCategoryId());
        if (category == null) {
            return ResponseEntity.badRequest().body(null);
        }

        // Save the file to the upload directory
        String fileName = saveFile(file);

        clothingItem.setName(clothingItemDTO.getName());
        clothingItem.setDescription(clothingItemDTO.getDescription());
        clothingItem.setPricePerDay(clothingItemDTO.getPricePerDay());
        clothingItem.setSize(clothingItemDTO.getSize());
        clothingItem.setColor(clothingItemDTO.getColor());
        clothingItem.setCategory(category);
        clothingItem.setImageUrl(fileName);

        ClothingItem updatedClothingItem = clothingItemService.saveClothingItem(clothingItem);
        return ResponseEntity.ok(updatedClothingItem);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClothingItem(@PathVariable Long id) {
        ClothingItem clothingItem = clothingItemService.getClothingItemById(id);
        if (clothingItem == null) {
            return ResponseEntity.notFound().build();
        }

        clothingItemService.deleteClothingItem(id);
        return ResponseEntity.noContent().build();
    }

    private String saveFile(MultipartFile file) throws IOException {
        if (file.isEmpty()) {
            return null;
        }

        byte[] bytes = file.getBytes();
        Path path = Paths.get(UPLOAD_DIR + file.getOriginalFilename());
        Files.write(path, bytes);

        return path.toString();
    }
}
