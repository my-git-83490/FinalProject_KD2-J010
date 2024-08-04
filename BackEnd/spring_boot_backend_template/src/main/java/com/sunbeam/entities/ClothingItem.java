package com.sunbeam.entities;


import java.math.BigDecimal;
import java.time.LocalDate;

import javax.persistence.*;

import lombok.*;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Setter
@ToString


public class ClothingItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private double pricePerDay;
    private String size;
    private String color;
    
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
    
    private String imageUrl;
    
    @ManyToOne
    @JoinColumn(name = "seller_id")
    private User seller;

   
}
