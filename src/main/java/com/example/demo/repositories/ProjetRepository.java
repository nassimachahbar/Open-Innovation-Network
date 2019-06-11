package com.example.demo.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.models.points.Projet;

public interface ProjetRepository extends JpaRepository<Projet, UUID> {

}
