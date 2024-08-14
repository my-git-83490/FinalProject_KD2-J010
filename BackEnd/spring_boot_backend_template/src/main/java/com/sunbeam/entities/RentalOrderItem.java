package com.sunbeam.entities;

import lombok.*;
import javax.persistence.*;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Setter
@ToString
public class RentalOrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "rental_order_id")
    private RentalOrder rentalOrder;

    @ManyToOne
    @JoinColumn(name = "clothing_item_id")
    private ClothingItem clothingItem;

    private int quantity;
    private double pricePerDay;
    private String address; 
    private LocalDate rentalDate;
    private LocalDate returnDate;

    @Enumerated(EnumType.STRING)
    private RentalItemStatus status;
}
