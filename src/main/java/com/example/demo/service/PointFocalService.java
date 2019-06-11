package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.example.demo.models.points.PointFocal;
import com.example.demo.repositories.PointFocalRepository;

@Service
@Primary
public class PointFocalService implements ICrudService<PointFocal, Integer> {

	@Autowired
	private PointFocalRepository pointFocalRepo;
	
	@Override
	public List<PointFocal> getAll() {
		return pointFocalRepo.findAll();
	}

	@Override
	public void add(PointFocal produit) {
		pointFocalRepo.save(produit);
	}

	@Override
	public void update(PointFocal produit) {
		pointFocalRepo.save(produit);
	}

	@Override
	public void delete(Integer id) {
		PointFocal produit = new PointFocal();
		produit.setId(id.intValue());
		pointFocalRepo.delete(produit);
	}
	
	@Override
	public void saveAll(List<PointFocal> iterable) {
		pointFocalRepo.saveAll(iterable);	
	}
	
}
