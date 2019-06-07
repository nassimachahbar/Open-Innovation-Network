package com.example.demo.models.points;

import java.util.ArrayList;
import java.util.UUID;

public abstract class Point {
	
	private UUID id;
	public String nomEtablissement;
	public Float BudgetOctroié;
	public ArrayList<Projet> projets;
	public ArrayList<Convention> conventionsPartenariat;

	public Float getBudgetOctroié() {
		return BudgetOctroié;
	}

	public void setBudgetOctroié(Float budgetOctroié) {
		BudgetOctroié = budgetOctroié;
	}

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public String getNomEtablissement() {
		return nomEtablissement;
	}

	public void setNomEtablissement(String nomEtablissement) {
		this.nomEtablissement = nomEtablissement;
	}
	
	/*public void ajouterProjet(Projet projet) {
		this.projets.add(projet);
	}
	
	public void supprimerProjet(Projet projet) {
		this.projets.remove(projet);
	}*/
	

}
