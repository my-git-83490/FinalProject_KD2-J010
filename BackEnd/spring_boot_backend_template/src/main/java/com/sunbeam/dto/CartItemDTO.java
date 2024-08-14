package com.sunbeam.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor

@Getter
@Setter
@ToString

public class CartItemDTO {
    private Long userId;
    private Long clothingItemId;
    private Integer quantity;

    // Getters and Setters
}
