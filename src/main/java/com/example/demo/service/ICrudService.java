package com.example.demo.service;

import java.util.List;

public interface ICrudService<T, ID> {
	
	Iterable<T> getAll();
	
	void add(T entity);
	
	void update(T entity);
	
	void delete(ID id);
	
	void saveAll(List<T> iterable);

	

}
