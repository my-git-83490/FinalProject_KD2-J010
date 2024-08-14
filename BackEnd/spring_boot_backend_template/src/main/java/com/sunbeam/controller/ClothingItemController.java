//package com.sunbeam.controller;
//
//import com.sunbeam.dto.AddClothingItemDTO;
//import com.sunbeam.entities.ClothingItem;
//import com.sunbeam.service.ClothingItemService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import javax.validation.Valid;
//import java.io.IOException;
//import java.nio.file.Files;
//import java.nio.file.Path;
//import java.nio.file.Paths;
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/clothingItems")
//@CrossOrigin(origins = "http://localhost:3000")
//public class ClothingItemController {
//
//    private static final String UPLOADED_FOLDER = "/Users/tejas/Desktop/my-git-data/ADVJAVA/spring_boot_backend_template/src/main/resources/static/Images/";
//
//    @Autowired
//    private ClothingItemService clothingItemService;
//
//    @GetMapping
//    public List<ClothingItem> getAllClothingItems() {
//        return clothingItemService.getAllClothingItems();
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<ClothingItem> getClothingItemById(@PathVariable Long id) {
//        ClothingItem clothingItem = clothingItemService.getClothingItemById(id);
//        if (clothingItem == null) {
//            return ResponseEntity.notFound().build();
//        }
//        return ResponseEntity.ok(clothingItem);
//    }
//
//    @GetMapping("/seller/{sellerId}")
//    public List<ClothingItem> getClothingItemsBySellerId(@PathVariable Long sellerId) {
//        return clothingItemService.getClothingItemsBySellerId(sellerId);
//    }
//
//    @PostMapping("/upload")
//    public ResponseEntity<ClothingItem> createClothingItem(@RequestPart("clothingItem") @Valid AddClothingItemDTO clothingItemDTO,
//                                                           @RequestPart("file") MultipartFile file) {
//        if (file.isEmpty()) {
//            return ResponseEntity.badRequest().body(null);
//        }
//
//        try {
//            // Save file to the specified folder
//            byte[] bytes = file.getBytes();
//            Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
//            Files.write(path, bytes);
//
//            // Set the image URL to the clothing item DTO
//            clothingItemDTO.setImageUrl(path.toString());
//
//            ClothingItem newClothingItem = clothingItemService.saveClothingItem(clothingItemDTO);
//            return ResponseEntity.ok(newClothingItem);
//        } catch (IOException e) {
//            e.printStackTrace();
//            return ResponseEntity.status(500).body(null);
//        }
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity<ClothingItem> updateClothingItem(@PathVariable Long id,
//                                                           @RequestPart("clothingItem") @Valid AddClothingItemDTO clothingItemDTO,
//                                                           @RequestPart("file") MultipartFile file) {
//        if (file.isEmpty()) {
//            return ResponseEntity.badRequest().body(null);
//        }
//
//        try {
//            // Save file to the specified folder
//            byte[] bytes = file.getBytes();
//            Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
//            Files.write(path, bytes);
//
//            // Set the image URL to the clothing item DTO
//            clothingItemDTO.setImageUrl(path.toString());
//
//            ClothingItem updatedClothingItem = clothingItemService.updateClothingItem(id, clothingItemDTO);
//            return ResponseEntity.ok(updatedClothingItem);
//        } catch (IOException e) {
//            e.printStackTrace();
//            return ResponseEntity.status(500).body(null);
//        }
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteClothingItem(@PathVariable Long id) {
//        ClothingItem clothingItem = clothingItemService.getClothingItemById(id);
//        if (clothingItem == null) {
//            return ResponseEntity.notFound().build();
//        }
//
//        clothingItemService.deleteClothingItem(id);
//        return ResponseEntity.noContent().build();
//    }
//}


package com.sunbeam.controller;

import com.sunbeam.dto.AddClothingItemDTO;
import com.sunbeam.entities.ClothingItem;
import com.sunbeam.service.ClothingItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@RestController
@RequestMapping("/api/clothingItems")
@CrossOrigin(origins = "http://localhost:3000")
public class ClothingItemController {

    @Value("${file.upload-dir}")
    private String uploadDir;
    
    @Autowired
    private ClothingItemService clothingItemService;

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

    @PostMapping("/upload")
    public ResponseEntity<ClothingItem> createClothingItem(@RequestPart("clothingItem") @Valid AddClothingItemDTO clothingItemDTO,
                                                           @RequestPart("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body(null);
        }

        try {
            File directory = new File(uploadDir); 
            if (!directory.exists()) {
                directory.mkdirs();
            }
            
            String fileName = file.getOriginalFilename();
            Path filePath = Paths.get(uploadDir, fileName);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            clothingItemDTO.setImageUrl("http://localhost:8080/files/" + fileName);

            ClothingItem newClothingItem = clothingItemService.saveClothingItem(clothingItemDTO);
            return ResponseEntity.ok(newClothingItem);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(null);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<ClothingItem> updateClothingItem(@PathVariable Long id,
                                                           @RequestPart("clothingItem") @Valid AddClothingItemDTO clothingItemDTO,
                                                           @RequestPart("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body(null);
        }

        try {
            File directory = new File(uploadDir); 
            if (!directory.exists()) {
                directory.mkdirs();
            }
            
            String fileName = file.getOriginalFilename();
            Path filePath = Paths.get(uploadDir, fileName);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            clothingItemDTO.setImageUrl("http://localhost:8080/files/" + fileName);

            ClothingItem updatedClothingItem = clothingItemService.updateClothingItem(id, clothingItemDTO);
            return ResponseEntity.ok(updatedClothingItem);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(null);
        }
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
}


