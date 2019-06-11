package com.example.demo.repositories;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.models.points.PointFocal;

public interface PointFocalRepository extends JpaRepository<PointFocal, Integer> {

	

}
