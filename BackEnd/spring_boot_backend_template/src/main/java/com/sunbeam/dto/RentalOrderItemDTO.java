package com.sunbeam.dto;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;


import java.time.LocalDate;

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



public class RentalOrderItemDTO {
    private Long id;

    @NotNull(message = "Rental Order ID is mandatory")
    private Long rentalOrderId;

    @NotNull(message = "Clothing Item ID is mandatory")
    private Long clothingItemId;

    @NotNull(message = "Quantity is mandatory")
    @DecimalMin(value = "1", inclusive = true)
    private int quantity;

    @NotNull(message = "Price per day is mandatory")
    @DecimalMin(value = "0.0", inclusive = false)
    private double pricePerDay;
    
    private String address;

    @NotNull(message = "Rental date is mandatory")
    private LocalDate rentalDate;

    @NotNull(message = "Return date is mandatory")
    private LocalDate returnDate;

    @NotBlank(message = "Status is mandatory")
    private String status;

  
}
