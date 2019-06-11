package com.example.demo.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.models.points.PointNodal;

public interface PointNodalRepository extends JpaRepository<PointNodal, Integer> {

}
