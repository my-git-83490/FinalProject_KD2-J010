package com.sunbeam.dto;

import lombok.*;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RentalOrderCreationDTO {
    private Long userId;
    private String address;
    private LocalDate rentalPeriodStart;
    private LocalDate rentalPeriodEnd;
    
    
}
