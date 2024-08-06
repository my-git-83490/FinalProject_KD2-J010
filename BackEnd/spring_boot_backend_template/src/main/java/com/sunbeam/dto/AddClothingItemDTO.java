package com.sunbeam.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.validation.constraints.NotBlank;
import java.math.BigDecimal;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class AddClothingItemDTO {
    @NotBlank(message = "Name is mandatory")
    private String name;
    private String description;
    private double pricePerDay;
    private String size;
    private String color;
    private Long categoryId;
    private Long sellerId;
    private String imageUrl;
}