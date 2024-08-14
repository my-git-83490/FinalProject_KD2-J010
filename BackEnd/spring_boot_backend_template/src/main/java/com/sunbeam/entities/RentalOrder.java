package com.sunbeam.entities;

import lombok.*;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Setter
@ToString
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "rentalOrderItems"})
public class RentalOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private double totalPrice; 
    private String address; 
    private LocalDate orderDate;
    private LocalDate rentalPeriodStart;
    private LocalDate rentalPeriodEnd;

    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    @OneToMany(mappedBy = "rentalOrder", cascade = CascadeType.ALL)
    private List<RentalOrderItem> rentalOrderItems;
}
