package com.sunbeam.dto;

import javax.persistence.Entity;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;



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
    private Long id;

    @NotNull(message = "Cart ID is mandatory")
    private Long cartId;

    @NotNull(message = "Clothing Item ID is mandatory")
    private Long clothingItemId;

    @NotNull(message = "Quantity is mandatory")
    @DecimalMin(value = "1", inclusive = true)
    private int quantity;

    @NotNull(message = "Price per day is mandatory")
    @DecimalMin(value = "0.0", inclusive = false)
    private double pricePerDay;

    
}
