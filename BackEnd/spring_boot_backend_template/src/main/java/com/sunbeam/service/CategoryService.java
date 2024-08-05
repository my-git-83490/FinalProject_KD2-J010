package com.sunbeam.service;

import java.util.List;

import com.sunbeam.entities.Category;

public interface CategoryService {

	public List<Category> getAllCategories(); 

	public Category getCategoryById(Long id); 

	public Category saveCategory(Category category) ;

	public void deleteCategory(Long id); 
	
}
