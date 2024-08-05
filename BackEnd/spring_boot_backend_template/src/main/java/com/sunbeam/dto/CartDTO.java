package com.sunbeam.dto;

import javax.persistence.Entity;
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
public class CartDTO {
    private Long id;

    @NotNull(message = "User ID is mandatory")
    private Long userId;

   
}
