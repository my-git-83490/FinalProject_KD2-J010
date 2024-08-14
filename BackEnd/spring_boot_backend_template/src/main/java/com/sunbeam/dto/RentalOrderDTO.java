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

public class RentalOrderDTO {
    private Long id;

    @NotNull(message = "User ID is mandatory")
    private Long userId;

    @NotNull(message = "Total price is mandatory")
    @DecimalMin(value = "0.0", inclusive = false)
    private double totalPrice;

    @NotNull(message = "Order date is mandatory")
    private LocalDate orderDate;
    
    private String address;

    @NotNull(message = "Rental period start date is mandatory")
    private LocalDate rentalPeriodStart;

    @NotNull(message = "Rental period end date is mandatory")
    private LocalDate rentalPeriodEnd;

    @NotBlank(message = "Status is mandatory")
    private String status;

    
}
