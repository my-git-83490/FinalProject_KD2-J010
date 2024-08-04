package com.sunbeam.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;

@Data
public class AddClothingItemDTO {
    @NotNull
    @Size(min = 1, max = 255)
    private String name;
    
    private String description;
    
    @NotNull
    private double pricePerDay;
    
    @Size(min = 1, max = 50)
    private String size;
    
    @Size(min = 1, max = 50)
    private String color;
    
    @NotNull
    private Long categoryId;
    
    private String imageUrl;
    
    @NotNull
    private Long sellerId;
}