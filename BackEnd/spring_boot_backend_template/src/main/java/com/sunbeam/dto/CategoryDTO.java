package com.sunbeam.dto;
import javax.validation.constraints.NotBlank;
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
public class CategoryDTO {
    private Long id;

    @NotBlank(message = "Name is mandatory")
    @Size(max = 255)
    private String name;

   
}
