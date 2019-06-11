package com.example.demo.models.points;

import java.util.ArrayList;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class PointFocal extends Point {
	

	private Float budgetTotal;
	
	@Transient
	@JsonIgnore
	public ArrayList<PointNodal> pointsNodaux;
	
	public PointFocal() {
		
	}

	public Float getBudgetTotal() {
		return budgetTotal;
	}

	public void setBudgetTotal(Float budgetTotal) {
		this.budgetTotal = budgetTotal;
	}
	
	public void ajouterPointNodal(PointNodal PN) {
		
		this.pointsNodaux.add(PN);
		
	}
	
	public void affecterBudget(PointNodal PN) {
		
	}

}
