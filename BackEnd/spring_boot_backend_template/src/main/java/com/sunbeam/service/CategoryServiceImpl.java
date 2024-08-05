package com.sunbeam.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.CategoryDao;
import com.sunbeam.entities.Category;

import java.util.List;

import javax.transaction.Transactional;

@Transactional
@Service
public class CategoryServiceImpl  implements CategoryService{

	@Autowired
	private CategoryDao categoryDao;

	public List<Category> getAllCategories() {
		return categoryDao.findAll();
	}

	public Category getCategoryById(Long id) {
		return categoryDao.findById(id).orElse(null);
	}

	public Category saveCategory(Category category) {
		return categoryDao.save(category);
	}

	public void deleteCategory(Long id) {
		categoryDao.deleteById(id);
	}
}
