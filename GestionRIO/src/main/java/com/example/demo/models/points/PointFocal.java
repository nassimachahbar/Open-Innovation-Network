package com.example.demo.models.points;

import java.util.ArrayList;

public class PointFocal extends Point {
	
	public Float budgetTotal;
	public ArrayList<PointNodal> pointsNodaux;

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
