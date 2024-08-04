package com.sunbeam.dto;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

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

public class ClothingItemDTO {
    private Long id;

    @NotBlank(message = "Name is mandatory")
    @Size(max = 255)
    private String name;

    @Size(max = 1000)
    private String description;

    @NotNull(message = "Price per day is mandatory")
    @DecimalMin(value = "0.0", inclusive = false)
    private double pricePerDay;

    @Size(max = 50)
    private String size;

    @Size(max = 50)
    private String color;

    @NotNull(message = "Category ID is mandatory")
    private Long categoryId;

    @Size(max = 255)
    private String imageUrl;

    // getters and setters
}
