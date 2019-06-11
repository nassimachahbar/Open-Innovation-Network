package com.example.demo.models.points;

import java.util.ArrayList;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;

@MappedSuperclass
public abstract class Point {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column
	private int idPointFocal;
	@Column
	public String nomEtablissement;
	public Float budgetOctroye;
	@Transient
	@JsonIgnore
	public ArrayList<Projet> projets;
	@Transient
	@JsonIgnore
	public ArrayList<Convention> conventionsPartenariat;

	public int getId() {
		return idPointFocal;
	}

	public void setId(int id) {
		this.idPointFocal = id;
	}
	
	public Float getBudgetOctroié() {
		return budgetOctroye;
	}

	public void setBudgetOctroié(Float budgetOctroié) {
		budgetOctroye = budgetOctroié;
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
