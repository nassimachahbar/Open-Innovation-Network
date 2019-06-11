package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.example.demo.models.points.PointNodal;
import com.example.demo.repositories.PointNodalRepository;

@Service
@Primary
public class PointNodalService implements ICrudService<PointNodal, Integer> {
	
	@Autowired
	private PointNodalRepository pointNodalRepo;

	@Override
	public List<PointNodal> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void add(PointNodal entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void update(PointNodal entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void saveAll(List<PointNodal> iterable) {
		// TODO Auto-generated method stub
		
	}

}
