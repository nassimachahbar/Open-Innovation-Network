package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.example.demo.models.points.Projet;
import com.example.demo.repositories.ProjetRepository;

@Service
@Primary
public class ProjetService implements ICrudService<Projet, Integer> {
	
	@Autowired
	private ProjetRepository projetRepo;

	@Override
	public List<Projet> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void add(Projet entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void update(Projet entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void saveAll(List<Projet> iterable) {
		// TODO Auto-generated method stub
		
	}

}
